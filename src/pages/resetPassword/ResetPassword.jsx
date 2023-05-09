import React from "react";
import "./style.scss";
import NavBar from "../../components/landingPage/navBar/Navbar.jsx";
import ResetPassword from "../../components/landingPage/resetPassword/ResetPassword.jsx";
import Footer from "../../components/landingPage/footer/Footer.jsx";

const resetPassword = () => {
  return (
    <header className="landing-page reset-password-page flex flex-col">
      <NavBar />
      <ResetPassword />
      <Footer />
    </header>
  );
};

export default resetPassword;
