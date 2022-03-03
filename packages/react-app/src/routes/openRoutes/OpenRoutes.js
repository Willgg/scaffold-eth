import { Signin } from "../../views";
import OpenRouteTemplate from "./OpenRouteTemplate";
const OpenRoutes = {
  element: <OpenRouteTemplate />,
  children: [
    {
      path: "/sign-in",
      element: <Signin />,
    },
  ],
};

export default OpenRoutes;
