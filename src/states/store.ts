import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query/react';
import { api } from './reducer/apiSlice';
import modalReducer from './reducer/modalSlice';
export const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
    modal: modalReducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(api.middleware);
  },
})

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
