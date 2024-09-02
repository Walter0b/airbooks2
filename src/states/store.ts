import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query/react'
import { api } from './reducer/apiSlice'
import modalReducer from './reducer/modalSlice'
import tableStatesReducer from './reducer/tableStatesSlice' // Import the new reducer

export const store = configureStore({
    reducer: {
        [api.reducerPath]: api.reducer,
        modal: modalReducer,
        tableStates: tableStatesReducer, // Add the new reducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(api.middleware),
})

setupListeners(store.dispatch)

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
