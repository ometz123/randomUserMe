import { configureStore } from '@reduxjs/toolkit'
import randomUserReducer from './randomUserSlice'

export const store = configureStore({
    reducer: {
        randomUser: randomUserReducer,
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
