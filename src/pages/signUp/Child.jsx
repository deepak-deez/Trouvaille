import React from "react";
import "./child.scss";
import NavBar from "../../components/landingPage/navBar/Child.jsx";
import Signup from "../../components/landingPage/signUp/Child.jsx";
import Footer from "../../components/landingPage/footer/Child.jsx";
const signin = () => {
  return (
    <header className="sign-up-page flex flex-col">
      <NavBar />
      <Signup />
      <Footer />
    </header>
  );
};

export default signin;
