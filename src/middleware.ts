import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { getToken } from 'next-auth/jwt'

export async function middleware(req: NextRequest) {
    const session = await getToken({
        req,
        secret: process.env.NEXTAUTH_SECRET,
        secureCookie: process.env.NODE_ENV === 'development',
    })

    const { pathname, origin } = req.nextUrl

    // Paths that require authentication
    const protectedPaths = ['/']

    // Check if the current path requires authentication
    const isProtectedPath = protectedPaths.some((path) =>
        pathname.startsWith(path)
    )

    // If the path requires authentication and the user is not authenticated, redirect to the sign-in page
    if (isProtectedPath && !session && pathname !== '/auth/signin') {
        const signInUrl = `${origin}/auth/signin?callbackUrl=${pathname}`
        return NextResponse.redirect(signInUrl)
    }

    // If the user is authenticated and trying to access the sign-in page, redirect to the home page
    if (session && pathname === '/auth/signin') {
        return NextResponse.redirect('/')
    }

    // If the user is authenticated and trying to access the sign-out page, sign them out
    if (session && pathname === '/auth/signout') {
        return NextResponse.redirect('/')
    }

    // Otherwise, allow the request to continue
    return NextResponse.next()
}

export const config = {
    matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)', '/'],
}
