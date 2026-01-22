import { ENV_TYPES } from "configs/constant";

const configs = {
  // Env
  STAGE:
    process.env.REACT_APP_NODE_ENV || process.env.NODE_ENV || ENV_TYPES.PROD,

  // basename: only at build time to set, and Don't add '/' at end off BASENAME for breadcrumbs, also Don't put only '/' use blank('') instead,
  // like '/berry-material-react/react/default'
  BASE_NAME: "/",
  DEFAULT_PATH: "home", //
  defaultPath: false,
  BASE_ROUTE: window.BASE_ROUTE || process.env.REACT_APP_BASE_ROUTE || "",
  ADMIN_PATH: "",

  // LINE
  OA_LINK: process.env.REACT_APP_LINE_AT_URL || "",
  ENABLE_PROFILE_PLUS: false,

  // TP
  SHOP_ID: process.env.REACT_APP_SHOP_ID || "",

  // GA
  GA_TRACKER_ID: process.env.REACT_APP_TRACKING_ID || "",
  GA_CATEGORY: process.env.REACT_APP_GA_CATEGORY || "",
  // lib

  //Form
  FORM_ID: process.env.REACT_APP_FORM_ID || "",
};

export default configs;
