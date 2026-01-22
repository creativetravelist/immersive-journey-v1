import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { useSearchParams } from "react-router-dom";
// material-ui
import { Box, CircularProgress } from "@mui/material";
import { ReactComponent as JourneyPeakTextSvg } from "assets/icon/journey-to-the-peak-text.svg";
import { ReactComponent as ReceiveBottomTextSvg } from "assets/icon/receive-postcard-bottom-text.svg";
import { ReactComponent as ReceiveTitleTextSvg } from "assets/icon/receive-postcard-title.svg";
import { ReactComponent as RestartTextSvg } from "assets/icon/restart-text.svg";
import { ReactComponent as YesSvg } from "assets/icon/yes.svg";
import Tools from "components/Tools";

import CONFIG from "configs/journey";
import CustomImage from "customComponents/CustomImage";
import { formattedDate } from "utils/methods";
import style from "./styles";
import {
  getBottomTextSvgSx,
  getContentByType,
  getSvgSx,
  getTextSvgSx,
} from "./utils";

const { IMAGES } = CONFIG;

const ReceivePostcard = () => {
  const navigate = useNavigate();

  const defaultSpace = "             ";

  const [isLoading, setIsLoading] = useState(true);
  const [activeIndex, setActiveIndex] = useState(null);
  const [recipientName, setRecipientName] = useState(
    defaultSpace + "Type recipient name",
  );
  const [isFlipped, setIsFlipped] = useState(false);
  const [postcard, setPostcard] = useState(null);
  const [playMusic, setPlayMusic] = useState(false);
  const [isUserInteracted, setIsUserInteracted] = useState(false);

  const [searchParams] = useSearchParams();
  const id = searchParams.get("id");

  const { bg, color, stampSrc, bottomTextColor, restartText, clickIconSrc } =
    getContentByType(activeIndex);

  const handleOnClickRestart = () => {
    navigate("/");
  };

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
    handleBegin();
  };

  const handleBegin = () => {
    //play audio
    setIsUserInteracted(true);
    if (!isUserInteracted) {
      setPlayMusic(true);
    }
  };

  const svgSx = getSvgSx(color);
  const textSvgSx = getTextSvgSx(color);
  const bottomTextSx = getBottomTextSvgSx(bottomTextColor);

  return (
    <>
      {!isLoading && (
        <>
          <Tools playMusic={playMusic} />
          <Box
            sx={{ ...bg, ...style.maskSx }}
            className={isFlipped ? "fadeOut" : ""}
          ></Box>
          <Box sx={style.receivePostcardContentSx} className="main">
            <Box sx={{ ...style.titleSx, ...textSvgSx }}>
              <ReceiveTitleTextSvg className="title" />
            </Box>
            <Box
              sx={style.postcardContainerSx}
              className={isFlipped ? "flipped" : ""}
              onClick={handleFlip}
            >
              <div className="flip-box-inner">
                <Box className="flip-box-front">
                  <CustomImage src={stampSrc} alt="stamp" />
                  <CustomImage
                    className="click-icon"
                    src={clickIconSrc}
                    alt="tap to flip"
                  />
                </Box>
                <Box className="flip-box-back">
                  <Box sx={style.postcardTopDateSx}>
                    <p className="date" style={{ color: color }}>
                      {formattedDate(postcard?.sentAt)}
                    </p>
                    <Box sx={style.stampContentSx}>
                      <CustomImage
                        src={IMAGES.POSTCARD_STAMP_FRAME}
                        className="stamp"
                        alt="stamp"
                      />
                      <CustomImage
                        src={stampSrc}
                        className="stamp stamp-img"
                        alt="stamp"
                      />
                    </Box>
                  </Box>
                  <Box sx={{ ...style.postcardInputSx }}>
                    <span
                      className="textarea"
                      role="textbox"
                      style={{ color: color }}
                    >
                      {postcard?.content}
                    </span>
                  </Box>
                  <Box sx={{ ...style.postcardBottomSx, ...textSvgSx }}>
                    <JourneyPeakTextSvg className="bottom-left-imgs" />
                    <Box sx={style.postcardBottomRightSx}>
                      <label htmlFor="recipient" style={{ color: color }}>
                        To:
                      </label>
                      <div className="textarea-container">
                        <textarea
                          id="recipient"
                          style={{ color: color }}
                          value={recipientName}
                          readOnly
                        >
                          TO:
                        </textarea>
                      </div>
                    </Box>
                  </Box>
                  <CustomImage
                    className="logo"
                    src={IMAGES.BRAND_LOGO}
                    alt="logo"
                  />
                </Box>
              </div>
            </Box>

            <Box
              sx={{ ...style.footerTextSx, ...textSvgSx }}
              className={isFlipped ? "fadeOut" : ""}
            >
              <ReceiveBottomTextSvg className="Tap to flip" />
            </Box>

            <Box
              sx={{ ...style.bottomTextSx }}
              className={isFlipped ? "" : "fadeOut"}
            >
              <Box className="restart" sx={{ ...bottomTextSx }}>
                {restartText ? restartText : <RestartTextSvg />}
                {restartText && (
                  <CustomImage
                    className="restart-bg"
                    src={IMAGES.RESTART_TEXT_BG}
                    alt="restart-bg"
                  />
                )}
              </Box>
              <Box className="yes-icon" sx={{ ...svgSx }}>
                <YesSvg onClick={handleOnClickRestart} />
              </Box>
            </Box>
          </Box>
        </>
      )}

      <Box sx={style.fullPageLoadingSx} className={isLoading ? "show" : "hide"}>
        <CircularProgress />
      </Box>
    </>
  );
};

export default ReceivePostcard;
