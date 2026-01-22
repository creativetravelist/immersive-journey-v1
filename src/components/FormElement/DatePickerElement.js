import { DatePicker } from '@mui/lab';
import { TextField } from '@mui/material';
import { Controller } from 'react-hook-form';

export default function DatePickerElement({
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
    if (required) {
        validation.required = 'This field is required';
    }

    return (
        <Controller
            name={name}
            rules={validation}
            control={control}
            render={({ field: { onChange, value }, fieldState: { error, invalid } }) => (
                <DatePicker
                    {...rest}
                    value={value || ''}
                    onChange={(date, selectionState) => {
                        let parsedDate = '';
                        if (selectionState) {
                            if (typeof parseDate === 'function') {
                                parsedDate = parseDate(selectionState);
                            }
                        } else {
                            parsedDate = date?.toISOString().substr(0, 10);
                            if (typeof parseDate === 'function') {
                                parsedDate = parseDate(date);
                            }
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
                            error={invalid}
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
            )}
        />
    );
}
