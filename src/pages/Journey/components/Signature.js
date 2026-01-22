import CONFIG from 'configs/journey';
import { useEffect, useRef, useState } from 'react';
// material-ui
import { Box } from '@mui/material';
import CustomImage from 'customComponents/CustomImage';
import SignatureCanvas from 'react-signature-canvas';
import style from '../styles';

const { IMAGES } = CONFIG;

const Signature = ({ setCurrentStep, setSignatureData }) => {
    const sigCanvas = useRef(null);
    const [isDrawing, setIsDrawing] = useState(false);

    useEffect(() => {
        const signature = document.querySelector('.signature');
        signature.classList.toggle('fadeIn');
    }, []);

    const clearSignature = () => {
        sigCanvas.current.clear();
        setIsDrawing(false);
    };

    const saveSignature = () => {
        const dataArray = sigCanvas.current.toData(); // 取得 base64 圖像數據
        setSignatureData(dataArray);
    };

    const handleNext = (e) => {
        if (!isDrawing) return;

        e.stopPropagation();

        saveSignature();

        const signature = document.querySelector('.signature');
        signature.classList.remove('fadeIn');
        signature.classList.toggle('fadeOut');

        const main = document.querySelector('.main');
        main.classList.toggle('zoomInToQuiz1');

        setTimeout(() => {
            setCurrentStep(2);
        }, 1500);
    };

    const handleBegin = () => {
        setIsDrawing(true);
    };

    useEffect(() => {
        const finishBtn = document.querySelector('.signature-next-btn');

        if (isDrawing) {
            finishBtn.classList.add('fadeIn');
        } else {
            finishBtn.classList.remove('fadeIn');
        }
    }, [isDrawing]);

    return (
        <Box className="signature">
            <Box sx={style.signatureContainerSx}>
                <CustomImage className="signature-text" src={IMAGES.SIGNATURE_TEXT} alt="signature-text" />
                <Box sx={style.signatureCanvasSx}>
                    <SignatureCanvas
                        penColor="#B64926"
                        minWidth={3}
                        canvasProps={{ className: 'sigCanvas' }}
                        ref={sigCanvas}
                        onBegin={handleBegin}
                    />
                    <CustomImage className="restart-svg" src={IMAGES.RESTART_SVG} alt="restart" onClick={clearSignature} />
                    {!isDrawing && (
                        <CustomImage
                            className="signature-placeholder"
                            src={IMAGES.SIGNATURE_PLACEHOLDER}
                            alt="restart"
                            onClick={clearSignature}
                        />
                    )}
                </Box>
            </Box>
            <Box sx={style.footerNextBtnSx} onClick={handleNext}>
                <CustomImage className="signature-next-btn" src={IMAGES.SIGNATURE_NEXT_BTN} alt="signature-bg" />
            </Box>
        </Box>
    );
};

export default Signature;
