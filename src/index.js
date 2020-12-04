//dependencies
import React from "react";
import ReactDOM from "react-dom";
//styles
import "bulma/css/bulma.css";
//components
import App from "./components/App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  rootElement
);
