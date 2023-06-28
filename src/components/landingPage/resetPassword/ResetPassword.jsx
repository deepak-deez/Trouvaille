import React, { useRef, useState } from "react";
import "./style.scss";
import axios from "axios";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import SweetAlert from "../../alert/sweetAlert";

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
      <h2 className="md:text-[45px] text-center mt-[10px] lg:mt-[30px] text-[30px]">
        Reset your password
      </h2>
      <div className="flex flex-col lg:w-[900px] w-[90%] md:p-10 login-details px-[25px] py-[15px] lg:py-[45px] lg:px-[60px] justify-center mt-10">
        <input
          className=" input-fields  lg:px-[39px] px-[15px] py-[15px] lg:py-[25px] mt-[9px] "
          type="password"
          placeholder="New Password"
          ref={passwordRef}
        />
        <input
          className=" input-fields  lg:px-[39px] px-[15px] py-[15px] lg:py-[25px] mt-[25px]"
          type="password"
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
              if (response?.data?.success) {
                SweetAlert("success", response?.data?.message);
                setTimeout(() => {
                  navigate("/");
                }, 2000);
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
