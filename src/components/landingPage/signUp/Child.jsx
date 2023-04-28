import React, { useRef, useState } from "react";
import "./child.scss";
import eye from "../../../assets/images/loginForm/eye.svg";
import axios from "axios";

console.log(process.env.REACT_APP_apiHost);

const Header = () => {
  const emailRef = useRef();
  const phoneNoRef = useRef();
  const passowrdRef = useRef();
  const confirmPasswordRef = useRef();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowCofirmPassword] = useState(false);
  const [differentPassword, setDifferentPassword] = useState(false);
  let [apiMessage, setApiMessage] = useState("");

  const newUserDetails = {};

  return (
    <header className="flex flex-col signup-form justify-center items-center">
      <p className="md:text-[34px]">Sign up</p>
      <h2 className="md:text-[64px] text-center mt-[10px] lg:mt-[30px] text-[50px]">
        Welcome to Trouvaille
      </h2>
      <div className="flex flex-col lg:w-[975px] w-[90%] md:px-[30px] md:py-[30px] mt-[15px] signup-details px-[25px] py-[15px] lg:py-[67px] lg:px-[97px] justify-center">
        <input
          className="input-fields text-[20px] lg:px-[39px] px-[15px] py-[20px] lg:py-[25px] mt-[9px] bg-transparent w-[100%]"
          type="text"
          placeholder="Email ID"
          ref={emailRef}
        />
        <input
          className=" input-fields text-[20px] lg:px-[39px] px-[15px] py-[20px] lg:py-[25px] lg:mt-[60px] mt-[30px] w-[100%]"
          type="text"
          placeholder="Phone Number"
          ref={phoneNoRef}
        />
        <div className=" input-fields lg:px-[39px] px-[15px]  lg:mt-[60px] mt-[30px] flex flex-row items-center justify-between">
          <input
            className="bg-transparent text-[20px] lg:py-[25px] py-[20px] w-[100%] password-field"
            type={showPassword ? "" : "password"}
            placeholder="Password"
            ref={passowrdRef}
          />
          <button
            type="button"
            onClick={() => {
              setShowPassword(!showPassword);
            }}
          >
            <img className="input-icon" src={eye} alt="view-icon" />
          </button>
        </div>
        <div className=" input-fields lg:px-[39px] px-[15px] lg:mt-[60px] mt-[30px] flex flex-row items-center justify-between">
          <input
            className="py-[20px] text-[20px] w-[100%] lg:py-[25px] bg-transparent password-field"
            type={showConfirmPassword ? "" : "password"}
            placeholder="Confirm Password"
            ref={confirmPasswordRef}
          />
          <button
            type="button"
            onClick={() => {
              setShowCofirmPassword(!showConfirmPassword);
            }}
          >
            <img className="input-icon" src={eye} alt="view-icon" />
          </button>
        </div>
        <p
          className={
            "text-3xl different-password mt-8 " +
            (differentPassword ? " block " : " hidden ")
          }
        >
          Password Doesn't Match
        </p>
        <p className="api-message">{apiMessage}</p>
        <button
          className="lg:mt-[60px] mt-[20px] px-[15px] py-[20px] lg:py-[26px] text-center continue-button"
          onClick={async () => {
            if (
              confirmPasswordRef.current.value === passowrdRef.current.value
            ) {
              setDifferentPassword(false);

              newUserDetails["email"] = emailRef.current.value;
              newUserDetails["phone"] = phoneNoRef.current.value;
              newUserDetails["password"] = passowrdRef.current.value;

              console.log(newUserDetails);
              console.log(process.env.REACT_APP_apiHost);

              const response = await axios
                .post(
                  `${process.env.REACT_APP_apiHost}register/Frontend-user`,
                  newUserDetails
                )
                .then((response) => {
                  return response;
                })
                .catch((error) => {
                  console.log(error);
                });

              setApiMessage(response.data.message);

              console.log(apiMessage);

              console.log(response.data.message);
            } else {
              setDifferentPassword(true);
            }
          }}
        >
          CONTINUE
        </button>
      </div>
    </header>
  );
};

export default Header;
