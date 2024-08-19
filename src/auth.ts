import NextAuth, { Session, User } from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import { JWT } from 'next-auth/jwt'
import { nanoid } from 'nanoid';
const REFRESH_TOKEN_ERROR = 'RefreshAccessTokenError'

interface ExtendedUser extends User {
    accessToken: string;
    refreshToken: string;
    expiresAt: number;
}

interface ExtendedJWT extends JWT {
    accessToken: string;
    refreshToken: string;
    expiresAt: number;
    error?: string;
}

export const authOptions = {
    providers: [
        CredentialsProvider({
            name: 'Credentials',
            credentials: {
                email: { label: 'Email', type: 'text' },
                password: { label: 'Password', type: 'password' },
            },
            async authorize(credentials): Promise<ExtendedUser | null> {
                if (!credentials?.email || !credentials?.password) return null

                try {
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

                    return {
                        id: data.access_token,
                        email: credentials.email.toString(),
                        accessToken: data.access_token,
                        refreshToken: data.refresh_token,
                        expiresAt: Date.now() + data.expires,
                    }
                } catch (error) {
                    console.error('Error in authorize function:', error)
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

            if (Date.now() < extendedToken.expiresAt) {
                return extendedToken
            }

            return refreshAccessToken(extendedToken)
        },
        
        async session({ session, token }: {
            session: Session
            token: JWT
        }): Promise<Session> {
            const extendedToken = token as ExtendedJWT
            if (extendedToken) {
                session.user = {
                    ...session.user,
                    email: extendedToken.email!,
                    accessToken: extendedToken.accessToken,
                    refreshToken: extendedToken.refreshToken,
                    expiresAt: extendedToken.expiresAt,
                };

                if (extendedToken.error === REFRESH_TOKEN_ERROR) {
                    session.error = REFRESH_TOKEN_ERROR;
                }
            }
            return session;
        },
    },
    pages: {
        signIn: '/auth/signin',
    },
    session: {
        strategy: 'jwt' as const,
        maxAge: 30 * 24 * 60 * 60, // 30 days
        updateAge: 24 * 60 * 60,   // 24 hours
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

async function refreshAccessToken(token: ExtendedJWT): Promise<ExtendedJWT> {
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/auth/refresh`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token.accessToken}`,
            },
            body: JSON.stringify({
                refresh_token: token.refreshToken,
                mode: 'json',
            }),
        })

        if (!response.ok) {
            if (response.status === 401) {
                // Refresh token has expired
                return {
                    ...token,
                    error: 'RefreshTokenExpiredError',
                };
            }
            throw new Error('Failed to refresh token');
        }

        const data = await response.json()

        return {
            ...token,
            accessToken: data.data.access_token,
            refreshToken: data.data.refresh_token,
            expiresAt: Date.now() + data.data.expires,
        }
    } catch (error) {
        console.error('Error refreshing access token:', error)
        return {
            ...token,
            error: REFRESH_TOKEN_ERROR,
        }
    }
}

export const { auth, handlers, signIn, signOut } = NextAuth(authOptions)