import { TextField } from '@mui/material';
import { isString } from 'formik';
import { Controller } from 'react-hook-form';

export default function TextFieldElement({
    validation = {},
    parseError,
    type,
    required,
    name,
    control,
    defaultValue = '',
    inputmode: inputMode,
    error: propError,
    key,
    ...rest
}) {
    if (required && !validation.required) {
        validation.required = {
            value: true,
            message: '此為必填'
        };
    } else if (!required) {
        validation.required = undefined;
    }

    if (type === 'number' && !validation.pattern) {
        validation.pattern = {
            value: /^[0-9]*$/,
            message: '請輸入數字'
        };
    }
    if (['phone', 'mobile'].includes(type)) {
        validation.pattern = {
            value: /^9[0-9]{8}$/,
            message: '格式錯誤'
        };
    }

    if (type === 'email') {
        validation.pattern = {
            value: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            message: '請輸入合法Email'
        };
    }

    if (type === 'phone') {
        validation.pattern = {
            value: /^09[0-9]{8}$/,
            message: '請輸入合法手機號碼'
        };
    }

    return (
        <Controller
            name={name}
            control={control}
            rules={validation}
            defaultValue={defaultValue}
            render={({ field: { value, onChange, onBlur }, fieldState: { invalid, error } }) => {
                const helperText = error ? (typeof parseError === 'function' ? parseError(error) : error.message) : rest.helperText;
                return (
                    <TextField
                        {...rest}
                        inputProps={{ inputMode }}
                        name={name}
                        value={value ?? ''}
                        onChange={onChange}
                        onBlur={onBlur}
                        required={required}
                        type={type}
                        error={propError || invalid}
                        helperText={
                            !isString(helperText) || (isString(helperText) && helperText.trim()) ? (
                                <div className={'custom-helper-text'}>{helperText}</div>
                            ) : (
                                helperText
                            )
                        }
                    />
                );
            }}
        />
    );
}
