import Box from "@mui/material/Box";
import { keyframes, styled } from "@mui/material/styles";

const pulse = keyframes`
 0% {
        opacity: 0.8;
    }
    50% {
        opacity: 1;
    }
    100% {
        opacity: 0.8;
    }
`;

export const WallpaperContainer = styled(Box)(
  ({ theme, background, loaded }) => ({
    width: "100%",
    maxHeight: "calc(100vh - 7.5vh)",
    height: "calc(100vh - 7.5vh)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    background: `${loaded ? `url(${background})` : "rgba(0,0,0,0.8)"}`,
    backgroundSize: "cover",
    backgroundPosition: "top",
    "& .logo": {
      maxHeight: "10vh",
      maxWidth: "40vw",
      margin: "2.5vh 0 2vh 0",
    },
    "& .user-info": { marginBottom: "1.5vh" },
    "& .sub-title": { marginBottom: "3.5vh" },
    "& .download-btn": {
      // margin: '3.5vh',
      margin: "auto 0",
      width: "46vw",
      maxWidth: "46vw",
      "& img": {
        width: "46vw",
        maxWidth: "46vw",
      },
    },
    "@media(min-aspect-ratio: 5.4/10)": {
      "& .download-btn": {
        width: "42vw",
        maxWidth: "42vw",
        "& img": {
          width: "42vw",
          maxWidth: "42vw",
        },
      },
    },

    "@media(min-aspect-ratio: 6/10)": {
      "& .logo": {
        maxHeight: "10vh",
        maxWidth: "30vw",
      },
      "& .user-info": { fontSize: "1rem" },
      "& .sub-title": { fontSize: ".75rem" },
      "& .download-btn": {
        width: "36vw",
        maxWidth: "36vw",
        "& img": {
          width: "36vw",
          maxWidth: "36vw",
        },
      },
    },
  }),
);

export const CarouselItemStyle = styled("div")(({ theme, loaded }) => ({
  position: "relative",
  borderRadius: ".5rem",
  width: "100%",
  height: "100%",
  background: "rgba(256, 256,256, .5)",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundPosition: "center",
  display: "flex",
  justifyContent: "center",
  filter: "drop-shadow(8px 8px 8px rgba(0, 0, 0, 0.25))",
  animation: `${loaded ? "none" : `${pulse} 2s infinite`}`,
  transform: "translate3d(0,0,0)",
  boxShadow:
    "rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px",
  "& img": {
    borderRadius: ".5rem",
    opacity: `${loaded ? 1 : 0}`,
    objectPosition: "center",
    transition: "opacity .2s ease-in-out;",
  },
}));

export const CarouselStyle = {
  height: "calc(47.5vw * 2.085)",

  "@media(min-aspect-ratio: 5.4/10)": {
    height: "calc(45vw * 2.085)",
  },
  "@media(min-aspect-ratio: 5.6/10)": {
    height: "calc(42.5vw * 2.085)",
  },
  "@media(min-aspect-ratio: 6/10)": {
    height: "calc(40vw * 2.085)",
  },
  "@media(min-aspect-ratio: 6.5/10)": {
    height: "calc(35vw * 2.085)",
  },
};
