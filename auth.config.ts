import type { NextAuthConfig } from 'next-auth'

export const authConfig = {
    session: {
        strategy: 'jwt',
    },
    trustHost: true,
    pages: {
        error: '/',
        signIn: '/',
        signOut: '/',
    },
    callbacks: {
        authorized({ auth }) {
            const isAuthenticated = !!auth?.user

            return isAuthenticated
        },
    },
    providers: [],
} satisfies NextAuthConfig
