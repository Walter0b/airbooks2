import NextAuth from 'next-auth';
import { DEFAULT_REDIRECT, PUBLIC_ROUTES, LOGIN, ROOT } from '@/lib/routes';
import { authConfig } from '../auth.config';
import { NextResponse } from 'next/server';

const { auth } = NextAuth(authConfig);

export default auth((req) => {
    const { nextUrl } = req;

    const isAuthenticated = !!req.auth;
    const isPublicRoute = PUBLIC_ROUTES.includes(nextUrl.pathname);
    const isLoginPage = nextUrl.pathname === LOGIN;

    if (isPublicRoute && isAuthenticated && !isLoginPage)
        return Response.redirect(new URL(DEFAULT_REDIRECT, nextUrl));

    if (isAuthenticated && isLoginPage)
        return Response.redirect(new URL(ROOT, nextUrl));

    if (!isAuthenticated && !isPublicRoute && !isLoginPage) {
        const loginUrl = new URL(LOGIN, nextUrl);
        loginUrl.searchParams.append('callbackUrl', nextUrl.pathname); 
        return Response.redirect(loginUrl);
    }
    
    return NextResponse.next();
});

export const config = {
    matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};