import { getToken } from 'next-auth/jwt';
import { NextRequest, NextResponse } from 'next/server';
import { DEFAULT_REDIRECT, PUBLIC_ROUTES, LOGIN } from './lib/routes';
import { handleError } from './utils/functions/log';

const AUTH_CONFIG = {
    defaultRedirect: DEFAULT_REDIRECT,
    publicRoutes: PUBLIC_ROUTES,
    loginPage: LOGIN,
};

const TOKEN_EXPIRY_THRESHOLD = 5 * 60 * 1000; // 5 minutes in milliseconds

export async function middleware(req: NextRequest) {
    try {
        const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });
        const { nextUrl } = req;
        const isPublicRoute = AUTH_CONFIG.publicRoutes.includes(nextUrl.pathname);
        const isLoginPage = nextUrl.pathname === AUTH_CONFIG.loginPage;
        const REDIRECTION_FLAG = 'redirected';

        // Already redirected, prevent further redirection
        if (req.cookies.get(REDIRECTION_FLAG)) {
            return NextResponse.next();
        }

        const baseUrl = `${req.nextUrl.protocol}//${req.nextUrl.host}`;

        if (token) {
            const expiresAt = token.expiresAt;

            // Ensure we skip further checks when already on the login page
            if (isLoginPage) {
                return NextResponse.next();
            }

            // Check if the token has expired
            if (expiresAt && Date.now() > expiresAt) {
                console.log('🚀 ~ Token expired, logging out user');
                const loginUrl = new URL(`${baseUrl}${AUTH_CONFIG.loginPage}`);
                loginUrl.searchParams.append('callbackUrl', nextUrl.pathname);
                return NextResponse.redirect(loginUrl.toString());
            }

            // Check if the token is about to expire within the next 5 minutes
            if (expiresAt && Date.now() + TOKEN_EXPIRY_THRESHOLD > expiresAt) {
                console.log('⚠️ Token is about to expire, redirecting to login');
                const loginUrl = new URL(`${baseUrl}${AUTH_CONFIG.loginPage}`);
                loginUrl.searchParams.append('callbackUrl', nextUrl.pathname);
                return NextResponse.redirect(loginUrl.toString());
            }

            // Redirect logged-in users away from the login page
            if (isLoginPage) {
                return NextResponse.redirect(`${baseUrl}${AUTH_CONFIG.defaultRedirect}`);
            }
        } else {
            // If token doesn't exist and user is trying to access a protected route, redirect to login
            if (!isPublicRoute && !isLoginPage) {
                const loginUrl = new URL(`${baseUrl}${AUTH_CONFIG.loginPage}`);
                loginUrl.searchParams.append('callbackUrl', nextUrl.pathname);
                return NextResponse.redirect(loginUrl.toString());
            }
        }

        return NextResponse.next();
    } catch (error) {
        handleError(error, 'authentication middleware');
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}




export const config = {
    matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};
