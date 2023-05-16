import React from "react";
import "./style.scss";
import Signup from "../../components/landingPage/signUp/SignUp.jsx";
const signin = () => {
  return (
    <header className="landing-page sign-up-page flex flex-col pt-[10rem] pb-[35rem] sm:pb-[20rem]">
      <Signup />
    </header>
  );
};

export default signin;
