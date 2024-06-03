import { createAsyncThunk } from '@reduxjs/toolkit';
import { AppDispatch, RootState } from '../../store.ts';
import { User } from '../../../components/Users/types/types.ts';
import { users } from '../../users/consts/users.ts';

interface EditUserProps {
    id: string;
    newUser: User;
}

export const editUser = createAsyncThunk<
    User[],
    EditUserProps,
    { dispatch: AppDispatch; state: RootState; rejectValue: unknown }
>(
    'user/editUser',
    async ({ id, newUser }, thunkAPI) => {
        const { rejectWithValue } = thunkAPI;
        const newUsers = users.map(user => {
            if (user.id === id) {
                return newUser;
            } else {
                return user;
            }
        });
        try {
            await new Promise(resolve => setTimeout(resolve, 1000));
            if (!newUsers) {
                throw new Error();
            }
            return newUsers;
        } catch (e) {
            return rejectWithValue(e);
        }
    },
);
