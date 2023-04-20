import React, { StrictMode } from "react";
import App from "./App";
import { createRoot } from "react-dom/client";
import "./index.scss";
import Login from "./components/landingPage/login";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
    <Login />
  </StrictMode>
);
