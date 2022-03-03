import { useRoutes } from "react-router-dom";

// routes
import OpenRoutes from "./openRoutes/OpenRoutes";
// import AuthenticationRoutes from "./AuthenticationRoutes";
// import config from "config";

// ==============================|| ROUTING RENDER ||============================== //

export default function ThemeRoutes() {
  return useRoutes([OpenRoutes]);
}
