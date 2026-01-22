export default {
  toolsContenerSx: {
    display: "flex",
    width: "100%",
    position: "absolute",
    padding: "10px",
    alignItems: "center",
    gap: "10px",
    zIndex: "10",
  },
  toolsSx: {
    display: "flex",
    alignItems: "center",
    width: "100%",
    justifyContent: "flex-end",
    "& .arrow img": {
      transition: "transform .7s ease",
    },
    "& .arrow.rotate180 img": {
      transform: "rotate(180deg)",
    },
  },
  langImagesContainerSx: {
    display: "flex",
    alignItems: "center",
  },
  langImagesSx: {
    width: "10%",
    position: "relative",
    "& .lang-dropdown": {
      position: "absolute",
      left: "0",
      width: "100%",
      borderRadius: "5px",
      opacity: "0",
      transform: "translateY(-50%)",
      transition: "transform .7s, opacity 1s",
      zIndex: "1",
    },
    "& .lang-dropdown.active": {
      transform: "translateY(0)",
      opacity: "1",
    },
  },
  langDropDownSx: {
    position: "absolute",
  },
  langImageSx: {
    maxWidth: "100px",
    cursor: "pointer",
    "& img": {
      width: "100%",
    },
  },
  arrowImageSx: {
    width: "24%",
    maxWidth: "100px",
    cursor: "pointer",
  },
  musicImageSx: {
    width: "10%",
    maxWidth: "100px",
    cursor: "pointer",
  },
};
