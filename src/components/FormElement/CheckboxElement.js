import { Controller } from 'react-hook-form';
import { Checkbox, FormControl, FormControlLabel, FormGroup, FormHelperText } from '@mui/material';

export default function CheckboxElement({ name, validation = {}, required, parseError, label, control, ...rest }) {
    if (required) {
        validation.required = 'This field is required';
    }

    return (
        <Controller
            name={name}
            rules={validation}
            control={control}
            render={({ field: { value, onChange }, fieldState: { invalid, error } }) => {
                const helperText = error ? (typeof parseError === 'function' ? parseError(error) : error.message) : rest.helperText;
                return (
                    <FormControl required={required} error={invalid}>
                        <FormGroup row>
                            <FormControlLabel
                                label={label || ''}
                                control={
                                    <Checkbox
                                        color={'primary'}
                                        sx={{
                                            color: invalid ? 'error.main' : undefined
                                        }}
                                        value={value}
                                        checked={!!value}
                                        onChange={() => {
                                            onChange(!value);
                                            //setValue(name, !formValue, { shouldValidate: true })
                                        }}
                                    />
                                }
                            />
                        </FormGroup>
                        {helperText ? <FormHelperText error={invalid}>{helperText}</FormHelperText> : null}
                    </FormControl>
                );
            }}
        />
    );
}
