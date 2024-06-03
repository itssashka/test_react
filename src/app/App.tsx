import AppRouter from './router/ui/AppRouter.tsx';
import { Layout } from 'antd';
import './styles/app.scss';
import { Content, Footer, Header } from 'antd/es/layout/layout';

function App() {
    return (
        <Layout className={'App'}>
            <Header />
            <AppRouter />
            <Footer />
        </Layout>
    );
}

export default App;
