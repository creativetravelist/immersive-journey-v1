import CONFIG from 'configs/journey';
// material-ui
import { Box } from '@mui/material';
import CustomImage from 'customComponents/CustomImage';
import style from '../styles';

const { IMAGES } = CONFIG;

const StartJourney = ({ handleNext }) => {
    return (
        <Box className="start-journey">
            <Box sx={style.titleContainerSx}>
                <CustomImage src={IMAGES.JOURNEY_TO_THE_PEAK_TEXT} alt="journey to the peak" />
            </Box>
            <Box sx={style.footerSx}>
                <CustomImage
                    src={IMAGES.START_BTN}
                    alt=""
                    onClick={handleNext}
                    className="footer-img"
                    // ref={btnRef}
                    onAnimationEnd={() => {
                        // if (btnRef?.current) btnRef?.current.classList.remove('blink');
                    }}
                />
                <Box sx={style.footerTextSx}>
                    <CustomImage src={IMAGES.START_BTN_TEXT} alt="start" />
                </Box>
            </Box>
        </Box>
    );
};

export default StartJourney;
