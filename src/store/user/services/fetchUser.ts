import { createAsyncThunk } from '@reduxjs/toolkit';
import { AppDispatch, RootState } from '../../store.ts';
import { User } from '../../../components/Users/types/types.ts';
import { users } from '../../users/consts/users.ts';

export const fetchUser = createAsyncThunk<
    User,
    string,
    { dispatch: AppDispatch; state: RootState; rejectValue: unknown }
>(
    'user/fetchUser',
    async (id, thunkAPI) => {
        const { rejectWithValue } = thunkAPI;
        const user = users.find(user => user.id === id);
        try {
            await new Promise(resolve => setTimeout(resolve, 1000));
            if (!user) {
                throw new Error();
            }
            return user;
        } catch (e) {
            return rejectWithValue(e);
        }
    },
);
