import React from "react";
import "./style.scss";
import NavBar from "../../components/landingPage/navBar/Navbar.jsx";
import Signin from "../../components/landingPage/loginForm/LoginForm.jsx";
import Footer from "../../components/landingPage/footer/Footer.jsx";
const signin = () => {
  return (
    <header className="landing-page sign-in-page flex flex-col">
      <NavBar />
      <Signin />
      <Footer />
    </header>
  );
};

export default signin;
