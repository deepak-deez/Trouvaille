import React from "react";
import "./style.scss";
import SetPasswordPage from "../../components/landingPage/setPassword/SetPassword.jsx";
const SetPassword = () => {
  return (
    <header className="landing-page set-password-page flex flex-col pt-[10rem] pb-[35rem] sm:pb-[20rem]">
      <SetPasswordPage />
    </header>
  );
};

export default SetPassword;
