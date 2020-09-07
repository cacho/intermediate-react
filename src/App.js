import React from "react";
import { render } from "react-dom";
import Pet from "./Pet";

const App = () => {
  return (
    <div>
      <h1>Adopt me!</h1>
      <Pet name="perro" specie="dog" breed="algodon" />
      <Pet name="ave" specie="bird" breed="algodon1" />
      <Pet name="gato" specie="cat" breed="algodon2" />
    </div>
  );
};

render(<App />, document.getElementById("root"));
