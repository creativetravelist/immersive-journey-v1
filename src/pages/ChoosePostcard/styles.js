export default {
  choosePostcardContentSx: {
    height: "100vh",
    overflow: "hidden",
    backgroundColor: "#ECE5DA",
    flexDirection: "column",
    display: "flex",
    alignItems: "center",
    width: "100%",
    "& .swiper": {
      width: "100%",
    },
    "& .swiper-slide": {
      width: "30vh",
      marginTop: "5%",
      transition: "transform 1.2s ease, opacity 1s ease",
      "&.swiper-slide-active": {
        transform: "scale(1)",
        opacity: "1",
      },
      "&:not(.swiper-slide-active)": {
        transform: "scale(0.8)",
        opacity: "0.8",
      },
      "& img": {
        width: "100%",
      },
    },

    "& .swiper-pagination-bullet": {
      backgroundColor: "#fff",
      opacity: "1 !important",
      margin: "0 8px !important",
      width: "10px",
      height: "10px",
      "&.swiper-pagination-bullet-active": {
        backgroundColor: "#B64926",
      },
    },
    "& .swiper-wrapper": {
      paddingBottom: "50px",
    },
  },
  maskSx: {
    width: "100%",
    height: "100vh",
    position: "absolute",
    background:
      'url("https://dak6ovdfbyw15.cloudfront.net/img/5/panpuri-journey-to-the-peak/main-background.png") no-repeat center center',
    backgroundSize: "cover",
    opacity: "0.1",
  },
  titleImageSx: {
    marginTop: "15%",
    zIndex: "2",
    height: "calc(var(--app-width) * 0.25)",
  },
  footerNextBtnSx: {
    justifyContent: "center",
    display: "flex",
    flexDirection: "column",
    backgroundSize: "cover",
    position: "fixed",
    bottom: "min(max(4vh, 18px), 4vh)",
    left: "0",
    width: "100%",
    "& img": {
      width: "80%",
      margin: "5% auto",
    },
  },
};
