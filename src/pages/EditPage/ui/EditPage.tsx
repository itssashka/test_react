import Title from 'antd/es/typography/Title';
import { Button, Flex } from 'antd';
import { useNavigate, useParams } from 'react-router-dom';
import { EditForm } from '../../../components/Form/EditForm.tsx';
import { useAppDispatch, useAppSelector } from '../../../store/hooks.ts';
import { getUser, getUserError, getUserIsLoading } from '../../../store/user/selectors/userSelector.ts';
import { useCallback, useEffect } from 'react';
import { fetchUser } from '../../../store/user/services/fetchUser.ts';
import { User } from '../../../components/Users/types/types.ts';
import { editUser } from '../../../store/user/services/editUser.ts';
import { RoutePath } from '../../../app/router/config/routerConfig.tsx';

const EditPage = () => {
    const { id } = useParams();
    const user = useAppSelector(getUser);
    const isLoading = useAppSelector(getUserIsLoading);
    const error = useAppSelector(getUserError);
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    
    useEffect(() => {
        dispatch(fetchUser(id!));
    }, [dispatch, id]);
    
    const onEdit = useCallback((newUser: User) => {
        dispatch(editUser(newUser));
    }, [dispatch, id]);
    
    const backToList = useCallback(() => {
        navigate(RoutePath.users);
    }, [navigate]);

    return (
        <Flex align={'center'} justify={'start'} vertical>
            <Title>Редактирование пользователя</Title>
            <EditForm
                user={user}
                isLoading={isLoading}
                error={error}
                onSubmit={onEdit}
            />
            {error && <Title>Произошла ошибка</Title>}
            <Button onClick={backToList}>
                Вернуться назад
            </Button>
        </Flex>
    );
};

export default EditPage;
