import { memo } from 'react';
import { User } from '../types/types.ts';
import { Flex, List } from 'antd';
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
            <List
                grid={{
                    gutter: 16,
                    xs: 1,
                    sm: 2,
                    md: 3,
                    lg: 3,
                    xl: 4,
                    xxl: 4,
                }}
                dataSource={users}
                renderItem={(item) => (
                    <List.Item>
                        <UserCard user={item} />
                    </List.Item>
                )}
            />
        </Flex>
    
    );
});

export { UsersList };
