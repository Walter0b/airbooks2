import NextAuth, { Session, User } from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import { JWT } from 'next-auth/jwt'
import { nanoid } from 'nanoid'
import { handleError } from './utils/functions/log'

const REFRESH_TOKEN_ERROR = 'RefreshAccessTokenError'
const REFRESH_TOKEN_EXPIRED = 'Unauthorized'

interface ExtendedUser extends User {
    accessToken: string
    refreshToken: string
    expiresAt: number
}

interface ExtendedJWT extends JWT {
    accessToken: string
    refreshToken: string
    expiresAt: number
    error?: string
}

// Function to fetch user from the API
const fetchUser = async (credentials: {
    email: string
    password: string
}): Promise<ExtendedUser | null> => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/auth/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(credentials),
    })

    if (!res.ok) {
        console.error(`Login failed: ${res.status} ${res.statusText}`)
        return null
    }

    const { data } = await res.json()
    console.log('🚀 ~ fetchUser ~ data:', data)

    return {
        id: data.access_token,
        email: credentials.email.toString(),
        accessToken: data.access_token,
        refreshToken: data.refresh_token,
        expiresAt: Date.now() + data.expires * 1000,
    }
}

// Authentication options configuration
export const authOptions = {
    providers: [
        CredentialsProvider({
            name: 'Credentials',
            credentials: {
                email: { label: 'Email', type: 'text' },
                password: { label: 'Password', type: 'password' },
            },
            async authorize(credentials): Promise<ExtendedUser | null> {
                const email = credentials?.email as string
                const password = credentials?.password as string

                if (!email || !password) return null

                try {
                    const user = await fetchUser({ email, password })
                    return user
                } catch (error) {
                    handleError(error, 'authorize function')
                    return null
                }
            },
        }),
    ],
    callbacks: {
        async jwt({ token, user }: { token: JWT; user?: any }) {
            if (user) {
                return { ...token, ...user } as ExtendedJWT
            }

            const extendedToken = token as ExtendedJWT

            // Check if the access token has expired
            if (Date.now() + 5000 < extendedToken.expiresAt) {
                return extendedToken
            }

            try {
                return await refreshAccessToken(extendedToken)
            } catch (error) {
                console.error('Error refreshing access token:', error)
                return { ...extendedToken, error: REFRESH_TOKEN_ERROR }
            }
        },
        async session({
            session,
            token,
        }: {
            session: Session
            token: JWT
        }): Promise<Session> {
            const extendedToken = token as ExtendedJWT

            if (extendedToken.error === REFRESH_TOKEN_EXPIRED) {
                console.log('Session cleared due to refresh token expiration')
                return null as any
            }

            session.user = {
                ...session.user,
                email: extendedToken.email!,
                accessToken: extendedToken.accessToken,
                refreshToken: extendedToken.refreshToken,
                expiresAt: extendedToken.expiresAt,
            }

            if (extendedToken.error === REFRESH_TOKEN_ERROR) {
                session.error = REFRESH_TOKEN_ERROR
            }

            return session
        },
    },
    pages: {
        signIn: '/auth/signin',
        signOut: '/auth/signout',
        error: '/auth/error',
        redirect: '/core/travelers',
    },
    session: {
        strategy: 'jwt' as const,
        maxAge: 30 * 24 * 60 * 60, // 30 days
        updateAge: 24 * 60 * 60, // 24 hours
        generateSessionToken: () => nanoid(),
        cookieName: 'next-auth.session-token',
        cookieOptions: {
            httpOnly: true,
            sameSite: 'strict',
            path: '/',
            secure: process.env.NODE_ENV === 'production',
        },
    },
    secret: process.env.NEXTAUTH_SECRET,
}

// Refresh access token logic
async function refreshAccessToken(token: ExtendedJWT): Promise<ExtendedJWT> {
    try {
        const response = await fetch(
            `${process.env.NEXT_PUBLIC_BASE_URL}/auth/refresh`,
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token.refreshToken}`,
                },
                body: JSON.stringify({ refresh_token: token.refreshToken }),
            }
        )

        if (!response.ok) {
            if (response.status === 401) {
                return { ...token, error: REFRESH_TOKEN_EXPIRED }
            }
            throw new Error('Failed to refresh token')
        }

        const data = await response.json()

        return {
            ...token,
            accessToken: data.data.access_token,
            refreshToken: data.data.refresh_token,
            expiresAt: Date.now() + data.data.expires * 1000,
        }
    } catch (error) {
        handleError(error, 'refreshing access token')
        return { ...token, error: REFRESH_TOKEN_ERROR }
    }
}

export const { auth, handlers, signIn, signOut } = NextAuth(authOptions)
