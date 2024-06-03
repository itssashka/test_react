import { createAsyncThunk } from '@reduxjs/toolkit';
import { AppDispatch, RootState } from '../../store.ts';
import { User } from '../../../components/Users/types/types.ts';
import { users } from '../consts/users.ts';


export const fetchUsers = createAsyncThunk<
    User[],
    void,
    { dispatch: AppDispatch; state: RootState; rejectValue: any }
>(
    'users.ts/fetchUsers',
    async (_, thunkAPI) => {
        const { rejectWithValue } = thunkAPI;
        try {
            await new Promise(resolve => setTimeout(resolve, 1000))
            return users;
        } catch (e) {
            return rejectWithValue(e);
        }
    },
);
