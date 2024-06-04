import Title from 'antd/es/typography/Title';
import { Button, Flex } from 'antd';
import { useNavigate } from 'react-router-dom';
import { EditForm } from '../../../components/Form/EditForm.tsx';
import { useAppDispatch, useAppSelector } from '../../../store/hooks.ts';
import { getUser, getUserError, getUserIsLoading } from '../../../store/user/selectors/userSelector.ts';
import { useCallback } from 'react';
import { User } from '../../../components/Users/types/types.ts';
import { RoutePath } from '../../../app/router/config/routerConfig.tsx';

const CreatePage = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    
    const onCreate = useCallback((newUser: User) => {
        console.log('Пользователь создан', newUser);
    }, []);
    
    const backToList = useCallback(() => {
        navigate(RoutePath.users);
    }, [navigate]);
    
    return (
        <Flex align={'center'} justify={'start'} vertical>
            <Title>Создание пользователя</Title>
            <EditForm
                onSubmit={onCreate}
            />
            <Button onClick={backToList}>
                Вернуться назад
            </Button>
        </Flex>
    );
};

export default CreatePage;
