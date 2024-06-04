import React, { memo } from 'react';
import {
    Control,
    Controller, ValidationRule,
} from 'react-hook-form';
import { Form, Input } from 'antd';

type AppInputProps = {
    control: Control<any>;
    name: string;
    label?: string;
    errors: any;
    placeholder?: string;
    defaultValue?: string;
    pattern?: ValidationRule<RegExp>;
};

const AppInput = memo((props: AppInputProps) => {
    const {
        control,
        name,
        label,
        placeholder,
        defaultValue = '',
        pattern,
    } = props;
    return (
        <Controller
            control={control}
            name={name}
            defaultValue={defaultValue}
            rules={{
                pattern: pattern,
                required: true,
            }}
            render={({ field }) => (
                <Form.Item
                    name={name}
                    label={label}
                    initialValue={defaultValue}
                    required
                >
                    <Input
                        placeholder={placeholder}
                        {...field}
                    />
                </Form.Item>
            )}></Controller>
    );
});

export { AppInput };
