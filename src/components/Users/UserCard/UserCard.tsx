import { Card } from 'antd';
import Meta from 'antd/es/card/Meta';
import { User } from '../types/types.ts';

const IMG_URL = 'https://t4.ftcdn.net/jpg/02/29/75/83/360_F_229758328_7x8jwCwjtBMmC6rgFzLFhZoEpLobB6L8.jpg';

interface UserCardProps {
    user: User;
}

const UserCard = (props: UserCardProps) => {
    const { user } = props;
    const userFullName = `${user.firstName} ${user.lastName}`;
    return (
        <Card
            hoverable
            style={{ width: 240 }}
            cover={<img alt={user.username} src={IMG_URL} />}
        >
            <Meta title={user.username} description={userFullName} />
        </Card>
    );
};

export { UserCard };
