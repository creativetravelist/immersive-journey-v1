import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import { DEFAULT_THEMES } from "configs/constant";

const ToolBarContainer = styled(Box, {
  shouldForwardProp: (prop) => prop !== "show",
})(({ theme, show }) => ({
  display: `${show ? "initial" : "none"}`,
  position: "fixed",
  width: "100%",
  maxWidth: "100%",
  bottom: 0,
  backgroundColor: "rgba(255,255,255,.7)",

  "& .MuiButtonGroup-root": {
    height: DEFAULT_THEMES.TOOL_BAR.height,
    borderRadius: 0,
    background: "transparent",

    "& .MuiButtonBase-root": {
      alignSelf: "center",
      display: "flex",
      flexDirection: "column",
      justifyContent: "flex-end",
      border: "none",
      background: "transparent",
      color: "black",
    },

    "& .Bottom-bar-btn-icon": {
      height: "4.6vh",
      objectFit: "contain",
    },
    "& .active-toolbar-icon": {
      color: "#3A8791",
    },
    "& .bar-text": {
      fontWeight: 500,
      lineHeight: "1",
    },
  },
}));

export default ToolBarContainer;
