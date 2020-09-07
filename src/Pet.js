import React from "react";
export default function Pet({ name, specie, breed }) {
  return (
    <div>
      <h1>{name}</h1>
      <h2>{specie}</h2>
      <h2>{breed}</h2>
    </div>
  );
}
