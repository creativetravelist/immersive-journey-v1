import { createRoot } from "react-dom/client";

// third party
import { SnackbarProvider } from "notistack";

// project imports
import App from "App";

import MenuProvider from "providers/Menu";
import * as serviceWorker from "serviceWorker";

// defaultTheme

// style + assets
import "assets/scss/style.scss";
import configs from "configs/envConfig";

// ==============================|| REACT DOM RENDER  ||============================== //

const container = document.getElementById("root");
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(
  <SnackbarProvider maxSnack={3}>
    <MenuProvider>
      <App />
    </MenuProvider>
  </SnackbarProvider>,
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
