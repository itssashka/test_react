import { configureStore } from '@reduxjs/toolkit';
import { UsersSchema } from './users/types/usersSchema.ts';
import { usersReducer } from './users/slices/userSlice.tsx';

export interface StateSchema {
    users: UsersSchema;
}

export const store = configureStore<StateSchema>({
    reducer: {
        users: usersReducer,
    },
})

export type AppStore = typeof store;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];
