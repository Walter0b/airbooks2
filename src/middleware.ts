import NextAuth from 'next-auth'
import { NextResponse } from 'next/server'
import { DEFAULT_REDIRECT, PUBLIC_ROUTES, LOGIN, ROOT } from '@/lib/routes'
import { authConfig } from '../auth.config'

const { auth } = NextAuth(authConfig)

export default auth((req) => {
    const { nextUrl } = req
    const isAuthenticated = !!req.auth
    const isPublicRoute = PUBLIC_ROUTES.includes(nextUrl.pathname)
    const isLoginPage = nextUrl.pathname === LOGIN

    // Get the intended destination, defaulting to DEFAULT_REDIRECT
    const intendedDestination = nextUrl.searchParams.get('callbackUrl') || DEFAULT_REDIRECT

    // Redirect authenticated users away from public routes (except login page)
    if (isAuthenticated && isPublicRoute && !isLoginPage) {
        return NextResponse.redirect(new URL(DEFAULT_REDIRECT, nextUrl))
    }

    // Redirect authenticated users on the login page to their intended destination
    if (isAuthenticated && isLoginPage) {
        return NextResponse.redirect(new URL(intendedDestination, nextUrl))
    }

    // Redirect unauthenticated users to login page if trying to access a protected route
    if (!isAuthenticated && !isPublicRoute) {
        const loginUrl = new URL(LOGIN, nextUrl)
        loginUrl.searchParams.set('callbackUrl', nextUrl.pathname)
        return NextResponse.redirect(loginUrl)
    }

    // Allow the request to proceed normally
    return NextResponse.next()
})

export const config = {
    matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
}