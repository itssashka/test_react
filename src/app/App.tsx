import AppRouter from './router/ui/AppRouter.tsx';
import { Flex } from 'antd';
import './styles/app.scss';

function App() {
    
    return (
        <Flex className={'App'} align={'center'} vertical>
            <AppRouter />
        </Flex>
    );
}

export default App;
