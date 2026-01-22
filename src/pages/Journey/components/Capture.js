import CONFIG from "configs/journey";
import { useEffect, useRef, useState } from "react";
// material-ui
import { Box } from "@mui/material";
import CustomImage from "customComponents/CustomImage";
import style from "../styles";

const { IMAGES, QUIZ2_OPTIONS, CAPTURE_OPTIONS } = CONFIG;

const Capture = ({ setCurrentStep, setActiveSection }) => {
  const scrollerRef = useRef(null);

  const [quiz2Answer, setQuiz2Answer] = useState(null);
  const [isCaptured, setIsCaptured] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isAnimationEnd, setIsAnimationEnd] = useState(false);
  const [isInit, setIsInit] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      const captureContainer = document.querySelector(".capture-container");
      captureContainer.classList.toggle("fadeIn");
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!scrollPosition || !isInit) return;
    const swipeInstru = document.querySelector(
      `.swipe-instru${scrollPosition}`,
    );
    swipeInstru.classList.add("fadeOut");
  }, [scrollPosition, isInit]);

  useEffect(() => {
    // 預設讓第二個 section
    const defaultSection = document.getElementById(CAPTURE_OPTIONS[2]);
    if (defaultSection) {
      defaultSection.scrollIntoView({ behavior: "smooth" });
    }

    // 初始化時添加 min-height，並在1秒後移除
    const sections = document.querySelectorAll("section");
    sections.forEach((section) => section.classList.add("min-height"));

    const timeoutId = setTimeout(() => {
      sections.forEach((section) => section.classList.remove("min-height"));
      setIsInit(true);
    }, 1000);

    // 綁定滾動事件監聽
    const scroller = scrollerRef.current || window;
    scroller.addEventListener("scroll", handleScroll);

    // 清理滾動事件監聽和計時器
    return () => {
      scroller.removeEventListener("scroll", handleScroll);
      clearTimeout(timeoutId);
    };
  }, []);

  const handleScroll = () => {
    const sections = document.querySelectorAll(".section");
    sections.forEach((section) => {
      const rect = section.getBoundingClientRect();
      if (rect.top >= 0 && rect.top < window.innerHeight / 2) {
        setScrollPosition(section.id);
      }
    });
  };

  const handleClickCameraBtn = (e) => {
    e.stopPropagation();

    setIsCaptured(true);
    //取得目前的 section
    const sections = document.querySelectorAll(".section");
    sections.forEach((section) => {
      const rect = section.getBoundingClientRect();
      if (rect.top >= 0 && rect.top < window.innerHeight / 2) {
        setActiveSection(section.id);
      }
    });

    const scroller = document.querySelector(".scroller");
    scroller.classList.toggle("scaleInAndRotate");

    const mask = document.querySelector(".mask");
    mask.classList.toggle("fadeIn");

    //顯示quiz2的選項
    const quiz2AnswerContainer = document.querySelector(
      ".quiz2-answer-container",
    );
    quiz2AnswerContainer.classList.remove("fadeOut");
    setTimeout(() => {
      quiz2AnswerContainer.classList.toggle("fadeIn");
    }, 1000);
  };

  const handleClickAns = (e) => {
    e.stopPropagation();

    if (!isCaptured) return;

    setQuiz2Answer(e.target.id);

    setTimeout(() => {
      setIsAnimationEnd(true);
    }, 1000);

    const answers = document.querySelectorAll(".quiz2-ans");
    answers.forEach((answer) => {
      if (answer.id !== e.target.id) {
        answer.classList.add("unSelected");
      } else {
        answer.classList.remove("unSelected");
        answer.classList.add("selected");
      }
    });
  };

  const handleOnClickNext = (e) => {
    if (!quiz2Answer || !isAnimationEnd) return;

    const capture = document.querySelector(".capture");
    capture.classList.remove("fadeIn");
    capture.classList.toggle("fadeOut");

    setTimeout(() => {
      const main = document.querySelector(".main");
      main.classList.remove("zoomInToCapture");
      main.classList.toggle("zoomInToQuiz3");
    }, 1000);

    setTimeout(() => {
      setCurrentStep(5);
    }, 1500);
  };

  return (
    <>
      <Box className="capture">
        <Box sx={style.opacitySx} className="mask" />
        <Box sx={style.captureContainerSx} className="capture-container">
          <CustomImage
            className={`capture-bg ${isCaptured && "fadeOutHidden"}`}
            src={IMAGES.CAPTURE_SECTION_BG}
            alt="capture-bg"
          />
          <Box sx={style.captureDescSx}>
            {isCaptured && (
              <CustomImage
                className={`quiz2-desc`}
                src={IMAGES.QUIZ2_DESC}
                alt="quiz2-desc"
              />
            )}

            <div className="scroller" ref={scrollerRef}>
              <section>
                <CustomImage
                  className="section"
                  id={CAPTURE_OPTIONS[1]}
                  src={IMAGES.CAPTURE_SECTION_1}
                  alt="section1"
                />
                <CustomImage
                  className={`swipe-instru swipe-instru1 ${
                    isCaptured && "fadeOutHidden"
                  }`}
                  src={IMAGES.SWIPE_UP}
                  alt="swipe-up"
                />
              </section>
              <section>
                <CustomImage
                  className="section"
                  id={CAPTURE_OPTIONS[2]}
                  src={IMAGES.CAPTURE_SECTION_2}
                  alt="section2"
                />
                <CustomImage
                  className={`swipe-instru swipe-instru2 ${
                    isCaptured && "fadeOutHidden"
                  }`}
                  src={IMAGES.SWIPE_UP_DOWN}
                  alt="swipe-up-down"
                />
              </section>
              <section>
                <CustomImage
                  className="section"
                  id={CAPTURE_OPTIONS[3]}
                  src={IMAGES.CAPTURE_SECTION_3}
                  alt="section3"
                />
                <CustomImage
                  className={`swipe-instru swipe-instru3 ${
                    isCaptured && "fadeOutHidden"
                  }`}
                  src={IMAGES.SWIPE_DOWN}
                  alt="swipe-down"
                />
              </section>
            </div>

            <Box sx={style.nextBtnSx} className={`capture-camera-container`}>
              <Box
                sx={style.quiz2AnswerContainerSx}
                className={`quiz2-answer-container fadeOut`}
              >
                <CustomImage
                  onClick={handleClickAns}
                  id={QUIZ2_OPTIONS.A}
                  className="quiz2-ans"
                  src={IMAGES.QUIZ2_ANS_A}
                  alt="quiz2-ans-a"
                />
                <CustomImage
                  onClick={handleClickAns}
                  id={QUIZ2_OPTIONS.B}
                  className="quiz2-ans"
                  src={IMAGES.QUIZ2_ANS_B}
                  alt="quiz2-ans-b"
                />
                <CustomImage
                  onClick={handleClickAns}
                  id={QUIZ2_OPTIONS.C}
                  className="quiz2-ans"
                  src={IMAGES.QUIZ2_ANS_C}
                  alt="quiz2-ans-c"
                />
              </Box>
              {isCaptured ? (
                <CustomImage
                  className={`quiz2-next-btn ${quiz2Answer && "fadeIn"} `}
                  src={IMAGES.QUIZ2_NEXT_BTN}
                  alt="swipe-up-icon"
                  onClick={handleOnClickNext}
                />
              ) : (
                <CustomImage
                  onClick={handleClickCameraBtn}
                  className={`capture-camera-btn ${
                    isCaptured && "fadeOutHidden"
                  }`}
                  src={IMAGES.CAMERA_BTN}
                  alt="start-capture-camera"
                />
              )}
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Capture;
