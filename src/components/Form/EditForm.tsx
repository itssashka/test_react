import React, { memo, useCallback, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { User, UserRoles } from '../Users/types/types.ts';
import { Button, Flex, Form, Input, SelectProps, Skeleton } from 'antd';
import { AppInput } from '../AppInput/AppInput.tsx';
import { AppSelector } from '../AppSelector/AppSelector.tsx';

interface EditFormProps {
    user?: User;
    isLoading?: boolean;
    error?: boolean;
    onSubmit: (user: User) => void;
}

interface EditFormUser extends Omit<User, 'workBorders'> {
    workBorders: string[];
}

const passwordPattern = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{8,16}$/gi;
const namePattern = /^[A-Za-z]+$/i;
const ROLES_OPTIONS: SelectProps['options']  = Object.values(UserRoles).map(value => (
    {
        label: value,
        value: UserRoles[value] ?? '',
    }
));

const EditForm = memo((props: EditFormProps) => {
    const {
        user,
        isLoading,
        error,
        onSubmit,
    } = props;
    const {
        handleSubmit,
        control,
        reset,
        formState: { errors },
        setValue,
    } = useForm<EditFormUser>({
        defaultValues: user ? {
            ...user,
            roles: user.roles || [],
            workBorders: user.workBorders?.map(wb => wb.name) || [],
        } : undefined,
    });
    
    useEffect(() => {
        reset(user ? {
            ...user,
            roles: user.roles || [],
            workBorders: user.workBorders?.map((wb) => wb.name) || [],
        } : {});
    }, [reset]);
    
    useEffect(() => {
        if (user) {
            setValue('roles', user.roles || []);
            setValue('workBorders', user.workBorders?.map(wb => wb.name) || []);
        }
    }, [user, setValue]);
    
    const onSubmitHandler = useCallback(
        (data: EditFormUser) => {
            const formattedUser: User = {
                ...data,
                workBorders: data.workBorders?.map((name, index) => ({ name: name, id: `${index}` })) || [],
            };
            onSubmit(formattedUser);
        },
        [onSubmit],
    );

    if (isLoading) {
        return (
            <Flex vertical gap={10}>
                {Array(6).fill(0).map((_, index) => (
                    <Skeleton.Input key={index} />
                ))}
            </Flex>
        );
    }
    
    return (
        <Form
            onFinish={handleSubmit(onSubmitHandler)}
            style={{ maxWidth: '350px' }}
        >
            <AppInput
                label={'Firstname'}
                control={control}
                name={'firstName'}
                errors={errors}
                defaultValue={user?.firstName}
                pattern={namePattern}
            />
            <AppInput
                label={'Lastname'}
                control={control}
                name={'lastName'}
                errors={errors}
                defaultValue={user?.lastName}
                pattern={namePattern}
            />
            <AppInput
                label={'Username'}
                control={control}
                name={'username'}
                errors={errors}
                defaultValue={user?.username}
            />
            <AppInput
                label={'Password'}
                control={control}
                name={'password'}
                errors={errors}
                defaultValue={user?.password}
                pattern={passwordPattern}
            />
            <AppSelector
                control={control}
                name={'roles'}
                errors={errors}
                options={ROLES_OPTIONS}
                label={'Roles'}
                defaultOptions={user?.roles}
            />
            <AppSelector
                control={control}
                name={'workBorders'}
                errors={errors}
                mode={'tags'}
                label={'workBorders'}
                defaultOptions={user?.workBorders?.map(item => item.name)}
            />
            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                <Button type="primary" htmlType="submit">
                    Submit
                </Button>
            </Form.Item>
        </Form>
    );
});

export { EditForm };
