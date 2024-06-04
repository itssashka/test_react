import { Navigate, RouteProps } from 'react-router-dom';
import { NotFoundPage } from '../../../pages/NotFoundPage';
import { UsersPage } from '../../../pages/UsersPage';
import { EditPage } from '../../../pages/EditPage';
import { CreatePage } from '../../../pages/CreatePage';

export enum AppRoutes {
    MAIN = 'main',
    USERS = 'users',
    EDIT = 'edit',
    CREATE = 'create',
    NOT_FOUND = 'not_found',
}

export const RoutePath: Record<AppRoutes, string> = {
    [AppRoutes.USERS]: '/users',
    [AppRoutes.MAIN]: '/',
    [AppRoutes.EDIT]: '/edit/', // + :id
    [AppRoutes.CREATE]: '/create',
    [AppRoutes.NOT_FOUND]: '*',
};

export const routeConfig: Record<AppRoutes, RouteProps> = {
    [AppRoutes.MAIN]: {
        path: RoutePath.main,
        element: <Navigate to={RoutePath.users} replace />,
    },
    [AppRoutes.USERS]: {
        path: RoutePath.users,
        element: <UsersPage />,
    },
    [AppRoutes.EDIT]: {
        path: RoutePath.edit + ':id',
        element: <EditPage />,
    },
    [AppRoutes.CREATE]: {
        path: RoutePath.create,
        element: <CreatePage />,
    },
    [AppRoutes.NOT_FOUND]: {
        path: RoutePath.not_found,
        element: <NotFoundPage />,
    },
};
