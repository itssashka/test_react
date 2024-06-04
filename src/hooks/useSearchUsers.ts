import { User } from '../components/Users/types/types.ts';
import { useMemo } from 'react';

export const useSearchUsers = (users: User[], query: string) => {
    const sortedUsers = useMemo(() => {
        console.log('users', users);
        return users.filter(user => (
            user?.username?.toLowerCase().includes(query.toLowerCase())
        ));
    }, [query, users]);
    console.log(sortedUsers);
    return sortedUsers;
};
