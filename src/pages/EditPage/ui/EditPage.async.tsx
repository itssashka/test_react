import { lazy } from 'react';

export const EditPageAsync = lazy(() => new Promise((resolve) => {
    // @ts-expect-error: имитация загрузки
    setTimeout(() => resolve(import('./EditPage.tsx')), 1500);
}));
