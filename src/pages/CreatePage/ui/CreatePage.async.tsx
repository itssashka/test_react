import { lazy } from 'react';

export const CreatePageAsync = lazy(() => new Promise((resolve) => {
    // @ts-expect-error: имитация загрузки
    setTimeout(() => resolve(import('./CreatePage.tsx')), 1500);
}));
