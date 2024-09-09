import { getToken } from 'next-auth/jwt'
import { NextRequest, NextResponse } from 'next/server'
import { DEFAULT_REDIRECT, PUBLIC_ROUTES, LOGIN } from './lib/routes'
import { handleError } from './utils/functions/log'

const AUTH_CONFIG = {
    defaultRedirect: DEFAULT_REDIRECT,
    publicRoutes: PUBLIC_ROUTES,
    loginPage: LOGIN,
}

const TOKEN_EXPIRY_THRESHOLD = 5 * 60 * 1000 // 5 minutes

export async function middleware(req: NextRequest) {
    try {
        const token = await getToken({
            req,
            secret: process.env.NEXTAUTH_SECRET!,
            salt: process.env.NEXTAUTH_SALT!,
        })
        // console.log("🚀 ~ middleware ~ token:", token)
        const isPublicRoute = AUTH_CONFIG.publicRoutes.includes(
            req.nextUrl.pathname
        )
        const isLoginPage = req.nextUrl.pathname === AUTH_CONFIG.loginPage
        const baseUrl = `${req.nextUrl.protocol}//${req.nextUrl.host}`

        if (token) {
            // console.log("🚀 ~ middleware ~ token:", token)
            const expiresAt = token.expiresAt as number | undefined

            // Redirect to login if token has expired
            if (expiresAt && Date.now() > expiresAt) {
                const loginUrl = new URL(`${baseUrl}${AUTH_CONFIG.loginPage}`)
                loginUrl.searchParams.set('callbackUrl', req.nextUrl.pathname)
                return NextResponse.redirect(loginUrl.toString())
            }

            // Redirect to login if token is about to expire
            if (expiresAt && Date.now() + TOKEN_EXPIRY_THRESHOLD > expiresAt) {
                const loginUrl = new URL(`${baseUrl}${AUTH_CONFIG.loginPage}`)
                loginUrl.searchParams.set('callbackUrl', req.nextUrl.pathname)
                return NextResponse.redirect(loginUrl.toString())
            }

            // If already logged in and trying to access login page, redirect to the default page
            if (isLoginPage) {
                return NextResponse.redirect(
                    `${baseUrl}${AUTH_CONFIG.defaultRedirect}`
                )
            }

            return NextResponse.next()
        } else {
            // If no token and trying to access a protected route, redirect to login
            if (!isPublicRoute && !isLoginPage) {
                const loginUrl = new URL(`${baseUrl}${AUTH_CONFIG.loginPage}`)
                loginUrl.searchParams.set('callbackUrl', req.nextUrl.pathname)
                return NextResponse.redirect(loginUrl.toString())
            }
        }

        return NextResponse.next()
    } catch (error) {
        handleError(error, 'authentication middleware')
        return NextResponse.json(
            { error: 'Internal Server Error' },
            { status: 500 }
        )
    }
}

export const config = {
    matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
}
