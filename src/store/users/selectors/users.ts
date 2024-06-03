import { StateSchema } from '../../store.ts';

export const getUsers = (state: StateSchema) => state.users.data || [];
export const getUsersIsLoading = (state: StateSchema) => state.users.isLoading;
export const getUsersError = (state: StateSchema) => state.users.error;
