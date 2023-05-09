import React from "react";
import "./style.scss";
import NavBar from "../../components/landingPage/navBar/Navbar.jsx";
import SetPassword from "../../components/landingPage/setPassword/SetPassword.jsx";
import Footer from "../../components/landingPage/footer/Footer.jsx";
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
