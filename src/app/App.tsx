import AppRouter from './router/ui/AppRouter.tsx';
import { Layout } from 'antd';
import './styles/app.scss';
import { Content, Footer, Header } from 'antd/es/layout/layout';

function App() {
    return (
        <Layout className={'App'}>
            <Header />
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
