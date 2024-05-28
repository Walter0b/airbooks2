import NextAuth, { DefaultSession } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import { middleware } from './middleware';

interface UserData {
    data: {
        expires: number,
        refresh_token: string,
        access_token: string
    }
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
                    const { email, password } = credentials as { email: string; password: string; };

                    const res = await fetch(`${process.env.BASE_URL}/auth/login`, {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({ email, password }),
                    });

                    if (!res.ok) {
                        // Log the error response for debugging
                        console.error(`Failed to log in: ${res.status} ${res.statusText}`);
                        return null;
                    }

                    const responce: UserData = await res.json();
                    const { data } = responce

                    return {
                        id: data.access_token,
                        name: 'name',
                        email: email,
                        accessToken: data.access_token,
                        refreshToken: data.refresh_token,
                        expiresAt: data.expires,
                    };
                } catch (error) {
                    console.error("Error in authorize function:", error);
                    return null;
                }
            },
        }),
    ],
    handlers: [
        middleware,
        // Add other handlers here
      ],
    session: {
        strategy: 'jwt',
    },
    pages: {
        signIn: '/auth/signin',
    }, callbacks: {
        async jwt({ token, user }) {
            if (user) {
                token.id = user.id;
                token.accessToken = user.accessToken;
                token.refreshToken = user.refreshToken;
                token.expiresAt = user.expiresAt;
            }
            return token;
        },
        async session({ session, token }) {
            console.log("🚀 ~ session ~ token:", token);
            console.log("🚀 ~ session ~ session:", session);

            if (token) {
                session.user = {
                    id: token.id,
                    name: token.name || '', // Provide a default value if name is missing
                    email: token.email || '', // Provide a default value if email is missing
                    accessToken: token.accessToken,
                    refreshToken: token.refreshToken,
                    expiresAt: token.expiresAt,
                };
            }

            return session;
        }
    },
    secret: process.env.NEXTAUTH_SECRET,
});