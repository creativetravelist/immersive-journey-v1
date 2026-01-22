import CONFIG from 'configs/journey';
import { useEffect, useState } from 'react';
// material-ui
import { Box } from '@mui/material';
import CustomImage from 'customComponents/CustomImage';
import style from '../styles';

const { IMAGES, QUIZ3_OPTIONS } = CONFIG;

const Quiz3 = ({ setCurrentStep, handlePlayVideo }) => {
    const [selectedAnswer, setSelectedAnswer] = useState(null);

    useEffect(() => {
        const timer = setTimeout(() => {
            const signature = document.querySelector('.quiz3');
            signature.classList.toggle('fadeIn');
        }, 2000);

        return () => clearTimeout(timer);
    }, []);

    const handleNext = (e) => {
        e.stopPropagation();

        if (!selectedAnswer) return;

        const quiz3 = document.querySelector('.quiz3');
        quiz3.classList.remove('fadeIn');
        quiz3.classList.toggle('fadeOut');

        setTimeout(() => {
            const main = document.querySelector('.main');
            main.classList.remove('zoomInToQuiz3');
            main.classList.toggle('zoomInToThePeak');
        }, 1000);

        setTimeout(() => {
            setCurrentStep(6);
            handlePlayVideo();
        }, 1500);
    };

    const handleClickAnswer = (e) => {
        setSelectedAnswer(e.target.id);

        const answers = document.querySelectorAll('.quiz3-ans');
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
        <Box>
            <Box sx={style.quiz3ContainerSx} className="quiz3">
                <Box sx={style.quiz3DescContainerSx}>
                    <CustomImage className="quiz3-desc1" src={IMAGES.QUIZ3_DESC1} alt="quiz3-desc1" />
                    <CustomImage className="quiz3-desc2" src={IMAGES.QUIZ3_DESC2} alt="quiz3-desc2" />
                </Box>
                <Box sx={style.quiz3AnswerSx}>
                    <CustomImage
                        onClick={handleClickAnswer}
                        id={QUIZ3_OPTIONS.A}
                        className="quiz3-ans"
                        src={IMAGES.QUIZ3_ANS_1}
                        alt="quiz3-ans-a"
                    />
                    <CustomImage
                        onClick={handleClickAnswer}
                        id={QUIZ3_OPTIONS.B}
                        className="quiz3-ans"
                        src={IMAGES.QUIZ3_ANS_2}
                        alt="quiz3-ans-b"
                    />
                    <CustomImage
                        onClick={handleClickAnswer}
                        id={QUIZ3_OPTIONS.C}
                        className="quiz3-ans"
                        src={IMAGES.QUIZ3_ANS_3}
                        alt="quiz3-ans-c"
                    />
                    <CustomImage
                        onClick={handleClickAnswer}
                        id={QUIZ3_OPTIONS.D}
                        className="quiz3-ans"
                        src={IMAGES.QUIZ3_ANS_4}
                        alt="quiz3-ans-b"
                    />
                    <CustomImage
                        onClick={handleClickAnswer}
                        id={QUIZ3_OPTIONS.E}
                        className="quiz3-ans"
                        src={IMAGES.QUIZ3_ANS_5}
                        alt="quiz3-ans-c"
                    />
                </Box>
            </Box>
            <Box sx={style.nextBtnSx} onClick={handleNext} className={`quiz3-next-btn ${selectedAnswer && 'fadeIn'}`}>
                <CustomImage className="swipe-btn" src={IMAGES.QUIZ3_NEXT_BTN} alt="swipe-btn" />
            </Box>
        </Box>
    );
};

export default Quiz3;
