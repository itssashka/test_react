import React, { memo, useCallback } from 'react';
import { useForm } from 'react-hook-form';
import { User, UserRoles } from '../../Users/types/types.ts';
import { Button, Form, Input, Select } from 'antd';
import { users } from '../../../store/users/consts/users.ts';

const passwordPattern = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{8,16}$/gi;
const namePattern = /^[A-Za-z]+$/i;

interface EditFormProps {
    user?: User;
    isLoading?: boolean;
    error?: boolean;
    onSubmit: (user: User) => void;
    isNewUser?: boolean;
}

const EditForm = memo((props: EditFormProps) => {
    const {
        user,
        isLoading,
        error,
        onSubmit,
        isNewUser = false,
    } = props;
    const {
        register,
        handleSubmit,
    } = useForm<Partial<User>>();
    
    const onSubmitHandler = useCallback(() => {
        onSubmit(users[0]);
    }, [onSubmit]);
    
    const onFinishFailed = useCallback(() => {
        console.log('Failed!!!');
    }, []);
    
    return (
        <Form
            name="basic"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            style={{ maxWidth: 600 }}
            initialValues={user}
            onFinish={handleSubmit(onSubmitHandler)}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
        >
            <Form.Item
                label="Username"
                rules={[{ required: isNewUser, message: 'Please input your firstName!' }]}
                {...register('firstName', { pattern: namePattern, maxLength: 20 })}
            >
                <Input />
            </Form.Item>
            <Form.Item
                label="Lastname"
                rules={[{ required: isNewUser, message: 'Please input your Lastname!' }]}
                {...register('lastName', { pattern: namePattern, maxLength: 20 })}
            >
                <Input />
            </Form.Item>
            <Form.Item
                label="Username"
                rules={[{ required: isNewUser, message: 'Please input your username!' }]}
                {...register('username', { maxLength: 20, minLength: 6 })}
            >
                <Input />
            </Form.Item>
            <Form.Item
                label="Password"
                rules={[{ required: isNewUser, message: 'Please input your password!' }]}
                {...register('password', { pattern: passwordPattern })}
            >
                <Input />
            </Form.Item>
            <Form.Item
                label="Roles"
                rules={[{ required: isNewUser, message: 'Please input your Roles!' }]}
                {...register('roles')}
            >
                <Select
                    mode="multiple"
                    style={{ width: '100%' }}
                    placeholder="Please select"
                    defaultValue={user?.roles}
                />
            </Form.Item>
            <Form.Item
                label="workBorders"
                rules={[{ required: isNewUser, message: 'Please input your workBorders!' }]}
                {...register('workBorders')}
            >
                <Input />
            </Form.Item>
            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                <Button type="primary" htmlType="submit">
                    Submit
                </Button>
            </Form.Item>
        </Form>
    
    );
});

export { EditForm };
