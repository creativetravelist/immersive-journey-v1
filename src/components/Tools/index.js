import { useEffect, useRef, useState } from 'react';

import { Box } from '@mui/material';
import CONFIG from 'configs/journey';
import CustomImage from 'customComponents/CustomImage';
import style from './styles';

const { IMAGES, MUSIC } = CONFIG;

const Tools = ({ playMusic }) => {
    const audioRef = useRef(null);

    const [isMusicPlaying, setIsMusicPlaying] = useState(false);
    // const [curentLang, setCurentLang] = useState('en');

    useEffect(() => {
        if (playMusic) play();
        else pause();
    }, [playMusic]);

    const play = () => {
        audioRef.current.play();
        setIsMusicPlaying(true);
    };

    const pause = () => {
        audioRef.current.pause();
        setIsMusicPlaying(false);
    };

    const toggleMusic = (e) => {
        e.stopPropagation();

        if (audioRef.current.paused) play();
        else pause();
    };

    // const handleDropdown = (e) => {
    //     e.stopPropagation();
    //     //add active class to dropdown
    //     const langDropDown = document.querySelector('.lang-dropdown');
    //     langDropDown.classList.toggle('active');

    //     //rotate arrow
    //     const arrow = document.querySelector('.arrow');
    //     arrow.classList.toggle('rotate180');
    // };

    // const handleOnChangeLang = (e) => {
    //     e.stopPropagation();
    //     setCurentLang(curentLang === 'en' ? 'th' : 'en');
    // };

    return (
        <Box sx={style.toolsContenerSx} data-html2canvas-ignore>
            {/* <Box sx={style.langImagesSx}>
            <Box sx={style.langImageSx} onClick={handleOnChangeLang}>
                <CustomImage src={curentLang === 'en' ? IMAGES.LANG_EN : IMAGES.LANG_TH} alt="logo" />
            </Box>
            <Box sx={style.langDropDownSx} className="lang-dropdown">
                <Box sx={style.langImageSx} onClick={handleOnChangeLang}>
                    <CustomImage src={curentLang === 'en' ? IMAGES.LANG_TH : IMAGES.LANG_EN} alt="lang" />
                </Box>
            </Box>
        </Box> */}
            <Box sx={style.toolsSx}>
                {/* <Box sx={style.langImagesContainerSx} onClick={handleDropdown} className="arrow">
                <CustomImage sx={style.arrowImageSx} src={IMAGES.ARROW} alt="logo" />
            </Box> */}
                <CustomImage
                    sx={style.musicImageSx}
                    src={isMusicPlaying ? IMAGES.MUSIC_BTN : IMAGES.MUSIC_MUTE_BTN}
                    alt="music"
                    onClick={toggleMusic}
                />
            </Box>
            <audio ref={audioRef} src={MUSIC.BG_MUSIC} autoPlay loop>
                <track kind="captions" />
            </audio>
        </Box>
    );
};

export default Tools;
