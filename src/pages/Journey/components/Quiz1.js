import CONFIG from 'configs/journey';
import { useEffect, useState } from 'react';
// material-ui
import { Box } from '@mui/material';
import CustomImage from 'customComponents/CustomImage';
import style from '../styles';

const { IMAGES, QUIZ1_OPTIONS } = CONFIG;

const Quiz1 = ({ setCurrentStep }) => {
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const [isAnimationEnd, setIsAnimationEnd] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            const signature = document.querySelector('.quiz1');
            signature.classList.toggle('fadeIn');
        }, 2000);

        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        const animationTimer = setTimeout(() => {
            setIsAnimationEnd(true);
        }, 7500);

        return () => clearTimeout(animationTimer);
    }, []);

    const handleNext = (e) => {
        e.stopPropagation();

        if (!selectedAnswer || !isAnimationEnd) return;

        const quiz1 = document.querySelector('.quiz1');
        quiz1.classList.remove('fadeIn');
        quiz1.classList.toggle('fadeOut');

        setTimeout(() => {
            const main = document.querySelector('.main');
            main.classList.remove('zoomInToQuiz1');
            main.classList.toggle('zoomInToCapture');
        }, 1000);

        setTimeout(() => {
            setCurrentStep(3);
        }, 1500);
    };

    const handleClickAnswer = (e) => {
        if (!isAnimationEnd) return;

        setSelectedAnswer(e.target.id);

        const answers = document.querySelectorAll('.quiz1-ans');
        answers.forEach((answer) => {
            if (answer.id !== e.target.id) {
                answer.classList.add('unSelected');
            } else {
                answer.classList.remove('unSelected');
                answer.classList.add('selected');
            }
        });
    };

    return (
        <Box className="quiz1">
            <CustomImage className="quiz1-bg" src={IMAGES.QUIZ1_BG} alt="quiz1-bg" />

            <Box sx={style.quiz1ContainerSx}>
                <CustomImage className="quiz1-desc1" src={IMAGES.QUIZ1_DESC1} alt="quiz1-desc1" />
                <CustomImage className="quiz1-desc2" src={IMAGES.QUIZ1_DESC2} alt="quiz1-desc2" />

                <Box sx={style.quiz1AnswerSx}>
                    <CustomImage
                        onClick={handleClickAnswer}
                        id={QUIZ1_OPTIONS.A}
                        className="quiz1-ans"
                        src={IMAGES.QUIZ1_ANS_A}
                        alt="quiz1-ans-a"
                    />
                    <CustomImage
                        onClick={handleClickAnswer}
                        id={QUIZ1_OPTIONS.B}
                        className="quiz1-ans"
                        src={IMAGES.QUIZ1_ANS_B}
                        alt="quiz1-ans-b"
                    />
                    <CustomImage
                        onClick={handleClickAnswer}
                        id={QUIZ1_OPTIONS.C}
                        className="quiz1-ans"
                        src={IMAGES.QUIZ1_ANS_C}
                        alt="quiz1-ans-c"
                    />
                </Box>
            </Box>
            <Box
                sx={style.nextBtnSx}
                className={`quiz1-next-btn ${selectedAnswer && 'fadeIn'}`}
                style={{ display: !selectedAnswer ? 'none' : 'flex' }}
            >
                <CustomImage onClick={handleNext} className="swipe-btn" src={IMAGES.QUIZ1_NEXT_BTN} alt="swipe-btn" />
            </Box>
        </Box>
    );
};

export default Quiz1;
