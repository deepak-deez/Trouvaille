import React from "react";
import "./signup.scss";
import NavBar from "../../components/landingPage/navBar/navbar.jsx";
import Signup from "../../components/landingPage/signUp/Child.jsx";
import Footer from "../../components/landingPage/footer/footer.jsx";
const signin = () => {
  return (
    <header className="sign-up-page">
      <NavBar />
      <Signup />
      <Footer />
    </header>
  );
};

export default signin;
