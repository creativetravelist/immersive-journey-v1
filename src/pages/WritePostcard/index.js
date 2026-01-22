import { useState } from "react";
import { useNavigate } from "react-router";
import { useSearchParams } from "react-router-dom";

// material-ui
import { Box } from "@mui/material";
import { ReactComponent as JourneyPeakTextSvg } from "assets/icon/journey-to-the-peak-text.svg";
import { ReactComponent as PostBoxTextSvg } from "assets/icon/post-box-text.svg";
import { ReactComponent as PostBoxSvg } from "assets/icon/post-box.svg";
import Tools from "components/Tools";
import CONFIG from "configs/journey";
import CustomImage from "customComponents/CustomImage";
import { useToast } from "hooks/useToast";
import { formattedDate } from "utils/methods";
import style from "./styles";

const { IMAGES, POSTCARD_OPTIONS } = CONFIG;

const WritePostcard = () => {
  const { warning } = useToast();
  const navigate = useNavigate();

  const [isUserInteracted, setIsUserInteracted] = useState(false);
  const [playMusic, setPlayMusic] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const [searchParams] = useSearchParams();
  const type = searchParams.get("type") || POSTCARD_OPTIONS[0];

  const defaultSpace = "             ";
  const recipientPlaceHolder = "Type recipient name";
  const [recipientName, setRecipientName] = useState(
    defaultSpace + recipientPlaceHolder,
  );

  const handleNext = async () => {
    if (!type) return;

    const textArea = document.querySelector(".textarea");
    const postcardContent = textArea.innerText;
    if (!postcardContent)
      return warning("Please fill in the recipient name and content");

    const receiver = recipientName.replace(defaultSpace, "");
    if (!receiver || receiver === recipientPlaceHolder)
      return warning("Please fill in the recipient name");
  };

  const getContentByType = (type) => {
    switch (type) {
      case POSTCARD_OPTIONS[0]:
        return {
          bg: {
            background: `url(${IMAGES.POSTCARD_BG_TYPE_1}) no-repeat center center`,
          },
          stampSrc: IMAGES.STAMP_IMG_2,
          color: "#B64926",
          bottomTextColor: "#fff",
          sentModalBg: IMAGES.POSTCARD_SENT_2,
          sentModalBtn: IMAGES.POSTCARD_SENT_BTN_2,
        };
      case POSTCARD_OPTIONS[1]:
        return {
          bg: {
            background: `url(${IMAGES.POSTCARD_BG_TYPE_2}) no-repeat center center`,
          },
          stampSrc: IMAGES.STAMP_IMG_1,
          color: "#165C5E",
          bottomTextColor: "#165C5E",
          sentModalBg: IMAGES.POSTCARD_SENT_1,
          sentModalBtn: IMAGES.POSTCARD_SENT_BTN_1,
        };
      case POSTCARD_OPTIONS[2]:
        return {
          bg: {
            background: `url(${IMAGES.POSTCARD_BG_TYPE_3}) no-repeat center center`,
          },
          stampSrc: IMAGES.STAMP_IMG_3,
          color: "#B49A55",
          bottomTextColor: "#6B5B2D",
          sentModalBg: IMAGES.POSTCARD_SENT_3,
          sentModalBtn: IMAGES.POSTCARD_SENT_BTN_3,
        };
      default:
        return {
          bg: {
            background: `url(${IMAGES.POSTCARD_BG_TYPE_1}) no-repeat center center`,
          },
          stampSrc: IMAGES.STAMP_IMG_2,
          color: "#B64926",
          bottomTextColor: "#fff",
          sentModalBg: IMAGES.POSTCARD_SENT_2,
          sentModalBtn: IMAGES.POSTCARD_SENT_BTN_2,
        };
    }
  };

  const { bg, color, stampSrc, bottomTextColor, sentModalBg, sentModalBtn } =
    getContentByType(type);

  const svgSx = {
    "& circle": {
      fill: color,
    },
  };

  const textSvgSx = {
    "& path": {
      fill: color,
    },
  };

  const bottomTextSvgSx = {
    "& .post-box-text path": {
      fill: bottomTextColor,
    },
  };

  const handleTextareaChange = (e) => {
    const inputText = e.target.value;
    if (inputText.length < defaultSpace.length) return;

    setRecipientName(inputText);
  };

  const handleBegin = () => {
    //play audio
    setIsUserInteracted(true);
    if (!isUserInteracted) {
      setPlayMusic(true);
    }
  };

  const handleCreate = () => {
    navigate("/choose-postcard");
  };

  return (
    <>
      <Box
        sx={{ ...bg, ...style.writePostcardContentSx }}
        className="main"
        onClick={handleBegin}
      >
        <Tools playMusic={playMusic} />

        <Box
          sx={style.sentContainerSx}
          className={isSent ? "fadeIn" : "hidden"}
        >
          <Box sx={style.maskSx}></Box>
          <Box sx={style.sentContentSx}>
            <CustomImage
              src={sentModalBg}
              className="sent-content"
              alt="sent-content"
            />
            <CustomImage
              src={sentModalBtn}
              className="sent-btn"
              alt="create-btn"
              onClick={handleCreate}
            />
          </Box>
        </Box>

        <Box sx={style.postcardContainerSx}>
          <Box sx={style.postcardTopDateSx}>
            <p className="date" style={{ color: color }}>
              {formattedDate(new Date())}
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
              contentEditable
            ></span>
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
                  onChange={handleTextareaChange}
                  onFocus={(e) => {
                    if (e.target.value === defaultSpace + recipientPlaceHolder)
                      setRecipientName(defaultSpace);
                  }}
                >
                  TO:
                </textarea>
              </div>
            </Box>
          </Box>
          <CustomImage className="logo" src={IMAGES.BRAND_LOGO} alt="logo" />
        </Box>

        <Box
          sx={{ ...style.footerNextBtnSx, ...svgSx, ...bottomTextSvgSx }}
          onClick={handleNext}
        >
          <PostBoxSvg className="post-box-btn" />
          <PostBoxTextSvg className="post-box-text" />
        </Box>
      </Box>
    </>
  );
};

export default WritePostcard;
