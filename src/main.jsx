import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
// import { TogglerContextProvider } from "./components/state/context";

ReactDOM.render(
  // <TogglerContextProvider>
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  // </TogglerContextProvider>
  document.getElementById("root")
);