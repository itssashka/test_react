import { StateSchema } from '../../store.ts';
import { createSelector } from '@reduxjs/toolkit';

export const getUser = createSelector(
    (state: StateSchema) => state.user,
    (userState) => userState.data || undefined,
);

export const getUserIsLoading = (state: StateSchema) => state.user.isLoading;
export const getUserError = (state: StateSchema) => state.user.error;
