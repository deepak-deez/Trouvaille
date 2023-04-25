import React from "react";
import "./signin.scss";
import NavBar from "../../components/landingPage/navBar/navbar.jsx";
import SetPassword from "../../components/landingPage/setPassword/Child.jsx"
import Footer from "../../components/landingPage/footer/footer.jsx"
const signin = () => {
  return (
        <header className="sign-in-page">
          <NavBar />
          <SetPassword />
          <Footer />
        </header>
  );
};

export default signin;
