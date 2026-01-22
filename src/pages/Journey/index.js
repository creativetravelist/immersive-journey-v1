import { useState } from "react";
import ReactPlayer from "react-player";
// material-ui
import { Box } from "@mui/material";
import Tools from "components/Tools";
import CONFIG from "configs/journey";
import CustomImage from "customComponents/CustomImage";
import Capture from "./components/Capture";
import Peak from "./components/Peak";
import Quiz1 from "./components/Quiz1";
import Quiz3 from "./components/Quiz3";
import Signature from "./components/Signature";
import StartCapture from "./components/StartCapture";
import StartJourney from "./components/StartJourney";

import HiddenSignature from "./components/HiddenSignature";
import style from "./styles";

const { VIDEOS } = CONFIG;

const JourneyPage = () => {
  const [isUserInteracted, setIsUserInteracted] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [signatureData, setSignatureData] = useState("");
  const [activeSection, setActiveSection] = useState(null);
  const [signatureBase64, setSignatureBase64] = useState(null);
  const [playMusic, setPlayMusic] = useState(false);
  const [isPlayingVideo, setIsPlayingVideo] = useState(false);
  const [isMuted, setIsMuted] = useState(true);

  const handleNext = (e) => {
    const startJourney = document.querySelector(".start-journey");
    startJourney.classList.toggle("fadeOut");

    setCurrentStep(1);
  };

  const handleClick = () => {
    //play audio
    setIsUserInteracted(true);
    // 預設播放音樂
    // if (!isUserInteracted) {
    //   setPlayMusic(true);
    // }
  };

  const handlePlayVideo = () => {
    setIsPlayingVideo(!isPlayingVideo);
    // setIsMuted(false);
    setPlayMusic(false);
  };

  const handleOnEndVideo = () => {
    setIsPlayingVideo(false);
    // setPlayMusic(true);
  };

  return (
    <Box
      sx={{
        width: "100%",
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          width: "100%",
          maxWidth: "430px",
          minHeight: "100vh",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <Box sx={style.contentSx} onClick={handleClick} className="main">
          {currentStep <= 1 && <CustomImage sx={style.logoImageSx} />}
          <Tools playMusic={playMusic} />
          <StartJourney
            handleNext={handleNext}
            setCurrentStep={setCurrentStep}
          />

          {currentStep >= 5 && (
            <Box
              className={isPlayingVideo ? "fadeIn " : "fadeOut"}
              sx={style.videoContainerSx}
            >
              <ReactPlayer
                onEnded={handleOnEndVideo}
                controls={false}
                playsinline
                width="100%"
                height="100%"
                url={VIDEOS.TO_PEAK_VIDEO}
                playing={isPlayingVideo}
                muted={isMuted}
              />
            </Box>
          )}

          {currentStep === 1 && (
            <Signature
              setCurrentStep={setCurrentStep}
              setSignatureData={setSignatureData}
            />
          )}
          {currentStep === 2 && <Quiz1 setCurrentStep={setCurrentStep} />}
          {currentStep === 3 && (
            <StartCapture setCurrentStep={setCurrentStep} />
          )}
          {currentStep === 4 && (
            <Capture
              setCurrentStep={setCurrentStep}
              setActiveSection={setActiveSection}
            />
          )}
          {currentStep === 5 && (
            <Quiz3
              setCurrentStep={setCurrentStep}
              handlePlayVideo={handlePlayVideo}
            />
          )}
          {currentStep === 6 && (
            <Peak
              activeSection={activeSection}
              signatureBase64={signatureBase64}
            />
          )}

          <HiddenSignature
            activeSection={activeSection}
            signatureData={signatureData}
            setSignatureBase64={setSignatureBase64}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default JourneyPage;
