import { TextField } from '@mui/material';
import { TimePicker } from '@mui/lab';
import { Controller } from 'react-hook-form';

export default function TimePickerElement({
    isDate,
    parseError,
    name,
    required,
    parseDate,
    validation = {},
    inputProps,
    control,
    ...rest
}) {
    if (required) validation.required = 'This field is required';

    return (
        <Controller
            name={name}
            rules={validation}
            control={control}
            render={({ field: { onChange, value }, fieldState: { error } }) => {
                return (
                    <TimePicker
                        {...rest}
                        value={value || ''}
                        onChange={(date, selectionState) => {
                            let parsedDate = '';
                            if (selectionState && typeof parseDate === 'function') {
                                parsedDate = parseDate(selectionState);
                            } else {
                                parsedDate = date;
                            }
                            onChange(parsedDate);
                            if (typeof rest.onChange === 'function') {
                                rest.onChange(parsedDate);
                            }
                        }}
                        renderInput={(params) => (
                            <TextField
                                {...params}
                                {...inputProps}
                                required={!!required}
                                helperText={
                                    error
                                        ? typeof parseError === 'function'
                                            ? parseError(error)
                                            : error.message
                                        : inputProps?.helperText || rest.helperText
                                }
                            />
                        )}
                    />
                );
            }}
        />
    );
}
