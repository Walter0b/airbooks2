import NextAuth from 'next-auth';
import { DEFAULT_REDIRECT, PUBLIC_ROUTES, LOGIN } from '@/lib/routes';
import { authConfig } from '../auth.config';
import { NextResponse } from 'next/server';
import { handleError } from './utils/functions/log';
// Assuming handleError is in a separate file

const { auth } = NextAuth(authConfig);

const AUTH_CONFIG = {
  defaultRedirect: DEFAULT_REDIRECT,
  publicRoutes: PUBLIC_ROUTES,
  loginPage: LOGIN
};

export default auth((req) => {
  try {
    const { nextUrl } = req;
    const REDIRECTION_LINK = nextUrl.searchParams.get('callbackUrl') || AUTH_CONFIG.defaultRedirect;
    const isAuthenticated = !!req.auth;
    const isPublicRoute = AUTH_CONFIG.publicRoutes.includes(nextUrl.pathname);
    const isLoginPage = nextUrl.pathname === AUTH_CONFIG.loginPage;

    if (isAuthenticated) {
      if (isPublicRoute && !isLoginPage) {
        return NextResponse.redirect(new URL(AUTH_CONFIG.defaultRedirect, nextUrl));
      }
      if (isLoginPage) {
        return NextResponse.redirect(new URL(REDIRECTION_LINK, nextUrl));
      }
    } else if (!isPublicRoute && !isLoginPage) {
      const loginUrl = new URL(AUTH_CONFIG.loginPage, nextUrl);
      loginUrl.searchParams.append('callbackUrl', nextUrl.pathname);
      return NextResponse.redirect(loginUrl);
    }

    return NextResponse.next();
  } catch (error) {
    handleError(error, 'authentication middleware');
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    );
  }
});

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};
