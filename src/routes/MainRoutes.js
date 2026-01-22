// project imports
import Loadable from "components/Loadable";
import MainLayout from "layouts/MainLayout";
import { lazy } from "react";

// ==============================|| MAIN ROUTING ||============================== //
const Journey = Loadable(lazy(() => import("pages/Journey")));
const Complete = Loadable(lazy(() => import("pages/Complete")));
const Download = Loadable(lazy(() => import("pages/Download")));
const ChoosePostcard = Loadable(lazy(() => import("pages/ChoosePostcard")));
const WritePostcard = Loadable(lazy(() => import("pages/WritePostcard")));
const ReceivePostcard = Loadable(lazy(() => import("pages/ReceivePostcard")));
const ThankyouPage = Loadable(lazy(() => import("pages/ThankyouPage")));

const MainRoutes = [
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Journey />,
      },
      {
        path: "/complete",
        element: <Complete />,
      },
      {
        path: "/download",
        element: <Download />,
      },
      {
        path: "/choose-postcard",
        element: <ChoosePostcard />,
      },
      {
        path: "/write-postcard",
        element: <WritePostcard />,
      },
      {
        path: "/receive-postcard",
        element: <ReceivePostcard />,
      },
      {
        path: "/thankyou",
        element: <ThankyouPage />,
      },
    ],
  },
];

export default MainRoutes;
