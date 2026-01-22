import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";

const CarouselContainer = styled(Box)(({ theme }) => ({
  width: "100%",
  maxWidth: "100%",
  minHeight: "10vh",
  position: "relative",
}));

export default CarouselContainer;
