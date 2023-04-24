import React, { StrictMode } from "react";
import App from "./App";
import { createRoot } from "react-dom/client";
import "./index.scss";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
