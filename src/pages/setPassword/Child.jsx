import React from "react";
import "./child.scss";
import NavBar from "../../components/landingPage/navBar/Child.jsx";
import SetPassword from "../../components/landingPage/setPassword/Child.jsx";
import Footer from "../../components/landingPage/footer/Child.jsx";
const signin = () => {
  return (
    <header className="landing-page set-password-page flex flex-col">
      <NavBar />
      <SetPassword />
      <Footer />
    </header>
  );
};

export default signin;
