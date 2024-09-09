import { configureStore, Reducer } from '@reduxjs/toolkit'
import { api } from './reducer/apiSlice'
import modalReducer from './reducer/modalSlice'
import tableStatesReducer from './reducer/tableStatesSlice'

// Explicitly declare the type of your reducer object
const rootReducer = {
    [api.reducerPath]: api.reducer as Reducer, // Cast api.reducer to Reducer
    modal: modalReducer as Reducer,
    tableStates: tableStatesReducer as Reducer,
}

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(api.middleware),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
