import React, { StrictMode } from "react";
import App from "./App";
import { createRoot } from "react-dom/client";
import "./index.scss";
import Header from "./components/landingPage/header";
import Login from "./components/landingPage/login";
import Footer from "./components/landingPage/footer";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
    <Header />
    <Login />
    <Footer />
  </StrictMode>
);
