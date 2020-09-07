import React from "react";
import { render } from "react-dom";
import Pet from "./Pet";

const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Adopt me"),
    React.createElement(Pet, {
      name: "perro",
      specie: "dog",
      breed: "algodon",
    }),
    React.createElement(Pet, {
      name: "ave",
      specie: "bird",
      breed: "algoasi",
    }),
    React.createElement(Pet, {
      name: "gato",
      specie: "cat",
      breed: "algoasa",
    }),
  ]);
};

render(React.createElement(App), document.getElementById("root"));
