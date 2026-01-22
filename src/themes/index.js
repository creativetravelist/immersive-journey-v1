import { zhTW } from '@mui/material/locale';
import { createTheme } from '@mui/material/styles';
import { get } from 'lodash';

// assets
import lightColors from 'assets/scss/_themes-vars-dark-mode.module.scss';
import darkColors from 'assets/scss/_themes-vars-light-mode.module.scss';

// project imports
import { DEFAULT_THEMES } from 'configs/constant';
import componentStyleOverrides from './compStyleOverride';
import themePalette from './palette';
import themeTypography from './typography';

/**
 * Represent theme style and structure as per Material-UI
 * @param {JsonObject} customization customization parameter object
 */

export const theme = (customization, isDarkMode, isRTL, options) => {
    const color = isDarkMode ? darkColors : lightColors;

    const themeOption = {
        colors: color,
        // h1 - h6
        heading: color.grey900,
        // subtitle1 - subtitle2
        subtitle: color.grey500,
        // body1 - sbody2, caption
        body: color.grey700,
        paper: color.paper,
        backgroundDefault: color.paper,
        background: color.primaryLight,
        darkTextPrimary: color.grey700,
        darkTextSecondary: color.grey500,
        textDark: color.grey900,
        menuSelected: color.secondaryDark,
        menuSelectedBack: color.secondaryLight,
        divider: color.grey200,
        // fontFamily
        customization
    };

    const minHeight = get(options, 'appbar.headerHeight', DEFAULT_THEMES.APP_BAR.headerHeight);
    const themeOptions = {
        direction: isRTL ? 'rtl' : 'ltr',
        mode: isDarkMode ? 'dark' : 'light',
        palette: themePalette(themeOption),
        mixins: {
            toolbar: {
                minHeight,
                padding: '16px',
                '@media (min-width: 600px)': {
                    minHeight
                }
            }
        },
        typography: themeTypography(themeOption),
        components: componentStyleOverrides(themeOption),
        ...options
    };

    const themes = createTheme(themeOptions, zhTW);

    return themes;
};

export default theme;
