export default {
  thankyouContentSx: {
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
  thankyouContainerSx: {
    width: "90%",
    zIndex: "2",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -70%)",
  },
  thankyouImageSx: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
  },
  thankyouButtonSx: {
    width: "42%",
    borderRadius: "10px",
    margin: "-23% auto",
    display: "flex",
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
