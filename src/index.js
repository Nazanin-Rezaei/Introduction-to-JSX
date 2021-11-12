import React from "react";
import ReacatDOM from "react-dom";

const name = "Nazanin";
ReacatDOM.render(
  <div>
    <h1>Hello World !</h1>
    <p> The first practive in React for {name}. </p>
  </div>,
  document.getElementById("root")
);
