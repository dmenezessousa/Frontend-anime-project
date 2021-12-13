import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import AuthContextComponent from "../src/components/Context/AuthContext";
ReactDOM.render(
  <React.StrictMode>
    <AuthContextComponent>
      <App />
    </AuthContextComponent>
  </React.StrictMode>,
  document.getElementById("root")
);
