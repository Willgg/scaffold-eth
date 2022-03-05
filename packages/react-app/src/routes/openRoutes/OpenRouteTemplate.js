import { Link, Outlet } from "react-router-dom";
//3rd-party impprts
import Typewriter from "typewriter-effect";
import { Typography } from "antd";
import { Particles } from "../../views";

const { Text } = Typography;

function Type() {
  return (
    <Typewriter
      options={{
        strings: ["To access your private message you have to connect to your favorite wallet."],
        autoStart: true,
        loop: true,
        deleteSpeed: 10,
      }}
    />
  );
}

export default function AuthLayout() {
  return (
    <>
      <div
        style={{ width: "100vw", height: "100vh", justifyContent: "center", alignItems: "center" }}
        className="Signin"
      >
        <Particles />
        <div
          style={{
            display: "flex",
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            width: "100%",
            height: "100%",
          }}
        >
          <h1>
            Hi,connect to your wallet ! <span className="wave">👋🏻</span>{" "}
          </h1>
          <h4 type="secondary">
            <Type />
          </h4>
          <Outlet />
        </div>
      </div>
    </>
  );
}
