import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import "./style.scss";
import axios from "axios";
import { validEmail } from "../../../constants/regex";

const SetPassword = () => {
  const emailref = useRef();
  const [apiMessage, setApiMessage] = useState("");

  const handleEmailValidation = () => {
    try {
      if (!validEmail.test(emailref.current.value)) {
        throw new Error("Please Enter a valid E-mail!");
      } else {
        document.getElementById("validEmail").textContent = "";
      }
    } catch (err) {
      document.getElementById("validEmail").textContent = err.message;
    }
  };

  const sendLink = async () => {
    const data = {
      email: emailref.current.value,
    };

    const response = await axios.post(
      `${process.env.REACT_APP_API_HOST}send-reset-mail/Frontend-user`,
      data
    );

    setApiMessage(response.data.message);
  };
  return (
    <header className="flex flex-col set-password justify-center items-center mt-[100px] my-auto">
      <h2 className="md:text-[64px] text-center mt-[10px] lg:mt-[30px] text-[50px]">
        Set profile password
      </h2>
      <div className="flex flex-col lg:w-[975px] w-[90%] md:px-[30px] md:py-[30px] mt-[15px] login-details px-[25px] py-[15px] lg:py-[67px] lg:px-[97px] justify-center">
        <p
          className={
            "text-3xl text-white text-center api-message " +
            (!!apiMessage.length ? "mb-5" : "")
          }
        >
          {apiMessage}
        </p>
        <input
          className="text-[20px] input-fields lg:px-[39px] px-[15px] py-[20px] lg:py-[32px] mt-[9px] bg-transparent"
          type="text"
          ref={emailref}
          placeholder="Enter Your Email Address"
          onChange={handleEmailValidation}
        />
        <h4
          id="validEmail"
          className="text-red-800 bg-transparent text-xl"
        ></h4>
        <button
          to="/resetPassword"
          onClick={sendLink}
          className="lg:mt-[27px] mt-[20px] px-[15px] py-[20px] lg:py-[24px] text-center send-password-button"
        >
          SEND LINK
        </button>
      </div>
    </header>
  );
};

export default SetPassword;
