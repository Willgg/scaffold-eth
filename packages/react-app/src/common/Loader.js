import { Spin } from "antd";
// material-ui

// styles
const LoaderWrapper = styled("div")({
  position: "fixed",
  zIndex: 1301,
  width: "100vw",
  height: "100vh",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: "rgba(0, 0, 0,0.3)",
});

// ==============================|| LOADER ||============================== //
const Loader = () => (
  <LoaderWrapper>
    <Spin color="secondary" />
  </LoaderWrapper>
);

export default Loader;
