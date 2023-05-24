import React, { useRef, useState } from "react";
import "./style.scss";
import axios from "axios";
import { useLocation, useNavigate, useParams } from "react-router-dom";

const ResetPassword = () => {
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();
  const [differentPassword, setDifferentPassword] = useState(false);
  const [emptyFieldMessage, setEmptyFieldsMessage] = useState(false);
  const url = useLocation();
  const resetPasswordData = {};
  const navigate = useNavigate();
  const params = useParams();
  return (
    <header className="flex flex-col reset-password justify-center items-center mt-[100px] my-auto">
      <h2 className="md:text-[64px] text-center mt-[10px] lg:mt-[30px] text-[50px]">
        Reset your password
      </h2>
      <div className="flex flex-col lg:w-[975px] w-[90%] md:px-[30px] md:py-[30px] mt-[15px] login-details px-[25px] py-[15px] lg:py-[67px] lg:px-[97px] justify-center">
        <input
          className=" input-fields text-[20px] lg:px-[39px] px-[15px] py-[15px] lg:py-[25px] mt-[9px] "
          type="text"
          placeholder="New Password"
          ref={passwordRef}
        />
        <input
          className=" input-fields text-[20px] lg:px-[39px] px-[15px] py-[15px] lg:py-[25px] mt-[25px]"
          type="text"
          placeholder="Confirm Password"
          ref={confirmPasswordRef}
        />

        <p
          className={
            "text-3xl different-password mt-8 " +
            (differentPassword ? "block" : "hidden")
          }
        >
          Password Doesn't Match
        </p>

        <button
          className="lg:mt-[27px] mt-[20px] px-[15px] py-[20px] lg:py-[24px] text-center save-button"
          onClick={async () => {
            if (
              passwordRef.current.value === confirmPasswordRef.current.value
            ) {
              setDifferentPassword(false);
            } else {
              setDifferentPassword(true);
            }

            resetPasswordData["newPassword"] = passwordRef.current.value;
            resetPasswordData["id"] = params.id;
            resetPasswordData["token"] = params.token;
            if (passwordRef.current.value.length) {
              setEmptyFieldsMessage(false);

              const response = await axios.post(
                `http://localhost:7000/set-password/Frontend-user`,
                resetPasswordData
              );
              console.log(response);
              if (response?.data?.success) {
                console.log(response.data.message);
                navigate("/");
              }
            } else {
              setDifferentPassword(true);
            }
          }}
        >
          SAVE
        </button>
      </div>
    </header>
  );
};

export default ResetPassword;
