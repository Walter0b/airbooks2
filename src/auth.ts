import NextAuth, { Session, User } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import { JWT } from 'next-auth/jwt';
import { nanoid } from 'nanoid';
import { handleError } from './utils/functions/log';

const REFRESH_TOKEN_ERROR = 'RefreshAccessTokenError';
const REFRESH_TOKEN_EXPIRED = 'Unauthorized';

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

// Utility to debounce the input
function debounce<T extends (...args: any[]) => any>(func: T, delay: number) {
    let timeoutId: NodeJS.Timeout;
    return (...args: Parameters<T>) => {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => func(...args), delay);
    };
}

// Debounced input can be used before invoking the authorize function
const debouncedFetch = async (credentials: { email: string; password: string }): Promise<ExtendedUser | null> => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/auth/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(credentials),
    });

    if (!res.ok) {
        console.error(`Login failed: ${res.status} ${res.statusText}`);
        return null;
    }

    const { data } = await res.json();

    return {
        id: data.access_token,
        email: credentials.email.toString(),
        accessToken: data.access_token,
        refreshToken: data.refresh_token,
        expiresAt: Date.now() + data.expires,
    };
};

export const authOptions = {
    providers: [
        CredentialsProvider({
            name: 'Credentials',
            credentials: {
                email: { label: 'Email', type: 'text' },
                password: { label: 'Password', type: 'password' },
            },
            async authorize(credentials): Promise<ExtendedUser | null> {
                const email = credentials?.email as string;
                const password = credentials?.password as string;

                // Check if email and password are provided
                if (!email || !password) return null;

                try {
                    const user = await debouncedFetch({ email, password });
                    return user;
                } catch (error) {
                    handleError(error, 'authorize function');
                    return null;
                }
            },
        }),
    ],
    callbacks: {
        async jwt({ token, user }: { token: JWT; user?: any }) {
            if (user) {
                return { ...token, ...user } as ExtendedJWT;
            }

            const extendedToken = token as ExtendedJWT;

            // Check if the access token has expired
            if (Date.now() + 5000 < extendedToken.expiresAt) { // Adding a 5-second buffer
                return extendedToken;
            }

            // Try refreshing the access token if expired
            const refreshedToken = await refreshAccessToken(extendedToken);

            if (refreshedToken.error) {
                console.error('Failed to refresh access token:', refreshedToken.error);
            }

            return refreshedToken;
        },
        async session({ session, token }: { session: Session; token: JWT }): Promise<Session> {
            const extendedToken = token as ExtendedJWT;

            if (extendedToken) {
                if (extendedToken.error === REFRESH_TOKEN_EXPIRED) {
                    console.log("🚀 ~ Session cleared due to refresh token expiration");
                    return null as any;
                }

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
        }

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
};

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
                body: JSON.stringify({
                    refresh_token: token.refreshToken,
                    mode: 'json',
                }),
            }
        );

        if (!response.ok) {
            if (response.status === 401) {
                console.log("🚀 ~ Refresh token expired, status 401");

                return {
                    ...token,
                    error: REFRESH_TOKEN_EXPIRED,
                };
            }
            throw new Error('Failed to refresh token');
        }

        const data = await response.json();

        return {
            ...token,
            accessToken: data.data.access_token,
            refreshToken: data.data.refresh_token,
            expiresAt: Date.now() + data.data.expires,
        };
    } catch (error) {
        handleError(error, 'refreshing access token');
        return {
            ...token,
            error: REFRESH_TOKEN_ERROR,
        };
    }
}

export const { auth, handlers, signIn, signOut } = NextAuth(authOptions);
