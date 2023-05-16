import React from "react";
import "./style.scss";
import SetPassword from "../../components/landingPage/setPassword/SetPassword.jsx";
const signin = () => {
  return (
    <header className="landing-page set-password-page flex flex-col pt-[10rem] pb-[35rem] sm:pb-[20rem]">
      <SetPassword />
    </header>
  );
};

export default signin;
