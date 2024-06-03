import { memo } from 'react';
import { Card, Flex, List } from 'antd';
import Meta from 'antd/es/card/Meta';

const IMG_URL = 'https://t4.ftcdn.net/jpg/02/29/75/83/360_F_229758328_7x8jwCwjtBMmC6rgFzLFhZoEpLobB6L8.jpg';

const UsersListSkeleton = memo(() => (
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
            loading
            dataSource={Array(4).fill(0)}
            renderItem={() => (
                <List.Item>
                    <>
                        <Card
                            loading
                            hoverable
                            style={{ width: 240 }}
                            cover={<img alt={''} src={IMG_URL} />}
                        >
                            <Meta title={''} description={''} />
                        </Card>
                    </>
                </List.Item>
            )}
        />
    </Flex>
));

export { UsersListSkeleton };
