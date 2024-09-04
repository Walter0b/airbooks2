import 'next-auth'


declare module 'next-auth' {
    interface Session {
        user: {
            email: string
            accessToken: string
            refreshToken: string
            expiresAt: number
        }
        error?: string
    }

    interface User {
        accessToken: string
        refreshToken: string
        expiresAt: number
    }
}

declare module 'next-auth/jwt' {
    interface JWT {
        accessToken: string
        refreshToken: string
        expiresAt: number
        error?: string
    }
}
