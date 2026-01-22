import { MenuItem, TextField } from '@mui/material';
import { useToast } from 'hooks/useToast';
import { createElement, useEffect, useState } from 'react';
import { Controller, useWatch } from 'react-hook-form';

export default function SelectElement({
    name,
    required,
    valueKey = 'id',
    labelKey = 'title',
    options = [],
    parseError,
    type,
    objectOnChange,
    validation = {},
    control,
    defaultValue = '',
    ...rest
}) {
    const [isFirst, setIsFirst] = useState(true);
    const selectedField = useWatch({ name: 'field' });
    const { info } = useToast();
    const isNativeSelect = !!rest.SelectProps?.native;
    const ChildComponent = isNativeSelect ? 'option' : MenuItem;
    if (required && !validation.required) {
        validation.required = '此為必填';
    }

    useEffect(() => {
        if (isFirst) return setIsFirst(false);
        info('預約櫃點已更動，請重新確認選擇日期');
    }, [selectedField]);

    return (
        <Controller
            name={name}
            rules={validation}
            control={control}
            defaultValue={defaultValue}
            render={({ field: { onBlur, onChange, value }, fieldState: { invalid, error } }) => {
                // handle shrink on number input fields
                if (type === 'number' && typeof value !== 'undefined') {
                    rest.InputLabelProps = rest.InputLabelProps || {};
                    rest.InputLabelProps.shrink = true;
                }
                if (value && typeof value === 'object') {
                    value = value[valueKey]; // if value is object get key
                }
                return (
                    <TextField
                        {...rest}
                        id={name}
                        name={name}
                        value={value ?? ''}
                        onBlur={onBlur}
                        onChange={(event) => {
                            let item = event.target.value;
                            if (type === 'number') {
                                item = Number(item);
                            }
                            onChange(item);
                            if (typeof rest.onChange === 'function') {
                                if (objectOnChange) {
                                    item = options.find((i) => i[valueKey] === item);
                                }
                                rest.onChange(item);
                            }
                        }}
                        select
                        required={required}
                        error={invalid}
                        placeholder="請輸入..."
                        helperText={
                            error ? (
                                typeof parseError === 'function' ? (
                                    parseError(error)
                                ) : (
                                    error.message
                                )
                            ) : (
                                <div className={'custom-helper-text'}>{rest.helperText}</div>
                            )
                        }
                    >
                        {isNativeSelect && <option />}
                        {options.map((item) =>
                            createElement(
                                ChildComponent,
                                {
                                    key: `${name}_${item[valueKey]}`,
                                    value: item[valueKey],
                                    disabled: item.disabled
                                },
                                item[labelKey]
                            )
                        )}
                    </TextField>
                );
            }}
        />
    );
}
