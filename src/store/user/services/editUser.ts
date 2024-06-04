import { createAsyncThunk } from '@reduxjs/toolkit';
import { AppDispatch, RootState } from '../../store.ts';
import { User } from '../../../components/Users/types/types.ts';

export const editUser = createAsyncThunk<
    User,
    User,
    { dispatch: AppDispatch; state: RootState; rejectValue: unknown }
>(
    'user/editUser',
    async (newUser, thunkAPI) => {
        const { rejectWithValue } = thunkAPI;
        try {
            await new Promise(resolve => setTimeout(resolve, 1000));
            if (!newUser) {
                throw new Error();
            }
            return newUser;
        } catch (e) {
            return rejectWithValue(e);
        }
    },
);
