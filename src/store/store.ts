import { configureStore } from '@reduxjs/toolkit';
import { UsersSchema } from './users/types/usersSchema.ts';
import { usersReducer } from './users/slices/usersSlice.tsx';
import { UserSchema } from './user/types/userSchema.ts';
import { userReducer } from './user/slices/userSlice.ts';

export interface StateSchema {
    users: UsersSchema;
    user: UserSchema;
}

export const store = configureStore<StateSchema>({
    reducer: {
        users: usersReducer,
        user: userReducer,
    },
});

export type AppStore = typeof store;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];
