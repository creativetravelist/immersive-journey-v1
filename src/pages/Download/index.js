import { useNavigate } from 'react-router';
import { useLocation } from 'react-router-dom';
// material-ui
import { Box } from '@mui/material';
import { ReactComponent as BackSvg } from 'assets/icon/back-arrow.svg';
import CONFIG from 'configs/journey';
import CustomImage from 'customComponents/CustomImage';

import style from './styles';
// material-ui

const { IMAGES } = CONFIG;

// project imports

// define & method & style

// ==============================|| SAMPLE PAGE ||============================== //

const DownloadPage = () => {
    const navigate = useNavigate();

    const location = useLocation();
    const { html2canvasImage } = location.state || {};

    const handleBack = () => {
        navigate(-1);
    };

    return (
        <Box sx={style.downloadContentSx} className="main">
            <Box sx={style.maskSx}></Box>
            <Box sx={style.backButtonSx} onClick={handleBack}>
                <BackSvg />
            </Box>

            <Box sx={style.downloadContainerSx}>
                <CustomImage sx={style.previesImageSx} src={html2canvasImage} alt="preview" />
                <Box sx={style.downloadButtonSx}>
                    <CustomImage sx={style.longPressSx} src={IMAGES.DOWNLOAD_TEXT} alt="long-press" />
                </Box>
            </Box>
        </Box>
    );
};

export default DownloadPage;
