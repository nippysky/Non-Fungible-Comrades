import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import BackToTop from "./components/BackToTop";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    <BackToTop />
  </React.StrictMode>
);
