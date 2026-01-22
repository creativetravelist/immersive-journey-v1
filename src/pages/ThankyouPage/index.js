import { useNavigate } from 'react-router';
// material-ui
import { Box } from '@mui/material';
import { ReactComponent as BackSvg } from 'assets/icon/back-arrow.svg';
import CONFIG from 'configs/journey';
import CustomImage from 'customComponents/CustomImage';
import { goOa } from 'utils/methods';
import style from './styles';

const { IMAGES } = CONFIG;

const ThankyouPage = () => {
    const navigate = useNavigate();

    const handleBack = () => {
        navigate(-1);
    };

    const handleOnClick = () => {
        goOa();
    };

    return (
        <Box sx={style.thankyouContentSx} className="main">
            <Box sx={style.backButtonSx} onClick={handleBack}>
                <BackSvg />
            </Box>
            <Box sx={style.thankyouContainerSx}>
                <CustomImage sx={style.thankyouImageSx} src={IMAGES.THANKYOU_TITLE} alt="thank-you" />
                <CustomImage sx={style.thankyouButtonSx} src={IMAGES.THANKYOU_BTN} alt="collect-postcard" onClick={handleOnClick} />
            </Box>
        </Box>
    );
};

export default ThankyouPage;
