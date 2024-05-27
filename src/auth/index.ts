import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

export const { auth, handlers, signIn, signOut } = NextAuth({
    providers: [
        CredentialsProvider({
            name: 'Credentials',
            credentials: {
                email: { label: 'Email', type: 'text' },
                password: { label: 'Password', type: 'password' },
            },
            async authorize(credentials, req) {
                const { email, password } = credentials as { email: string; password: string; };

                
                const res = await fetch(`${process.env.BASE_URL}/auth/login`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ email, password }),
                });

                const data = await res.json();

                
                if (res.ok) {
                    return {
                        id: data.id, 
                        name: data.name, 
                        email: email,
                        accessToken: data.accessToken, 
                        refreshToken: data.refreshToken, 
                        expiresAt: data.expires, 
                    };
                }

                
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
            if (user) {
                token.accessToken = user.accessToken;
                token.refreshToken = user.refreshToken;
                token.expiresAt = user.expiresAt;
            }
            return token;
        },
        async session({ session, token }) {
            session.user.accessToken = token.accessToken;
            session.user.expiresAt = token.expiresAt;
            return session;
        },
    },
});