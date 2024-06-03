import { UsersList } from '../../../components/Users/UsersList/UsersList.tsx';
import { Flex } from 'antd';
import Title from 'antd/es/typography/Title';
import { useAppDispatch, useAppSelector } from '../../../store/hooks.ts';
import { getUsers, getUsersError, getUsersIsLoading } from '../../../store/users/selectors/users.ts';
import { useCallback, useEffect } from 'react';
import { fetchUsers } from '../../../store/users/services/fetchUsers.ts';
import { SearchField } from '../../../components/Search/SearchField.tsx';

const UsersPage = () => {
    const users = useAppSelector(getUsers);
    const isLoading = useAppSelector(getUsersIsLoading);
    const error = useAppSelector(getUsersError);
    
    const dispatch = useAppDispatch();
    
    useEffect(() => {
        dispatch(fetchUsers());
    }, [dispatch]);
    
    return (
        <Flex align={'center'} justify={'start'} vertical >
            <Title>Список пользователей</Title>
            <SearchField onSearch={() => {}} />
            <UsersList users={users} isLoading={isLoading} error={error} />
        </Flex>
    );
};

export default UsersPage;
