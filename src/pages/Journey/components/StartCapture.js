import CONFIG from 'configs/journey';
import { useEffect, useState } from 'react';
// material-ui
import { Box } from '@mui/material';
import CustomImage from 'customComponents/CustomImage';
import style from '../styles';

const { IMAGES } = CONFIG;

const StartCapture = ({ setCurrentStep }) => {
    const [isAnimationEnd, setIsAnimationEnd] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            const startCapture = document.querySelector('.start-capture');
            startCapture.classList.toggle('fadeIn');
        }, 1500);

        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        const animationTimer = setTimeout(() => {
            setIsAnimationEnd(true);
        }, 7500);

        return () => clearTimeout(animationTimer);
    }, []);

    const handleClickCamera = (e) => {
        e.stopPropagation();

        if (!isAnimationEnd) return;

        const startCapture = document.querySelector('.start-capture');
        startCapture.classList.remove('fadeIn');
        startCapture.classList.toggle('fadeOut');

        setTimeout(() => {
            setCurrentStep(4);
        }, 1500);
    };

    return (
        <Box className="start-capture">
            <CustomImage className="start-capture-desc1" src={IMAGES.CAPTURE_DESC1} alt="start-capture-desc" />
            <CustomImage className="start-capture-desc2" src={IMAGES.CAPTURE_DESC2} alt="start-capture-desc" />
            <Box sx={style.nextBtnSx} className="start-capture-camera-container">
                <CustomImage
                    onClick={handleClickCamera}
                    className="start-capture-camera"
                    src={IMAGES.CAPTURE_CAMERA}
                    alt="start-capture-camera"
                />
            </Box>
        </Box>
    );
};

export default StartCapture;
