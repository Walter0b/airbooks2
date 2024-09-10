import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface TableState {
    page: number
    pageSize: number
    sort: string[]
     /* eslint-disable-next-line "@typescript-eslint/no-explicit-any" */
    filter?: Record<string, any>
    search?: string
}

export interface TableStatesState {
    [pageName: string]: TableState
}

const initialState: TableStatesState = {}

const tableStatesSlice = createSlice({
    name: 'tableStates',
    initialState,
    reducers: {
        setTableState: (
            state,
            action: PayloadAction<{ pageName: string; tableState: TableState }>
        ) => {
            const { pageName, tableState } = action.payload
            state[pageName] = tableState
        },
        resetTableState: (state, action: PayloadAction<string>) => {
            delete state[action.payload]
        },
    },
})

export const { setTableState, resetTableState } = tableStatesSlice.actions
export default tableStatesSlice.reducer
