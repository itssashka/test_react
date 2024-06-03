import { memo } from 'react';
import { User } from '../types/types.ts';
import { Flex } from 'antd';
import { UserCard } from '../UserCard/UserCard.tsx';

interface UsersListProps {
    users: User[];
    isLoading?: boolean;
    error?: string;
}

const UsersList = memo((props: UsersListProps) => {
    const {
        users,
        isLoading,
        error,
    } = props;
    return (
        <Flex gap={'middle'} align={'center'} justify={'start'}>
            {users.map(user => (
                <UserCard user={user} />
            ))}
        </Flex>
    );
});

export { UsersList };
