import { Checkbox, FormControl, FormControlLabel, FormGroup, FormHelperText, FormLabel } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { useController } from 'react-hook-form';

import { RequiredDot } from 'components/FormElement/style';
export default function CheckboxButtonGroup({
    helperText,
    options,
    label,
    name,
    parseError,
    required,
    labelKey = 'label',
    valueKey = 'id',
    returnObject,
    disabled,
    row,
    control,
    checkboxColor,
    ...rest
}) {
    const theme = useTheme();
    const {
        field: { value = [], onChange },
        fieldState: { invalid, error }
    } = useController({
        name,
        rules: required ? { required: '此為必填' } : undefined,
        control
    });

    helperText = error ? (typeof parseError === 'function' ? parseError(error) : error.message) : helperText;

    const handleChange = (index) => {
        const newArray = [...value];
        const exists = value.findIndex((i) => (returnObject ? i[valueKey] === index : i === index)) === -1;
        if (exists) {
            newArray.push(returnObject ? options.find((i) => i[valueKey] === index) : index);
        } else {
            newArray.splice(
                value.findIndex((i) => (returnObject ? i[valueKey] === index : i === index)),
                1
            );
        }
        // setValue(name, newArray, { shouldValidate: true })
        onChange(newArray);
        if (typeof rest.onChange === 'function') {
            rest.onChange(newArray);
        }
    };

    return (
        <FormControl error={invalid} required={required}>
            {label && <FormLabel error={invalid}>{label}</FormLabel>}
            <FormGroup row={row}>
                {options.map((option) => {
                    const optionKey = option[valueKey];
                    if (!optionKey) {
                        console.error(`CheckboxButtonGroup: valueKey ${valueKey} does not exist on option`, option);
                    }
                    const isChecked = value.findIndex((item) => (returnObject ? item[valueKey] === optionKey : item === optionKey)) !== -1;
                    return (
                        <FormControlLabel
                            control={
                                <Checkbox
                                    sx={{
                                        color: invalid ? theme.palette.error.main : undefined,
                                        ...rest.sx
                                    }}
                                    color={checkboxColor || 'primary'}
                                    value={optionKey}
                                    checked={isChecked}
                                    disabled={disabled}
                                    icon={rest.icon}
                                    onChange={() => handleChange(optionKey)}
                                />
                            }
                            label={
                                <div>
                                    {option[labelKey]}
                                    {required ? <RequiredDot>*</RequiredDot> : null}
                                </div>
                            }
                            key={optionKey}
                        />
                    );
                })}
            </FormGroup>
            {helperText ? <FormHelperText>{helperText}</FormHelperText> : null}
        </FormControl>
    );
}
