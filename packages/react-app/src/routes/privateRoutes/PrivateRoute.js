import { lazy } from "react";
import { Helmet } from "react-helmet";

// project imports
import MainLayout from "../../layout/MainLayout";
// import Loadable from "../../common/Loadable";

// dashboard routing

// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
  path: "/",
  element: <MainLayout />,
  children: [
    {
      path: "/logged-in",
      element: (
        <div>
          <Helmet>
            <title>loggedin | emailDAO</title>
          </Helmet>
          loggin
        </div>
      ),
    },
  ],
};

export default MainRoutes;
