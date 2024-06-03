import { memo } from 'react';
import { User } from '../types/types.ts';
import { Card, Flex, List } from 'antd';
import { UserCard } from '../UserCard/UserCard.tsx';
import Title from 'antd/es/typography/Title';
import { UsersListSkeleton } from './UsersListSkeleton.tsx';

interface UsersListProps {
    users: User[];
    isLoading?: boolean;
    error?: boolean;
}

const UsersList = memo((props: UsersListProps) => {
    const {
        users,
        isLoading,
        error,
    } = props;
    
    if (isLoading) {
        return <UsersListSkeleton />;
    }
    
    if (error) {
        return (<Title>Произошла ошибка</Title>)
    }
    
    return (
        <Flex gap={'middle'} align={'center'} justify={'start'}>
            <List
                grid={{
                    gutter: 16,
                    xs: 1,
                    sm: 2,
                    md: 3,
                    lg: 3,
                    xl: 5,
                    xxl: 6,
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
