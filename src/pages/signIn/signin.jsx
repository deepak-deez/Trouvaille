import React from "react";
import "./signin.scss";
import NavBar from "../../components/landingPage/navBar/navbar.jsx";
import Signin from "../../components/landingPage/loginForm/login.jsx"
import Footer from "../../components/landingPage/footer/footer.jsx"
const signin = () => {
  return (
        <header className="sign-in-page">
          <NavBar />
          <Signin />
          <Footer />
        </header>
  );
};

export default signin;
