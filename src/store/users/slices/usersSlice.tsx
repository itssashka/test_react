import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { UsersSchema } from '../types/usersSchema.ts';
import { fetchUsers } from '../services/fetchUsers.ts';
import { User } from '../../../components/Users/types/types.ts';
import { editUser } from '../../user/services/editUser.ts';

const initialState: UsersSchema = {
    isLoading: false,
    error: undefined,
    data: undefined,
};

export const usersSlice = createSlice({
    name: 'usersSlice',
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
            .addCase(fetchUsers.rejected, (state) => {
                state.isLoading = false;
                state.error = true;
            });
    },
});

export const { actions: usersActions } = usersSlice;
export const { reducer: usersReducer } = usersSlice;
