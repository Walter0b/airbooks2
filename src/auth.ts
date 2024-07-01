import NextAuth from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import { Session } from 'next-auth'
import { JWT } from 'next-auth/jwt'
import { NewSession, UserData } from './utils/types/next-auth.type'

export const { auth, handlers, signIn, signOut } = NextAuth({
    providers: [
        CredentialsProvider({
            name: 'Credentials',
            credentials: {
                email: { label: 'Email', type: 'text' },
                password: { label: 'Password', type: 'password' },
            },
            async authorize(credentials) {
                try {
                    const { email, password } = credentials as {
                        email: string
                        password: string
                    }

                    const res = await fetch(
                        `${process.env.NEXT_PUBLIC_BASE_URL}/auth/login`,
                        {
                            method: 'POST',
                            headers: {
                                'Content-Type': 'application/json',
                            },
                            body: JSON.stringify({ email, password }),
                        }
                    )

                    if (!res.ok) {
                        console.error(
                            `Failed to log in: ${res.status} ${res.statusText}`
                        )
                        return null
                    }

                    const response: UserData = await res.json()
                    const { data } = response
                    console.log('🚀 ~ authorize ~ data:', data)

                    return {
                        id: data.access_token,
                        name: 'name',
                        email: email,
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
    trustHost: true,
    session: {
        strategy: 'jwt',
    },
    pages: {
        signIn: '/auth/signin',
    },

    callbacks: {
        async jwt({ token, user }: { token: JWT; user?: any }) {
            if (user) {
                return {
                    ...token,
                    ...user,
                }
            }
            return token
        },
        async session({
            session,
            token,
        }: {
            session: Session
            token: JWT
        }): Promise<Session> {
            if (token) {
                session.user = {
                    ...session.user,
                    name: token.name || '',
                    email: token.email || '',
                    accessToken: token.accessToken as string,
                    refreshToken: token.refreshToken as string,
                    expiresAt: token.expiresAt as number,
                }
            }

            const expiresAt = session.user.expiresAt
            const refreshThreshold = 5 * 60 * 1000 // 5 minutes
            const shouldRefresh =
                expiresAt && expiresAt - Date.now() < refreshThreshold

            if (shouldRefresh) {
                try {
                    const newSession = await refreshAccessToken(
                        session.user.refreshToken,
                        session.user.accessToken
                    )
                    session.user = {
                        ...session.user,
                        ...newSession.user,
                    }
                } catch (error) {
                    console.error('Error refreshing access token:', error)
                    // Invalidate the session if refresh fails
                    // Return an empty session object instead of null to comply with the expected return type
                    return {
                        ...session,
                        user: {
                            ...session.user,
                            name: '',
                            email: '',
                            accessToken: '',
                            refreshToken: '',
                            expiresAt: 0,
                        },
                    }
                }
            }

            return session
        },
    },

    secret: process.env.NEXTAUTH_SECRET,
})

async function refreshAccessToken(
    refreshToken: string,
    accessToken: string
): Promise<NewSession> {
    try {
        const response = await fetch(
            `${process.env.NEXT_PUBLIC_BASE_URL}/auth/refresh`,
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${accessToken}`,
                },
                body: JSON.stringify({
                    refresh_token: refreshToken,
                    mode: 'json',
                }),
            }
        )

        if (!response.ok) {
            throw new Error(
                `Failed to refresh token: ${response.status} ${response.statusText}`
            )
        }

        const data: UserData = await response.json()

        return {
            user: {
                id: data.data.access_token,
                accessToken: data.data.access_token,
                refreshToken: data.data.refresh_token,
                expiresAt: Date.now() + data.data.expires,
            },
        }
    } catch (error) {
        console.error('Error refreshing access token:', error)
        throw error // Rethrow the error to handle it in the session callback
    }
}
