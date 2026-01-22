import { useEffect, useRef } from 'react';
import SignatureCanvas from 'react-signature-canvas';
// material-ui
import { Box } from '@mui/material';
import CONFIG from 'configs/journey';
import style from '../styles';

const HiddenSignature = ({ activeSection, signatureData, setSignatureBase64 }) => {
    const sigCanvashidden = useRef(null);

    const { CAPTURE_OPTIONS } = CONFIG;

    useEffect(() => {
        if (!signatureData || !signatureData.length) return;

        // 把簽名並改變顏色
        const redrawSignature = (color) => {
            signatureData.forEach((point) =>
                point.forEach((p) => {
                    p.color = color;
                })
            );
            sigCanvashidden.current.fromData(signatureData);

            // 取得 base64 圖像數據
            const dataBase64 = sigCanvashidden.current.toDataURL();
            setSignatureBase64(dataBase64);
        };

        //根據 activeSection 定義三種
        switch (activeSection) {
            case CAPTURE_OPTIONS[1]:
                redrawSignature('#95804C');
                break;
            case CAPTURE_OPTIONS[2]:
                redrawSignature('#165C5E');
                break;
            case CAPTURE_OPTIONS[3]:
                redrawSignature('#B64926');
                break;
            default:
                redrawSignature('#165C5E');
                break;
        }
    }, [activeSection]);

    return (
        <Box sx={style.signatureHiddenSx}>
            <SignatureCanvas minWidth={3} canvasProps={{ className: 'sigCanvas' }} ref={sigCanvashidden} />
        </Box>
    );
};

export default HiddenSignature;
