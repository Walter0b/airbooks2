import NextAuth from 'next-auth'
import { DEFAULT_REDIRECT, PUBLIC_ROUTES, LOGIN } from '@/lib/routes'
import { authConfig } from '../auth.config'
import { NextResponse } from 'next/server'

const { auth } = NextAuth(authConfig)

export default auth((req) => {
    try {
        const { nextUrl } = req
        const REDIRECTION_LINK =
            nextUrl.searchParams.get('callbackUrl') || DEFAULT_REDIRECT
        const isAuthenticated = !!req.auth
        const isPublicRoute = PUBLIC_ROUTES.includes(nextUrl.pathname)
        const isLoginPage = nextUrl.pathname === LOGIN

        if (isPublicRoute && isAuthenticated && !isLoginPage)
            return Response.redirect(new URL(DEFAULT_REDIRECT, nextUrl))

        if (isAuthenticated && isLoginPage)
            return Response.redirect(new URL(REDIRECTION_LINK, nextUrl))

        if (!isAuthenticated && !isPublicRoute && !isLoginPage) {
            const loginUrl = new URL(LOGIN, nextUrl)
            loginUrl.searchParams.append('callbackUrl', nextUrl.pathname)
            return Response.redirect(loginUrl)
        }

        return NextResponse.next()
    } catch (error) {
        console.error('Error in authentication middleware:', error)
        return NextResponse.json(
            { error: 'Internal Server Error' },
            { status: 500 }
        )
    }
})

export const config = {
    matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
}
