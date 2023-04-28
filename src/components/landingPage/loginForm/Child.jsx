import React, { useRef, useState } from "react";
import "./child.scss";
import { Outlet, Link, Await } from "react-router-dom";
import axios from "axios";
import eye from "../../../assets/images/loginForm/eye.svg";

const Header = () => {
  const [showPassword, setshowPassowrd] = useState(false);
  const emailRef = useRef();
  const passwordRef = useRef();
  const accDetails = {};
  const [apiMessage, setApiMessage] = useState("");
  const [empyFieldsMessage, setEmptyFieldsMessage] = useState(false);

  return (
    <header className="flex flex-col login-form justify-center items-center my-auto">
      <p className="md:text-[34px]">Signin</p>
      <h2 className="md:text-[64px] text-center mt-[10px] lg:mt-[30px] text-[50px]">
        Welcome to Trouvaille
      </h2>
      <div className="flex flex-col lg:w-[975px] w-[90%] md:px-[30px] md:py-[30px] mt-[15px] login-details px-[25px] py-[15px] lg:py-[67px] lg:px-[97px] justify-center">
        <input
          className=" text-[20px] input-fields lg:px-[39px] px-[15px] py-[20px] lg:py-[32px] mt-[9px] w-[100%]"
          type="text"
          placeholder="Enter Email ID"
          ref={emailRef}
        />
        <div className=" input-fields lg:px-[39px]  px-[15px]  lg:mt-[60px] mt-[30px] flex flex-row items-center justify-between">
          <input
            className="text-[20px] lg:py-[32px] py-[20px] w-[100%] bg-transparent"
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            ref={passwordRef}
          />
          <button
            type="button"
            onClick={() => {
              setshowPassowrd(!showPassword);
            }}
          >
            <img className="input-icon" src={eye} alt="view-icon" />
          </button>
        </div>
        <div className="flex flex-row mt-[20px] lg:mt-[26px] text-[14px] gap-[11px]">
          <input type="checkbox" name="remember-me" value="yes" />
          <p className="text-[20px] grey-text">Remember Me</p>
        </div>
        <p className={" api-message " + (!!apiMessage.length ? "my-10" : "")}>
          {apiMessage}
        </p>
        <p
          className={" api-message " + (empyFieldsMessage ? "block" : "hidden")}
        >
          Fields Cannot be Empty
        </p>
        <button
          className="lg:mt-[27px] mt-[20px] px-[15px] py-[20px] lg:py-[24px] text-center continue-button"
          onClick={async () => {
            accDetails["email"] = emailRef.current.value;
            accDetails["password"] = passwordRef.current.value;

            console.log(accDetails);

            if (
              !!emailRef.current.value.length &&
              !!passwordRef.current.value.length
            ) {
              setEmptyFieldsMessage(false);

              const response = await axios
                .post(
                  `${process.env.REACT_APP_apiHost}login/Frontend-user`,
                  accDetails
                )
                .then((response) => {
                  return response;
                })
                .catch((error) => {
                  console.log(error);
                });
              console.log(response);

              setApiMessage(response.data.message);

              console.log(response.data.message);
            } else {
              setEmptyFieldsMessage(true);
            }
          }}
        >
          CONTINUE
        </button>
        <div className="flex justify-between">
          <Link
            className="text-center grey-text mt-[10px] text-[20px] lg:mt-[30px]"
            to="/setPassword"
          >
            Forget Password
          </Link>
          <Link
            className="text-center lg:text[25px text-[20px] grey-text mt-[10px] lg:mt-[30px]"
            to="/signup"
          >
            Create Account
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
