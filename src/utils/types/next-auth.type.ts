export interface UserData {
    data: {
        expires: number
        refresh_token: string
        access_token: string
    }
}

export interface NewSession {
    user: {
        id: string
        accessToken: string
        refreshToken: string
        expiresAt: number
    }
}
