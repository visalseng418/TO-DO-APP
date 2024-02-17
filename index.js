import React from "react";
import ReactDom from "react-dom";
import App from "./Components/App";
import { StrictMode } from "react";

ReactDom.render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById("root")
);
