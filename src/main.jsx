import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
// import { TogglerContextProvider } from "./components/state/context";

ReactDOM.render(
  // <TogglerContextProvider>
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  // </TogglerContextProvider>
  document.getElementById("root")
);
