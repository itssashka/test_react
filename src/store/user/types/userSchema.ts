import { User } from '../../../components/Users/types/types.ts';

export interface UserSchema {
    data?: User;
    isLoading?: boolean;
    error?: boolean;
}
