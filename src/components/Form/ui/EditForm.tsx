import React, { memo, useCallback } from 'react';
import { useForm } from 'react-hook-form';
import { User } from '../../Users/types/types.ts';
import cls from './EditForm.module.scss';
import { Button, Form, Input } from 'antd';

const passwordPattern = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{8,16}$/gi;
const namePattern = /^[A-Za-z]+$/i;

const EditForm = memo(() => {
    const {
        register,
        handleSubmit,
    } = useForm<Partial<User>>();
    
    const onSubmit = useCallback(() => {
        console.log('submit');
    }, []);
    
    const onFinishFailed = useCallback(() => {
        console.log('Failed!!!');
    }, []);
    
    return (
        <Form
            name="basic"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            style={{ maxWidth: 600 }}
            initialValues={{ remember: true }}
            onFinish={handleSubmit(onSubmit)}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
        >
            <Form.Item
                label="Username"
                rules={[{ required: true, message: 'Please input your firstName!' }]}
                {...register('firstName', { pattern: namePattern, maxLength: 20 })}
            >
                <Input />
            </Form.Item>
            <Form.Item
                label="Lastname"
                rules={[{ required: true, message: 'Please input your Lastname!' }]}
                {...register('lastName', { pattern: namePattern, maxLength: 20 })}
            >
                <Input />
            </Form.Item>
            <Form.Item
                label="Username"
                rules={[{ required: true, message: 'Please input your username!' }]}
                {...register('username', { maxLength: 20, minLength: 6 })}
            >
                <Input />
            </Form.Item>
            <Form.Item
                label="Password"
                rules={[{ required: true, message: 'Please input your password!' }]}
                {...register('password', { pattern: passwordPattern })}
            >
                <Input />
            </Form.Item>
            <Form.Item
                label="Roles"
                rules={[{ required: true, message: 'Please input your Roles!' }]}
                {...register('roles')}
            >
                <Input />
            </Form.Item>
            <Form.Item
                label="workBorders"
                rules={[{ required: true, message: 'Please input your workBorders!' }]}
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
