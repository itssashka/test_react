import { User } from '../components/Users/types/types.ts';
import { useMemo } from 'react';

export const useSearchUsers = (users: User[], query: string) => {
    const sortedUsers = useMemo(() => {
        return users.filter(user => (
            user.username.toLowerCase().includes(query.toLowerCase())
        ));
    }, [query]);
    return sortedUsers;
};
