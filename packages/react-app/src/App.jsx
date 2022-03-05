import React from "react";
import Routes from "./routes";
import { ThemeSwitch } from "./components";
import { testDB } from "./dbTest";

const App = () => {
  testDB();

  return (
    <div>
      <Routes />
      <ThemeSwitch />
    </div>
  );
};

export default App;
