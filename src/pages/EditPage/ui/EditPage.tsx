import Title from 'antd/es/typography/Title';
import { UsersList } from '../../../components/Users/UsersList/UsersList.tsx';
import { Flex } from 'antd';
import { useParams } from 'react-router-dom';

const EditPage = () => {
    const { id } = useParams();
    return (
        <Flex align={'center'} justify={'start'} vertical >
            <Title>Редактирование пользователя с id {id}</Title>
            
        </Flex>
    );
};

export default EditPage;
