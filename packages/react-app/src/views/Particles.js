import React from "react";
import Particles from "react-tsparticles";

export default function ParticlesComp() {
  const [theme, setTheme] = React.useState("light");
  React.useEffect(() => {
    console.log(localStorage.getItem("theme"));
    setTheme(localStorage.getItem("theme") === "dark" ? "dark" : "light");
  }, [localStorage.getItem("theme")]);
  return (
    <Particles
      options={{
        fullScreen: {
          enable: true,
          zIndex: -1,
        },
        particles: {
          number: {
            value: 100,
            limit: 300,
            density: {
              enable: true,
              value_area: 800,
            },
          },
          color: {
            value: "#fff",
          },
          shape: {
            type: "line",
            stroke: {
              width: 0,
              color: localStorage.getItem("theme") === "dark" ? "white" : "black",
            },
            polygon: {
              nb_sides: 5,
            },
            image: {
              src: "images/github.svg",
              width: 100,
              height: 100,
            },
          },
          opacity: {
            value: 0.5,
            random: true,
            anim: {
              enable: true,
              speed: 1,
              opacity_min: 0.5,
              sync: false,
            },
          },
          size: {
            value: 30,
            random: true,
            anim: {
              enable: true,
              speed: 10,
              size_min: 10,
              sync: false,
            },
          },
          line_linked: {
            enable: true,
            distance: 100,
            color: localStorage.getItem("theme") == "dark" ? "white" : "black",
            opacity: 1,
            width: 1,
          },
          move: {
            enable: true,
            speed: 3,
            direction: "none",
            random: false,
            straight: false,
            out_mode: "out",
            bounce: false,
            attract: {
              enable: false,
              rotateX: 600,
              rotateY: 1200,
            },
          },
        },
      }}
    />
  );
}
