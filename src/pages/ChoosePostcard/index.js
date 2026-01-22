import { useState } from 'react';
import { useNavigate } from 'react-router';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
// material-ui
import { Box } from '@mui/material';
import Tools from 'components/Tools';
import CONFIG from 'configs/journey';
import CustomImage from 'customComponents/CustomImage';
import { getContentByType } from '../ReceivePostcard/utils';
import style from './styles';

const { IMAGES, POSTCARD_OPTIONS } = CONFIG;

const ChoosePostcard = () => {
    const navigate = useNavigate();

    const [activeIndex, setActiveIndex] = useState(POSTCARD_OPTIONS[0]);
    const [isUserInteracted, setIsUserInteracted] = useState(false);
    const [playMusic, setPlayMusic] = useState(false);

    const handleNext = () => {
        navigate(`/write-postcard?type=${activeIndex}`);
    };

    const handleSlideChange = (swiper) => {
        setActiveIndex(String(swiper.activeIndex));
    };

    const handleClick = (swiper) => {
        const clickedIndex = swiper.clickedIndex;

        if (clickedIndex !== undefined && clickedIndex !== swiper.activeIndex) {
            swiper.slideTo(clickedIndex, 1200); // 使用與 Swiper 相同的速度
        }
    };

    const handleBegin = () => {
        //play audio
        setIsUserInteracted(true);
        if (!isUserInteracted) {
            setPlayMusic(true);
        }
    };

    const { color } = getContentByType(activeIndex);

    const swiperSx = {
        '& .swiper-pagination-bullet-active': {
            backgroundColor: `${color} !important`
        }
    };

    return (
        <>
            <Box sx={{ ...style.choosePostcardContentSx, ...swiperSx }} className="main" onClick={handleBegin}>
                <Box sx={style.maskSx}></Box>
                <Tools playMusic={playMusic} />
                <CustomImage sx={style.titleImageSx} src={IMAGES.CHOOSE_TITLE} alt="choose a postcard" />
                <Swiper
                    slidesPerView={'auto'}
                    centeredSlides={true}
                    spaceBetween={-5}
                    pagination={{
                        clickable: true
                    }}
                    modules={[Pagination]}
                    speed={1200}
                    onSlideChange={handleSlideChange}
                    onClick={handleClick}
                >
                    <SwiperSlide>
                        <CustomImage src={IMAGES.CHOOSE_CARD2} alt="postcard2" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <CustomImage src={IMAGES.CHOOSE_CARD1} alt="postcard1" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <CustomImage src={IMAGES.CHOOSE_CARD3} alt="postcard3" />
                    </SwiperSlide>
                </Swiper>
                <Box sx={style.footerNextBtnSx} onClick={handleNext}>
                    <CustomImage className="choose-next-btn" src={IMAGES.CHOOSE_NEXT_BTN} alt="next" />
                </Box>
            </Box>
        </>
    );
};

export default ChoosePostcard;
