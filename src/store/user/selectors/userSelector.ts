import { StateSchema } from '../../store.ts';

export const getUser = (state: StateSchema) => state.user.data || undefined;
export const getUserIsLoading = (state: StateSchema) => state.user.isLoading;
export const getUserError = (state: StateSchema) => state.user.error;
