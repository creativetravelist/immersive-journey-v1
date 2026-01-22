import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

// material-ui
import { Box, Card, Divider, Grid, Typography } from '@mui/material';
import MuiBreadcrumbs from '@mui/material/Breadcrumbs';
import { useTheme } from '@mui/material/styles';

// project imports
import configs from 'configs/envConfig';

// assets
import AccountTreeTwoToneIcon from '@mui/icons-material/AccountTreeTwoTone';
import HomeIcon from '@mui/icons-material/Home';
import HomeTwoToneIcon from '@mui/icons-material/HomeTwoTone';
import { IconTallymark1 } from '@tabler/icons';
import { BreadcrubmsSx, CardContentSx, DividerSx, GridStyleProps, IconSx, ItemContentSx, LinkSx } from './styled';

// ==============================|| BREADCRUMBS ||============================== //

const Title = ({ title }) => {
    return (
        <Grid item>
            <Typography variant="h3" fontWeight={500}>
                {title}
            </Typography>
        </Grid>
    );
};
const ItemContent = ({ icon: Icon, title }) => {
    return (
        <Typography variant="subtitle1" sx={ItemContentSx()}>
            {Icon && <Icon style={IconSx({ theme })} />}
            {title}
        </Typography>
    );
};

const MainContent = ({ icon: Icon, title }) => {
    const theme = useTheme();
    return (
        <Typography component={Link} to="#" variant="subtitle1" sx={LinkSx}>
            {Icon && <Icon style={IconSx({ theme })} />}
            {title}
        </Typography>
    );
};
const Breadcrumbs = ({
    card,
    divider,
    icon,
    icons,
    maxItems,
    navigation,
    rightAlign,
    separator: SeparatorIcon,
    title,
    titleBottom,
    ...others
}) => {
    const theme = useTheme();

    const [main, setMain] = useState();
    const [item, setItem] = useState();

    // set active item state
    const getCollapse = (menu) => {
        if (menu.children) {
            menu.children.filter((collapse) => {
                if (collapse.type && collapse.type === 'collapse') {
                    getCollapse(collapse);
                } else if (collapse.type && collapse.type === 'item') {
                    if (document.location.pathname === configs.BASE_NAME + collapse.url) {
                        setMain(menu);
                        setItem(collapse);
                    }
                }
                return false;
            });
        }
    };

    useEffect(() => {
        navigation?.items?.map((menu) => {
            if (menu.type && menu.type === 'group') {
                getCollapse(menu);
            }
            return false;
        });
    });

    if (!item || item.type !== 'item' || !item.breadcrumbs) return <Typography />;

    const separatorIcon = separator ? <SeparatorIcon stroke={1.5} size="1rem" /> : <IconTallymark1 stroke={1.5} size="1rem" />;

    const showTitleOnTop = title && !titleBottom;
    const showTitleOnBottom = title && titleBottom;
    const showDivider = card === false && divider !== false;
    return (
        <Card sx={CardContentSx({ card, theme })} {...others}>
            <Box p={2} pl={card === false ? 0 : 2}>
                <Grid container {...GridStyleProps({ rightAlign })}>
                    {showTitleOnTop && <Title title={item.title} />}
                    <Grid item>
                        <MuiBreadcrumbs sx={BreadcrubmsSx()} aria-label="breadcrumb" maxItems={maxItems || 8} separator={separatorIcon}>
                            <Typography component={Link} to="/" color="inherit" variant="subtitle1" sx={LinkSx}>
                                {icons && <HomeTwoToneIcon sx={IconSx({ theme })} />}
                                {icon && <HomeIcon sx={IconSx({ theme })} mr={0} />}
                                {!icon && 'Dashboard'}
                            </Typography>
                            <MainContent icon={icons && (main.icon || AccountTreeTwoToneIcon)} title={main.title} />
                            <ItemContent icon={icons && (item.icon || AccountTreeTwoToneIcon)} title={item.title} />
                        </MuiBreadcrumbs>
                    </Grid>
                    {showTitleOnBottom && <Title title={item.title} />}
                </Grid>
            </Box>
            {showDivider && <Divider sx={DividerSx({ theme, gridSpacing })} />}
        </Card>
    );
};

Breadcrumbs.propTypes = {
    card: PropTypes.bool,
    divider: PropTypes.bool,
    icon: PropTypes.bool,
    icons: PropTypes.bool,
    maxItems: PropTypes.number,
    navigation: PropTypes.object,
    rightAlign: PropTypes.bool,
    separator: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
    title: PropTypes.bool,
    titleBottom: PropTypes.bool
};

export default Breadcrumbs;
