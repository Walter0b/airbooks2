import NextAuth from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'

export const { auth, handlers, signIn, signOut } = NextAuth({
    providers: [
        CredentialsProvider({
            name: 'Credentials',
            credentials: {
                email: { label: 'Email', type: 'text' },
                password: { label: 'Password', type: 'password' },
            },
            async authorize(credentials, req) {
                const { email, password } = credentials as {
                    email: string
                    password: string
                }

                // Make a request to your existing API for authentication
                const res = await fetch(`${process.env.BASE_URL}/auth/login`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ email, password }),
                })

                const user = await res.json()

                // If the authentication was successful, return the user object
                if (res.ok) {
                    return user
                }

                // Otherwise, return null to indicate authentication failure
                return null
            },
        }),
    ],
    session: {
        strategy: 'jwt',
    },
    pages: {
        signIn: '/auth/signin',
    },
})
