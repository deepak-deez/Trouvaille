import React from "react";
import "./style.scss";
import NavBar from "../../components/landingPage/navBar/Navbar.jsx";
import Signup from "../../components/landingPage/signUp/SignUp.jsx";
import Footer from "../../components/landingPage/footer/Footer.jsx";
const signin = () => {
  return (
    <header className="landing-page sign-up-page flex flex-col">
      <NavBar />
      <Signup />
      <Footer />
    </header>
  );
};

export default signin;
