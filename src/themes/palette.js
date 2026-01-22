import { blue, blueGrey, common, green, grey, red, yellow } from '@mui/material/colors';
/**
 * Color intention that you want to used in your theme
 * @param {JsonObject} theme Theme customization object
 */

function getPalette(theme, prefixs = []) {
    return Object.entries(theme.colors || {}).reduce((arr, [key, value]) => {
        const prefix = prefixs.find((prefix) => key.startsWith(prefix));
        if (prefix) {
            const colorKey = key.toLocaleLowerCase().replace(prefix, '');
            arr[colorKey] = value;
        }
        return arr;
    }, {});
}
export default function themePalette(theme) {
    const cusCommons = getPalette(theme, ['common']);
    const cusPrimary = getPalette(theme, ['primary']);
    const cusSecondary = getPalette(theme, ['secondary']);
    const cusError = getPalette(theme, ['error']);
    const cusInfo = getPalette(theme, ['info']);
    const cusWarning = getPalette(theme, ['warning']);
    const cusSuccess = getPalette(theme, ['success']);
    const cusGrey = getPalette(theme, ['grey']);
    const cusDark = getPalette(theme, ['dark']);
    return {
        mode: theme?.customization?.navType,
        common: {
            ...common,
            ...cusCommons
        },
        primary: {
            ...blue,
            ...cusPrimary
        },
        secondary: {
            ...blue,
            ...cusSecondary
        },
        error: {
            ...red,
            ...cusError
        },
        info: {
            ...blue,
            ...cusInfo
        },
        warning: {
            ...yellow,
            ...cusWarning
        },
        success: {
            ...green,
            ...cusSuccess
        },
        grey: {
            ...grey,
            ...cusGrey
        },
        dark: {
            ...blueGrey,
            ...cusDark
        }
    };
}
