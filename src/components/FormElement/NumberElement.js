import { TextField } from '@mui/material';
import { Controller } from 'react-hook-form';

export default function NumberElement({ validation = {}, parseError, required, name, control, min, max, defaultValue, ...rest }) {
    if (!validation.pattern) validation.pattern = { value: /^[0-9]*$/, message: '請輸入數字' };

    const inputProps = {
        inputMode: 'numeric',
        pattern: '^[0-9]*',
        min,
        max
    };

    return (
        <Controller
            name={name}
            control={control}
            rules={validation}
            defaultValue={defaultValue}
            render={({ field: { value, onChange, onBlur }, fieldState: { invalid, error } }) => {
                return (
                    <TextField
                        {...rest}
                        name={name}
                        value={value ?? ''}
                        onChange={onChange}
                        onBlur={onBlur}
                        required={required}
                        type={'number'}
                        inputProps={inputProps}
                        error={invalid}
                        helperText={error ? (typeof parseError === 'function' ? parseError(error) : error.message) : rest.helperText}
                    />
                );
            }}
        />
    );
}
