import CONFIG from 'configs/journey';
import { useEffect } from 'react';
import { useNavigate } from 'react-router';

// material-ui
import { Box } from '@mui/material';
import CustomImage from 'customComponents/CustomImage';
import style from '../styles';

const { IMAGES } = CONFIG;

const Peak = ({ activeSection, signatureBase64 }) => {
    const navigate = useNavigate();

    useEffect(() => {
        const timer = setTimeout(() => {
            const signature = document.querySelector('.peak');
            signature.classList.toggle('fadeIn');
        }, 2000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <Box sx={style.peakContainerSx} className="peak">
            <CustomImage className="peak-title" src={IMAGES.PEAK_TITLE} alt="you've reached the peak" />
            <CustomImage
                className="peak-desc"
                src={IMAGES.PEAK_DESC}
                alt="Here, where the earthly and the divine intertwine, take a moment to"
            />
            <CustomImage className="reflect-btn" src={IMAGES.REFLECT_BTN} alt="Reflect and celebrate your journey!" />
        </Box>
    );
};

export default Peak;
