import { UsersList } from '../../../components/Users/UsersList/UsersList.tsx';
import { User, UserRoles } from '../../../components/Users/types/types.ts';
import { Flex } from 'antd';

const users: User[] = [
    {
        id: '1',
        firstName: 'asd',
        username: 'asd',
        lastName: 'asd',
        password: '123',
        roles: [UserRoles.USER],
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
        roles: [UserRoles.USER],
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
        roles: [UserRoles.USER],
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
        roles: [UserRoles.USER],
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
        <Flex justify={'center'} >
            <UsersList users={users} />
        </Flex>
    );
};

export default UsersPage;
