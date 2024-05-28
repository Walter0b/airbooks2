import NextAuth, { DefaultSession } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

interface UserData {
    id: string;
    name: string;
    email: string;
    accessToken: string;
    refreshToken: string;
    expires: number;
}

interface CustomSession extends DefaultSession {
    user: {
        id: string;
        name: string;
        email: string;
        accessToken: string;
        expiresAt: number;
    };
}

export const { auth, handlers, signIn, signOut } = NextAuth<CustomSession>({
    providers: [
        CredentialsProvider({
            name: 'Credentials',
            credentials: {
                email: { label: 'Email', type: 'text' },
                password: { label: 'Password', type: 'password' },
            },
            async authorize(credentials) {
                const { email, password } = credentials as { email: string; password: string; };

                // Make a request to your existing API for authentication
                const res = await fetch(`${process.env.BASE_URL}/auth/login`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ email, password }),
                });

                const data: UserData = await res.json();

                // If the authentication was successful, return the user object
                if (res.ok) {
                    return {
                        id: data.id,
                        name: data.name,
                        email: data.email,
                        accessToken: data.accessToken,
                        refreshToken: data.refreshToken,
                        expiresAt: data.expires,
                    };
                }

                // Otherwise, return null to indicate authentication failure
                return null;
            },
        }),
    ],
    session: {
        strategy: 'jwt',
    },
    pages: {
        signIn: '/auth/signin',
    },
    callbacks: {
        async jwt({ token, user }) {
            // Update the token with the access token, refresh token, and expiration time
            if (user) {
                token.accessToken = user.accessToken;
                token.refreshToken = user.refreshToken;
                token.expiresAt = user.expiresAt;
            }
            return token;
        },
        async session({ session, token }) {
            // Update the session with the access token and expiration time
            session.user.accessToken = token.accessToken;
            session.user.expiresAt = token.expiresAt;
            return session;
        },
    },
});