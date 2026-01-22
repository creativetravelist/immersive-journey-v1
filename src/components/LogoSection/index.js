import { Link } from 'react-router-dom';

// material-ui
import { ButtonBase } from '@mui/material';

// project imports
import Logo from 'components/Logo';
import configs from 'configs/envConfig';

// ==============================|| MAIN LOGO ||============================== //

const LogoSection = (props) => (
    <ButtonBase disableRipple component={Link} to={configs.defaultPath}>
        <Logo {...props} />
    </ButtonBase>
);

export default LogoSection;
