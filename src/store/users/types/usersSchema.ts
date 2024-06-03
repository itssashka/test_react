import { User } from '../../../components/Users/types/types.ts';

export interface UsersSchema {
    isLoading?: boolean;
    error?: boolean;
    data?: User[];
}