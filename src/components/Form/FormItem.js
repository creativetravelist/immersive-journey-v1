import { Typography } from '@mui/material';
import get from 'lodash.get';
import PropTypes from 'prop-types';

import {
    CheckboxElement,
    DatePickerElement,
    DateTimePickerElement,
    RadioButtonGroup,
    SelectElement,
    TextFieldElement,
    TimePickerElement
} from 'components/FormElement';
import { FORM_TYPES } from 'configs/enums';
import { isString } from 'lodash';
import { RequiredDot, TextFieldStyle } from '../Styled';

function mergeExtends(key = '', uiProps = {}) {
    const extend = get(uiProps.extends, key, {});
    return [...Object.entries(extend), ...Object.entries(uiProps)].reduce((acc, [k, v]) => {
        if (typeof v === 'object' && typeof acc[k] === 'object') acc[k] = { ...acc[k], ...v };
        else acc[k] = v;
        return acc;
    }, {});
}

export function parseItemProps(type, base = {}, uiProps = {}) {
    const others = mergeExtends(base.name, uiProps);

    switch (type) {
        case FORM_TYPES.INPUT:
        case FORM_TYPES.CHECKBOX:
        case FORM_TYPES.DATE_PICKER:
        case FORM_TYPES.DATE_TIME_PICKER:
        case FORM_TYPES.TIME_PICKER:
        default:
            return { ...base, ...others };
        case FORM_TYPES.OPTIONS:
        case FORM_TYPES.RADIO:
            return {
                ...base,
                labelKey: 'label',
                valueKey: 'value',
                options: base.options,
                sx: { width: '100%' },
                ...others
            };
    }
}

export function Item(type, itemProps = {}) {
    switch (type) {
        case FORM_TYPES.INPUT:
        default:
            return <TextFieldElement {...itemProps} sx={TextFieldStyle} />;
        case FORM_TYPES.OPTIONS:
            return <SelectElement {...itemProps} sx={TextFieldStyle} />;
        case FORM_TYPES.DATE_PICKER:
            return <DatePickerElement inputFormat="YYYY/MM/DD" {...itemProps} />;
        case FORM_TYPES.DATE_TIME_PICKER:
            return <DateTimePickerElement {...itemProps} inputFormat="YYYY/MM/DD HH:mm" />;
        case FORM_TYPES.TIME_PICKER:
            return <TimePickerElement inputFormat="HH:mm" {...itemProps} />;
        case FORM_TYPES.CHECKBOX:
            return <CheckboxElement {...itemProps} />;
        case FORM_TYPES.RADIO:
            return <RadioButtonGroup {...itemProps} />;
    }
}

function Label({ required = false, label = '' }) {
    return (
        <Typography variant="body1" sx={{ color: 'white' }}>
            {label}
            {required && <RequiredDot>*</RequiredDot>}
        </Typography>
    );
}

export default function FormItem({
    label = '',
    options,
    name,
    required = false,
    placeholder = '請輸入...',
    helperText = '',
    onChange,
    type,
    ...props
}) {
    const title = label && isString(label) ? <Label required={annotation.required} label={annotation.label} /> : label;
    const itemProps = parseItemProps(type, { label, options, name, required, placeholder, helperText, onChange }, props);
    const el = Item(type, itemProps);
    return `${title}${el}`;
}

FormItem.propTypes = {
    label: PropTypes.string,
    options: PropTypes.array, // [{label, value}]
    name: PropTypes.string.isRequired,
    required: PropTypes.bool,
    placeholder: PropTypes.string,
    helperText: PropTypes.string,
    onChange: PropTypes.func,
    type: PropTypes.oneOf(Object.keys(FORM_TYPES)).isRequired
};
