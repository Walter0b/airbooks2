import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit'

interface AuthState {
    isAuthenticated: boolean
    accessToken: string | null
    refreshToken: string | null
    expiresAt: number | null
    error: string | null
}

interface LoginPayload {
    accessToken: string
    refreshToken: string
    expiresAt: number
}

interface LogoutPayload {
    reason: string
}

const initialState: AuthState = {
    isAuthenticated: false,
    accessToken: null,
    refreshToken: null,
    expiresAt: null,
    error: null,
}

const baseUrl = process.env.BASE_URL

export const login = createAsyncThunk(
    'auth/login',
    async (
        credentials: { email: string; password: string },
        { rejectWithValue }
    ) => {
        const response = await fetch(`${baseUrl}/auth/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(credentials),
        })

        if (!response.ok) {
            const errorData = await response.json()
            return rejectWithValue(errorData.message || 'Login failed')
        }

        const data = await response.json()
        console.log('🚀 ~ data:', data)
        const {
            access_token: accessToken,
            refresh_token: refreshToken,
            expires,
        } = data.data
        console.log('🚀 ~ accessToken:', accessToken)
        const expiresAt = new Date(expires).getTime()

        return { accessToken, refreshToken, expiresAt }
    }
)

export const logout = createAsyncThunk(
    'auth/logout',
    async (reason: string) => {
        // Perform any necessary logout
        return { reason }
    }
)

export const refreshToken = createAsyncThunk(
    'auth/refreshToken',
    async (_, { getState }) => {
        const state = getState() as { auth: AuthState }
        const refreshToken = state.auth.refreshToken
        if (!refreshToken) {
            throw new Error('No refresh token available')
        }
        const response = await fetch(`${baseUrl}/refresh-token`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ refreshToken }),
        })
        if (!response.ok) {
            throw new Error('Failed to refresh token')
        }
        const data = await response.json()
        const { accessToken, refreshToken: newRefreshToken, expires } = data
        const expiresAt = new Date(expires).getTime()

        return { accessToken, refreshToken: newRefreshToken, expiresAt }
    }
)

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        logout(state, action: PayloadAction<LogoutPayload>) {
            console.log('🚀 ~ logout ~ logout:')
            const { reason } = action.payload
            state.isAuthenticated = false
            state.accessToken = null
            state.refreshToken = null
            state.expiresAt = null
            state.error = null

            sessionStorage.removeItem('accessToken')
            sessionStorage.removeItem('refreshToken')
            sessionStorage.removeItem('expiresAt')

            console.log(`Logged out due to: ${reason}`)
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(
                login.fulfilled,
                (state, action: PayloadAction<LoginPayload>) => {
                    const { accessToken, refreshToken, expiresAt } =
                        action.payload
                    console.log('extraReducers executed', action.payload)
                    state.isAuthenticated = true
                    state.accessToken = accessToken
                    state.refreshToken = refreshToken
                    state.expiresAt = expiresAt
                    state.error = null

                    sessionStorage.setItem('accessToken', accessToken)
                    sessionStorage.setItem('refreshToken', refreshToken)
                    sessionStorage.setItem('expiresAt', expiresAt.toString())
                }
            )
            .addCase(
                refreshToken.fulfilled,
                (state, action: PayloadAction<LoginPayload>) => {
                    const { accessToken, refreshToken, expiresAt } =
                        action.payload
                    state.accessToken = accessToken
                    state.refreshToken = refreshToken
                    state.expiresAt = expiresAt
                    state.error = null

                    sessionStorage.setItem('accessToken', accessToken)
                    sessionStorage.setItem('refreshToken', refreshToken)
                    sessionStorage.setItem('expiresAt', expiresAt.toString())
                }
            )
            .addCase(refreshToken.rejected, (state, action) => {
                console.error('Failed to refresh token:', action.error.message)
                // You can also dispatch additional actions or reset the state as needed
            })
    },
})

export const { logout: logoutAction } = authSlice.actions
export default authSlice.reducer
