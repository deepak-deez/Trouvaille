import React from "react";
import "./style.scss";
import SetPasswordPage from "../../components/landingPage/setPassword/SetPassword.jsx";
import Footer from "../../components/footer/Footer";

const SetPassword = () => {
  return (
    <header className="h-screen landing-page set-password-page flex flex-col pt-[5rem] pb-[5rem]">
      <SetPasswordPage />
      <Footer />
    </header>
  );
};

export default SetPassword;
