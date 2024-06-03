import React, { ReactNode } from 'react';
import { Flex, FlexProps } from 'antd';
import { AnyObject } from 'antd/es/_util/type';
import cls from './Page.module.scss';

interface PageProps extends
    React.ForwardRefExoticComponent<FlexProps<AnyObject> & React.RefAttributes<HTMLElement>>
{
    children: ReactNode;
}

const Page = (props: PageProps) => {
    const { children, ...otherProps } = props;
    return (
        <Flex
            className={cls.Page}
            {...otherProps}
        >
            {children}
        </Flex>
    );
};

export default Page;
