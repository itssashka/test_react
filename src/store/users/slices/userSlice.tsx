import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { UsersSchema } from '../types/usersSchema.ts';
import { fetchUsers } from '../services/fetchUsers.ts';
import { User } from '../../../components/Users/types/types.ts';

const initialState: UsersSchema = {
    isLoading: false,
    error: undefined,
    data: undefined,
};

export const userSlice = createSlice({
    name: 'userSlice',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchUsers.pending, (state) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(
                fetchUsers.fulfilled,
                (
                    state,
                    action: PayloadAction<User[]>,
                ) => {
                    state.isLoading = false;
                    state.data = action.payload;
                },
            )
            .addCase(fetchUsers.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    },
});

export const { actions: usersActions } = userSlice;
export const { reducer: usersReducer } = userSlice;
