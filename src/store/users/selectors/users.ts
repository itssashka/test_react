import { StateSchema } from '../../store.ts';
import { createSelector } from '@reduxjs/toolkit';

export const getUsers = createSelector(
    (state: StateSchema) => state.users,
    (usersState) => usersState.data || [],
);
export const getUsersIsLoading = (state: StateSchema) => state.users.isLoading;
export const getUsersError = (state: StateSchema) => state.users.error;
