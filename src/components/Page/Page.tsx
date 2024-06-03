import cls from './Page.module.scss';
import { ReactNode } from 'react';

interface PageProps {
    children: ReactNode,
}

const Page = (props: PageProps) => {
    const { children } = props;
    return (
        <div className={cls.Page}>
            {children}
        </div>
    );
};

export default Page;
