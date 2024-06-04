import ReactDOM from 'react-dom/client';
import App from './app/App.tsx';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store/store';
import { ConfigProvider } from 'antd';
import { FormProvider } from 'react-hook-form';

ReactDOM.createRoot(document.getElementById('root')!).render(
    <BrowserRouter>
        <Provider store={store}>
            <ConfigProvider>
                <App />
            </ConfigProvider>
        </Provider>
    </BrowserRouter>,
);
