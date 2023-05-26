import React from "react";
import "./style.scss";
import SignIn from "../../components/landingPage/loginForm/LoginForm.jsx";
const Signin = () => {
  return (
    <header className="landing-page sign-in-page flex flex-col pt-[10rem] pb-[35rem] sm:pb-[20rem]">
      <SignIn />
    </header>
  );
};

export default Signin;
