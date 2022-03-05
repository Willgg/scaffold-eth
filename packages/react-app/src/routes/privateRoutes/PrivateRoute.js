import { lazy } from "react";
import { Navigate } from "react-router-dom";

// project imports
import MainLayout from "../../layout/MainLayout";
import { Home } from "../../views";
// import Loadable from "../../common/Loadable";

// dashboard routing

// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
  path: "/",
  element: <MainLayout />,
  children: [
    {
      path: "/logged-in",
      element: <Navigate to="/logged-in/inbox" />,
    },
    {
      path: "/logged-in/:id",
      element: <Home />,
    },
  ],
};

export default MainRoutes;
