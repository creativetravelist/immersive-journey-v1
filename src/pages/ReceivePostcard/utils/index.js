import { ReactComponent as RestartTextPlain } from 'assets/icon/restart-text-plain.svg';
import CONFIG from 'configs/journey';

const { IMAGES, POSTCARD_OPTIONS } = CONFIG;

export const getContentByType = (type) => {
    switch (type) {
        case POSTCARD_OPTIONS[0]:
            return {
                bg: {
                    background: `url(${IMAGES.POSTCARD_BG_TYPE_1}) no-repeat center center`
                },
                stampSrc: IMAGES.CHOOSE_CARD2,
                color: '#B64926',
                bottomTextColor: '#fff',
                clickIconSrc: IMAGES.CLICK_ICON_2
            };
        case POSTCARD_OPTIONS[1]:
            return {
                bg: {
                    background: `url(${IMAGES.POSTCARD_BG_TYPE_2}) no-repeat center center`
                },
                stampSrc: IMAGES.CHOOSE_CARD1,
                color: '#165C5E',
                bottomTextColor: '#165C5E',
                restartText: <RestartTextPlain />,
                clickIconSrc: IMAGES.CLICK_ICON_1
            };
        case POSTCARD_OPTIONS[2]:
            return {
                bg: {
                    background: `url(${IMAGES.POSTCARD_BG_TYPE_3}) no-repeat center center`
                },
                stampSrc: IMAGES.CHOOSE_CARD3,
                color: '#B49A55',
                bottomTextColor: '#6B5B2D',
                restartText: <RestartTextPlain />,
                clickIconSrc: IMAGES.CLICK_ICON_3
            };
        default:
            return {
                bg: {
                    background: `url(${IMAGES.POSTCARD_BG_TYPE_1}) no-repeat center center`
                },
                stampSrc: IMAGES.CHOOSE_CARD2,
                color: '#B64926',
                bottomTextColor: '#fff',
                clickIconSrc: IMAGES.CLICK_ICON_2
            };
    }
};

export const getSvgSx = (color) => ({
    '& circle': {
        fill: color
    }
});

export const getTextSvgSx = (color) => ({
    '& path': {
        fill: color
    }
});

export const getBottomTextSvgSx = (bottomTextColor) => ({
    '& path': {
        fill: bottomTextColor
    }
});
