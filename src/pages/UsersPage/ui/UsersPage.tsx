import { UsersList } from '../../../components/Users/UsersList/UsersList.tsx';
import { User, UserRoles } from '../../../components/Users/types/types.ts';
import { Flex } from 'antd';
import Title from 'antd/es/typography/Title';

const users: User[] = [
    {
        id: '1',
        firstName: 'asd',
        username: 'asd',
        lastName: 'asd',
        password: '123',
        roles: [UserRoles.ANT],
        workBorders: [
            {
                id: '1',
                name: 'asd',
            },
        ],
    },
    {
        id: '2',
        firstName: 'asd',
        username: 'asd',
        lastName: 'asd',
        password: '123',
        roles: [UserRoles.ANT],
        workBorders: [
            {
                id: '1',
                name: 'asd',
            },
        ],
    },
    {
        id: '3',
        firstName: 'asd',
        username: 'asd',
        lastName: 'asd',
        password: '123',
        roles: [UserRoles.ANT],
        workBorders: [
            {
                id: '1',
                name: 'asd',
            },
        ],
    },
    {
        id: '4',
        firstName: 'asd',
        username: 'asd',
        lastName: 'asd',
        password: '123',
        roles: [UserRoles.ANT],
        workBorders: [
            {
                id: '1',
                name: 'asd',
            },
        ],
    },
];

const UsersPage = () => {
    return (
        <Flex align={'center'} justify={'start'} vertical >
            <Title>Список пользователей</Title>
            <UsersList users={users} />
        </Flex>
    );
};

export default UsersPage;
