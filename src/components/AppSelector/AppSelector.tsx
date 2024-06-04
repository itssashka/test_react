import { Form, Select } from 'antd';
import React, { memo, PropsWithChildren, useCallback, useMemo } from 'react';
import { Control, Controller, ControllerRenderProps } from 'react-hook-form';

type AppSelectorModes = 'multiple' | 'tags';

type AppSelectorProps = PropsWithChildren<{
    control: Control<any>;
    name: string;
    errors: any;
    options?: any;
    defaultOptions?: any[];
    mode?: AppSelectorModes;
    label?: string;
}>;

const AppSelector = memo((props: AppSelectorProps) => {
    const {
        control,
        name,
        errors,
        options,
        mode = 'multiple',
        defaultOptions,
        label,
    } = props;
    
    const renderSelect = useCallback((field: ControllerRenderProps<any, string>) => {
        if (mode === 'multiple') {
            return (
                <Select
                    mode='multiple'
                    defaultValue={defaultOptions}
                    options={options}
                    {...field}
                />
            );
        } else {
            return (
                <Select
                    mode={'tags'}
                    tokenSeparators={[',']}
                    defaultValue={defaultOptions}
                    placeholder={'Create new tags (press enter or ,)'}
                    {...field}
                />
            );
        }
    }, [mode]);
    
    return (
        <Controller
            name={name}
            control={control}
            rules={{
                maxLength: 5,
                pattern: /^\d+$/,
            }}
            render={({ field }) => (
                <Form.Item label={label}>
                    {renderSelect(field)}
                </Form.Item>
            )}
        />
    );
});

export { AppSelector };
