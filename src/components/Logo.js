// material-ui
import { Box } from '@mui/material';
import PropTypes from 'prop-types';

import { LogoIcon } from 'assets/global';
import { FlexCenter } from 'themes/styles';

/**
 * if you want to use image instead of <svg> uncomment following.
 *
 * import logoDark from 'assets/images/logo-dark.svg';
 * import logo from 'assets/images/logo.svg';
 *
 */

// ==============================|| LOGO SVG ||============================== //

const Logo = ({ sx }) => {
    return (
        <Box sx={{ ...FlexCenter, ...sx }}>
            <LogoIcon width={'4em'} />
        </Box>
    );
};

Logo.propTypes = {
    sx: PropTypes.object
};

export default Logo;
