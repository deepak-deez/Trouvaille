import React from "react";
import "./child.scss";
import NavBar from "../../components/landingPage/navBar/Child.jsx";
import Signin from "../../components/landingPage/loginForm/Child.jsx"
import Footer from "../../components/landingPage/footer/Child.jsx"
const signin = () => {
  return (
        <header className="sign-in-page flex flex-col">
          <NavBar />
          <Signin />
          <Footer />
        </header>
  );
};

export default signin;
