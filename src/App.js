import { useEffect } from "react";

import { CssBaseline, StyledEngineProvider } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

// routing
import Routes from "routes";

// defaultTheme
import themeConfig from "configs/themeConfig";
import theme from "themes";
import customization from "themes/customize";

// project imports
import { LocalizationProvider } from "@mui/x-date-pickers";
import "dayjs/locale/zh-tw";
import NavigationScroll from "layouts/NavigationScroll";

import { resize } from "utils/methods";
import "./index.css";

// ==============================|| APP ||============================== //

const App = () => {
  const { defaultIsDarkMode, defaultIsRTL, ...options } = themeConfig || {};
  useEffect(() => {
    window.addEventListener("resize", resize);
    resize();
    return () => {
      window.removeEventListener("resize", resize);
    };
  }, []);
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider
        theme={theme(customization, defaultIsDarkMode, defaultIsRTL, options)}
      >
        <LocalizationProvider
          dateAdapter={AdapterDayjs}
          adapterLocale={"zh-tw"}
        >
          <CssBaseline />
          <NavigationScroll>
            <Routes />
          </NavigationScroll>
        </LocalizationProvider>
      </ThemeProvider>
    </StyledEngineProvider>
  );
};

export default App;
