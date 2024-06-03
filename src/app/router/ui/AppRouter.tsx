import { Suspense, useCallback } from 'react';
import { Route, RouteProps, Routes } from 'react-router-dom';
import { Spin } from 'antd';
import { routeConfig } from '../config/routerConfig.tsx';

const AppRouter = () => {
    const render = useCallback((route: RouteProps) => {
        const element = (
            <Suspense fallback={<Spin size={'large'} />}>
                {route.element}
            </Suspense>
        );
        return (
            <Route
                key={route.path}
                path={route.path}
                element={element}
            />
        );
    }, []);

    return (
        <Routes>
            {Object.values(routeConfig).map(render)}
        </Routes>
    );
};

export default AppRouter;
