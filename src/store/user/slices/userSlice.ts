import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { UserSchema } from '../types/userSchema.ts';
import { User } from '../../../components/Users/types/types.ts';
import { fetchUser } from '../services/fetchUser.ts';
import { editUser } from '../services/editUser.ts';

const initialState: UserSchema = {
    data: undefined,
    isLoading: false,
    error: undefined,
}; 

export const userSlice = createSlice({
    name: 'userSlice',
    initialState,
    reducers: {
        updateUser: (state, action: PayloadAction<User>) => {
            state.data = {
                ...state.data,
                ...action.payload,
            };
        },
    },
    extraReducers: builder => {
        builder
            .addCase(fetchUser.pending, (state) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(
                fetchUser.fulfilled,
                (
                    state,
                    action: PayloadAction<User>,
                ) => {
                    state.isLoading = false;
                    state.data = action.payload;
                },
            )
            .addCase(fetchUser.rejected, (state) => {
                state.isLoading = false;
                state.error = true;
            })
            .addCase(editUser.pending, (state) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(
                editUser.fulfilled,
                (
                    state,
                    action: PayloadAction<User>,
                ) => {
                    state.isLoading = false;
                    state.data = action.payload;
                    console.log('Пользователь обновлен');
                },
            )
            .addCase(editUser.rejected, (state) => {
                state.isLoading = false;
                state.error = true;
            });
    },
});

export const { actions: userActions } = userSlice;
export const { reducer: userReducer } = userSlice;
