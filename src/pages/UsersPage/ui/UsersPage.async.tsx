import { lazy } from 'react';

export const UsersPageAsync = lazy(() => new Promise((resolve) => {
    // @ts-expect-error: имитация загрузки
    setTimeout(() => resolve(import('./UsersPage.tsx')), 1500);
}));
