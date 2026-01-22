export default {
  completeContentSx: {
    flexDirection: "column",
    display: "flex",
    alignItems: "center",
    width: "100%",
    height: "100vh",
    overflow: "hidden",
    "& .complete": {
      margin: "0 auto 5% auto",
      display: "flex",
      justifyContent: "center",
      flexDirection: "column",
    },
    "& .signature": {
      position: "absolute",
      width: "35%",
      top: "50%",
      left: "50%",
      transform: "translate(-55%, -142%)",
    },
  },
  completeContainerSx: {
    position: "relative",
    "& .complete-content": {
      height: "70vh",
      maxWidth: "95%",
      objectFit: "contain",
      margin: "0 auto",
    },
    "& .signature-text": {
      position: "absolute",
      top: "10%",
      width: "84%",
    },
    "& .signature-bg": {
      position: "absolute",
      top: "0",
      width: "100%",
    },
  },
  socialMediaSx: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "5vh",
    "& svg": {
      height: "4vh",
      "&.disabled": {
        opacity: "0.5",
        pointerEvents: "none",
      },
    },
  },
  completeCardSx: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "20%",
    position: "relative",
  },
  fullPageLoadingSx: {
    display: "none",
    position: "fixed",
    width: "100%",
    height: "100vh",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "center",
    alignItems: "center",
    zIndex: "100",
    "&.show": {
      display: "flex",
    },
  },
};
