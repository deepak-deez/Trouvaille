import React from "react";
import "./style.scss";
import SignIn from "../../components/landingPage/loginForm/LoginForm.jsx";
const Signin = () => {
  return (
    <header className="h-screen landing-page sign-in-page flex flex-col pt-[8rem] pb-[5rem]">
      <SignIn />
    </header>
  );
};

export default Signin;
