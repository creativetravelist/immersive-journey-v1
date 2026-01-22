import html2canvas from "html2canvas";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { useLocation, useSearchParams } from "react-router-dom";
// material-ui
import { Box, CircularProgress } from "@mui/material";
import Tools from "components/Tools";
import CONFIG from "configs/journey";
import CustomImage from "customComponents/CustomImage";
import { useToast } from "hooks/useToast";
import {
  isAndroid,
  ShareToFacebookPost,
  ShareToInstagramStory,
} from "utils/methods";
import style from "./styles";
import {
  getBgSx,
  getContentByType,
  getSocialMediaSx,
  handleShowSnackbarWithAction,
} from "./utils";

//import svg
import { ReactComponent as DownloadSvg } from "assets/icon/download.svg";
import { ReactComponent as FacebookSvg } from "assets/icon/fb.svg";
import { ReactComponent as ShareSvg } from "assets/icon/share.svg";

const { SHARE_TYPE } = CONFIG;

const Complete = () => {
  const navigate = useNavigate();
  const { warning, close } = useToast();

  const [html2canvasImage, setHtml2canvasImage] = useState(null);
  const [html2canvasBlob, setHtml2canvasBlob] = useState(null);
  const [isUploading, setIsUploading] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [retryType, setRetryType] = useState(null);
  const [showRetryModal, setShowRetryModal] = useState({
    show: false,
    retryCount: 0,
    blob: null,
    exceededLimit: false,
  });

  const [searchParams] = useSearchParams();
  const type = searchParams.get("type");

  const location = useLocation();
  const { signatureBase64 } = location.state || {}; // 提取state中的資料

  useEffect(() => {
    if (html2canvasImage) return;
    async function preGenerateImg() {
      const image = await generateAndUploadImg();
      setHtml2canvasImage(image);
    }
    preGenerateImg();
  }, []);

  useEffect(() => {
    if (retryType === SHARE_TYPE.DOWNLOAD && html2canvasImage) handleDownload();
  }, [html2canvasImage]);

  useEffect(() => {
    if (showRetryModal.show)
      handleShowSnackbarWithAction(warning, showRetryModal, handleRetry);
    else close();
  }, [showRetryModal]);

  const generateAndUploadImg = async () => {
    setIsUploading(true);
    const blob = html2canvasBlob || (await getBlob());
    return await uploadBlobImage(blob);
  };

  const getBlob = async () => {
    const el = document.querySelector("#complete");
    return html2canvas(el, {
      logging: false,
      useCORS: true,
      allowTaint: false,
      scale: 1.4,
    }).then(
      (canvas) =>
        new Promise((resolve) => {
          canvas.toBlob((blob) => {
            setHtml2canvasBlob(blob);
            resolve(blob); // 返回 blob 結果
          }, "image/png");
        }),
    );
  };

  const handleRetry = () => {
    const { retryCount, blob } = showRetryModal;
    setShowRetryModal({ show: false, retryCount: 0, blob: null });
    uploadBlobImage(blob, retryCount);
  };

  const uploadBlobImage = async (blob, retryCount = 0) => {
    if (!blob) return;

    try {
      setIsUploading(true);
      const formData = new FormData();
      formData.append("file", blob);
    } catch (error) {
      if (retryCount < 2) {
        setShowRetryModal({ show: true, retryCount: retryCount + 1, blob });
      } else {
        setShowRetryModal({
          show: true,
          retryCount: 3,
          blob,
          exceededLimit: true,
        });
      }
    } finally {
      setIsUploading(false);
      setIsLoading(false);
    }
  };

  const { content, bg, color } = getContentByType(type);

  const bgSx = getBgSx(bg);
  const socialMediaSx = getSocialMediaSx(color);

  const handleDownload = async () => {
    if (!html2canvasImage) {
      setIsLoading(true);
      setRetryType(SHARE_TYPE.DOWNLOAD);
      return;
    }
    handleOnSuccess();
    navigate("/download", { state: { html2canvasImage } });
  };

  const handleShare = async (type) => {
    if (isUploading) {
      setIsLoading(true);
      return;
    }

    let image = html2canvasImage;

    if (!html2canvasImage) {
      setIsLoading(true);
      image = await generateAndUploadImg();
      setHtml2canvasImage(image);
    }

    await handleShareByType(type, image);
  };

  const handleShareByType = async (type, image) => {
    if (!image || !type) return;

    switch (type) {
      case SHARE_TYPE.FB:
        ShareToFacebookPost(image, handleOnSuccess);
        break;
      case SHARE_TYPE.IG:
        ShareToInstagramStory(image, handleOnSuccess);
        break;
      case SHARE_TYPE.DOWNLOAD:
        handleDownload();
        break;
    }
  };

  const handleOnSuccess = () => {
    navigate("/thankyou");
  };

  return (
    <Box
      sx={{ ...style.completeContentSx, ...bgSx }}
      className="main"
      id="complete"
    >
      <Box sx={style.fullPageLoadingSx} className={isLoading ? "show" : "hide"}>
        <CircularProgress />
      </Box>
      <Tools />

      <Box sx={style.completeCardSx}>
        <Box sx={style.completeContainerSx} className="complete">
          <CustomImage
            className="complete-content"
            src={content}
            alt="you've reached the peak"
          />
        </Box>
      </Box>
      <CustomImage
        className="signature"
        src={signatureBase64}
        alt="signature"
      />
      <Box
        sx={{ ...style.socialMediaSx, ...socialMediaSx }}
        id="socialMedia"
        data-html2canvas-ignore
      >
        <FacebookSvg
          className={`facebook-svg ${isUploading && "disabled"}`}
          onClick={() => handleShare(SHARE_TYPE.FB)}
        />
        {!isAndroid() && (
          <ShareSvg
            className={`instagram-svg ${isUploading && "disabled"}`}
            onClick={() => handleShare(SHARE_TYPE.IG)}
          />
        )}
        <DownloadSvg
          className={`download-svg ${isUploading && "disabled"}`}
          onClick={handleDownload}
        />
      </Box>
    </Box>
  );
};

export default Complete;
