import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./Components/App";
import { ThemeManager } from "./ThemeManager";

ReactDOM.render(
  <React.StrictMode>
    <ThemeManager>
      <App />
    </ThemeManager>
  </React.StrictMode>,
  document.getElementById("root")
);
