import React from "react";
import "./style.scss";
import Signin from "../../components/landingPage/loginForm/LoginForm.jsx";
const signin = () => {
  return (
    <header className="landing-page sign-in-page flex flex-col pt-[10rem] pb-[35rem] sm:pb-[20rem]">
      <Signin />
    </header>
  );
};

export default signin;
