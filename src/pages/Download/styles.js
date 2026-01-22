export default {
  downloadContentSx: {
    flexDirection: "column",
    display: "flex",
    alignItems: "center",
    width: "100%",
    height: "100vh",
    overflow: "hidden",
    background:
      'url("https://dak6ovdfbyw15.cloudfront.net/img/5/panpuri-journey-to-the-peak/main-background.png") no-repeat center center',
    backgroundSize: "cover",
  },
  maskSx: {
    width: "100%",
    height: "100vh",
    position: "absolute",
    backgroundColor: "rgba(0, 0, 0, 0.8)",
    zIndex: "1",
  },
  downloadContainerSx: {
    height: "68vh",
    zIndex: "2",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -55%)",
  },
  previesImageSx: {
    height: "100%",
    borderRadius: "10px",
  },
  longPressSx: {
    zIndex: "2",
    width: "100%",
    marginTop: "10px",
  },
  downloadButtonSx: {
    display: "flex",
    justifyContent: "center",
  },
  backButtonSx: {
    position: "absolute",
    width: "100%",
    zIndex: "10",
    top: "20px",
    left: "20px",
    "& svg": {
      width: "12px",
    },
  },
};
