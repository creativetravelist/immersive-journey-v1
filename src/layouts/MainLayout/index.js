// import PropTypes from 'prop-types';
import { Outlet } from 'react-router-dom';

// material-ui
import { Box } from '@mui/material';
import { useTheme } from '@mui/material/styles';

// project imports

// assets
import themeConfig from 'configs/themeConfig';

import { Main } from './styles';
// ==============================|| MAIN LAYOUT ||============================== //

const MainLayout = () => {
    const theme = useTheme();
    const {
        appbar: { headerHeight }
    } = themeConfig || {};

    return (
        <Box sx={{ display: 'flex' }}>
            {/* main content */}
            <Main theme={theme} mt={headerHeight}>
                <Outlet />
            </Main>
            {/* <Customization /> */}
        </Box>
    );
};

MainLayout.propTypes = {};

export default MainLayout;
