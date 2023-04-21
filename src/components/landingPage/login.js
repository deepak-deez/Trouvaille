import React from "react";
import "../landingPage/login.scss";

const Login = () => {
  return (
    <div>
      <section className="loginTexts">
        <p className="signIn">Signin</p>
        <p className="welcomeText">
          Welcome back, <span className="userName">Raja Kumari</span>
        </p>
      </section>

      <section className="loginForm">
        <form>
          <div className="formInput">
            <input type="text" placeholder="Enter Email Id" />
            <input type="text" placeholder="Password" />

            <div className="check">
              <input type="checkbox" className="checkBox" />
              <p>Remember me</p>
            </div>
            <button type="submit" className="continueButton">
              continue
            </button>
            <p href="#" target="_blank" classname="forgetPassword">
              Forget Password
            </p>
          </div>
        </form>
      </section>
    </div>
  );
};

export default Login;
