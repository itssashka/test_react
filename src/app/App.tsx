import AppRouter from './router/ui/AppRouter.tsx';
import { Layout } from 'antd';
import './styles/app.scss';
import { Content, Footer, Header } from 'antd/es/layout/layout';
import { FormProvider, useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { RoutePath } from './router/config/routerConfig.tsx';

function App() {
    return (
        <Layout className={'App'}>
            <Header>
                <Link to={RoutePath.create}>
                    Создать пользователя
                </Link>
            </Header>
            <Layout style={{ padding: '0 24px 24px' }}>
                <Content
                    style={{
                        padding: 24,
                        margin: 'auto',
                        minHeight: 280,
                    }}
                >
                    <AppRouter />
                </Content>
            </Layout>
            <Footer />
        </Layout>
    );
}

export default App;
