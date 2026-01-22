// material-ui
import { Box, Toolbar, Typography } from '@mui/material';

// project imports
import { BackButton, MenuButton } from 'components/IconButtons';
import themeConfig from 'configs/themeConfig';
import { useMenu } from 'providers/Menu';
import LogoSection from '../LogoSection';
import { LogoSx, WrapperSx } from './styled';

// assets

// ==============================|| MAIN NAVBAR / HEADER ||============================== //

const Header = ({ title = '' }) => {
    const { toggle } = useMenu();
    const {
        appbar: { enableMenu, menuPosition, enableBack, backPosition }
    } = themeConfig;

    const handleDrawerMenuClick = () => {
        toggle();
    };

    const onBackClick = () => {};

    return (
        <Toolbar sx={WrapperSx()}>
            <Box>
                {/* logo & toggler button */}
                <Box sx={{ width: '8.33%' }}>
                    {backPosition === 'left' ? <BackButton enableBack={enableBack} onBackClick={onBackClick} /> : null}
                    {menuPosition === 'left' ? <MenuButton enableMenu={enableMenu} handleDrawerMenuClick={handleDrawerMenuClick} /> : null}
                </Box>

                <Box sx={LogoSx()}>
                    <LogoSection />
                    {title ? (
                        <Typography variant="h3" noWrap>
                            {title}
                        </Typography>
                    ) : null}
                </Box>
                <Box sx={{ width: '8.33%', textAlign: 'right' }}>
                    {backPosition === 'right' ? <BackButton enableBack={enableBack} onBackClick={onBackClick} /> : null}
                    {menuPosition === 'right' ? <MenuButton enableMenu={enableMenu} handleDrawerMenuClick={handleDrawerMenuClick} /> : null}
                </Box>
            </Box>
        </Toolbar>
    );
};

Header.propTypes = {};

export default Header;
