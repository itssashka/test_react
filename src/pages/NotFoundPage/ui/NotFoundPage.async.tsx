import { lazy } from 'react';

export const NotFoundPageAsync = lazy(() => new Promise((resolve) => {
    // @ts-expect-error: имитация загрузки
    setTimeout(() => resolve(import('./NotFoundPage.tsx')), 1500);
}));
