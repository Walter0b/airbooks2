import NextAuth, { DefaultSession, type User } from "next-auth"
import CredentialsProvider from 'next-auth/providers/credentials';


interface UserData {
    data: {
        expires: number,
        refresh_token: string,
        access_token: string
    }
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

    session: {
        strategy: 'jwt',
    },
    pages: {
        signIn: '/auth/signin',
    },
    callbacks: {
        async jwt({ token, user }) {
            if (user) {
                return {
                    ...user,
                };
            }
            return token;
        },
        async session({ session, token }) {

            console.log("🚀 ~ session ~ token:", token);


            if (token.user) {
                    session.user.name= token.name || '',
                    session.user.email= token.email || '',
                    session.user.accessToken= token.accessToken as string,
                    session.user.refreshToken= token.refreshToken  as string,
                    session.user.expiresAt= token.expiresAt as number
 
            }
            console.log("🚀 ~ session ~ session:", session);
            const expiresAt = session.user.expiresAt;
            const refreshThreshold = 5 * 60 * 1000; // 5 minutes in milliseconds
            const shouldRefresh = expiresAt && expiresAt - Date.now() < refreshThreshold;

            if (shouldRefresh) {
                const newSession = await refreshAccessToken(session.user.refreshToken);
                session.user = newSession.user;
            }

            return session;

        }
    },
    secret: process.env.NEXTAUTH_SECRET,
});
async function refreshAccessToken(refreshToken: string) {
    try {
        const response = await fetch(`${process.env.BASE_URL}/auth/refresh`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ refreshToken }),
        });

        if (!response.ok) {
            throw new Error(`Failed to refresh token: ${response.status} ${response.statusText}`);
        }

        const data: UserData = await response.json();

        // Update the session with the new access token and expiration time
        return {
            user: {
                id: data.data.access_token,
                // name: 'name',
                // email: 'email@example.com',
                accessToken: data.data.access_token,
                refreshToken: data.data.refresh_token,
                expiresAt: data.data.expires,
            },
        };
    } catch (error) {
        console.error('Error refreshing access token:', error);
        throw error;
    }
}
