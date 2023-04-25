import React from "react";
import "./signin.scss";
import NavBar from "../../components/landingPage/navBar/navbar.jsx";
import Signin from "../../components/landingPage/loginForm/login.jsx"

const signin = () => {
  return (
        <header className="sign-in-page">
          <NavBar />
          <Signin />
        </header>
  );
};

export default signin;
