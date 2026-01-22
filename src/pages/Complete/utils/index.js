import { Button } from '@mui/material';
import CONFIG from 'configs/journey';

const { IMAGES, CAPTURE_OPTIONS, ERROR_TEXT } = CONFIG;

export const getContentByType = (type) => {
    switch (type) {
        case CAPTURE_OPTIONS[1]:
            return {
                content: IMAGES.COMPLETE_TYPE1,
                bg: IMAGES.COMPLETE_BG1,
                color: '#6B5B2D'
            };
        case CAPTURE_OPTIONS[2]:
            return {
                content: IMAGES.COMPLETE_TYPE2,
                bg: IMAGES.COMPLETE_BG2,
                color: '#165C5E'
            };
        case CAPTURE_OPTIONS[3]:
            return {
                content: IMAGES.COMPLETE_TYPE3,
                bg: IMAGES.COMPLETE_BG3,
                color: '#B64926'
            };
        default:
            return {
                content: IMAGES.COMPLETE_TYPE1,
                bg: IMAGES.COMPLETE_BG1,
                color: '#B64926',
                bottomLeft: IMAGES.COMPLETE_BOTTOM_LEFT1,
                bottomRight: IMAGES.COMPLETE_BOTTOM_RIGHT1
            };
    }
};

export const getBgSx = (bg) => ({
    background: `url(${bg}) no-repeat center center`,
    backgroundSize: 'cover'
});

export const getSocialMediaSx = (color) => ({
    '& path': {
        fill: color
    }
});

export const handleShowSnackbarWithAction = (warning, showRetryModal, handleRetry) => {
    const action = (
        <Button
            color="error"
            size="small"
            onClick={() => {
                handleRetry();
            }}
        >
            OK
        </Button>
    );

    const isExceededLimit = showRetryModal.exceededLimit;
    const errorText = isExceededLimit ? ERROR_TEXT.RETRY_LIMIT : ERROR_TEXT.RETRY;

    warning(errorText, {
        action: isExceededLimit ? null : action,
        autoHideDuration: isExceededLimit ? 3000 : null,
        preventDuplicate: false
    });
};
