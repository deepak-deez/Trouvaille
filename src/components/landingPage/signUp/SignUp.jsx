import React, { useRef, useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./style.scss";
import eye from "../../../assets/images/landingPage/loginForm/eye.svg";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { signUp, resetState } from "../../../redux/slices/userSlice";
import {
  validEmail,
  mediumRegexPassword,
  strongRegexPassword,
} from "../../../constants/regex";
import swal from "sweetalert2";

const SignUp = () => {
  const navigate = useNavigate();
  const emailRef = useRef();
  const phoneNoRef = useRef();
  const passowrdRef = useRef();
  const confirmPasswordRef = useRef();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowCofirmPassword] = useState(false);
  const [differentPassword, setDifferentPassword] = useState(false);
  let [apiMessage, setApiMessage] = useState("");
  const [pwdError, setPwdError] = useState(false);

  const newUserDetails = {};
  const dispatch = useDispatch();

  const { FrontendUserData, error, loading, success } = useSelector(
    (state) => state.user
  );

  const handleEmailValidation = () => {
    try {
      if (!validEmail.test(emailRef.current.value)) {
        throw new Error("Please Enter a valid E-mail!");
      } else {
        document.getElementById("validEmail").textContent = "";
      }
    } catch (err) {
      document.getElementById("validEmail").textContent = err.message;
    }
  };

  const handlePhoneNumberValidation = () => {
    try {
      if (phoneNoRef.current.value.length > 10) {
        throw new Error("Please Enter a valid Phone number!");
      } else {
        document.getElementById("validPhone").textContent = "";
      }
    } catch (err) {
      document.getElementById("validPhone").textContent = err.message;
    }
  };

  const handlePasswordCheck = () => {
    try {
      if (passowrdRef.current.value === confirmPasswordRef.current.value) {
        setDifferentPassword(true);
        document.getElementById("confirmPassword").textContent = "";
      } else {
        setDifferentPassword(false);
        throw new Error("Passwords doesn't match!");
      }
    } catch (err) {
      document.getElementById("confirmPassword").textContent = err.message;
    }
  };

  const handleCreateNewAccount = async () => {
    if (
      !emailRef.current.value.length ||
      !phoneNoRef.current.value.length ||
      !passowrdRef.current.value.length ||
      !confirmPasswordRef.current.value.length
    ) {
      swal.fire({
        position: "center",
        icon: "warning",
        title: "Warning",
        text: "Fields cannot be Empty!!",
        showConfirmButton: false,
        timer: 2000,
        timerProgressBar: true,
      });
    } else if (!differentPassword && !pwdError) {
      setDifferentPassword(false);

      newUserDetails["email"] = emailRef.current.value;
      newUserDetails["phone"] = phoneNoRef.current.value;
      newUserDetails["password"] = passowrdRef.current.value;

      dispatch(signUp(newUserDetails));
    } else {
      setDifferentPassword(true);
    }
  };

  const checkValidPassword = () => {
    try {
      if (strongRegexPassword.test(passowrdRef.current.value)) {
        setPwdError(false);
        document.getElementById("validPassword").textContent =
          "Password Strength : Strong!";
      } else {
        if (mediumRegexPassword.test(passowrdRef.current.value)) {
          setPwdError(true);
          throw new Error("Password Strength : Medium!");
        } else {
          setPwdError(true);
          throw new Error("Password Strength : Weak!");
        }
      }
    } catch (err) {
      document.getElementById("validPassword").textContent = err.message;
    }
  };
  // navigate('/')

  useEffect(() => {
    if (success) {
      swal.fire({
        position: "center",
        icon: "success",
        title: "Success",
        text: FrontendUserData,
        showConfirmButton: false,
        timer: 2000,
        timerProgressBar: true,
      });
      dispatch(resetState({ success: false }));
      setTimeout(() => {
        navigate("/");
      }, 2000);
    }
  }, [success]);

  useEffect(() => {
    if (error) {
      setApiMessage(error);
      swal.fire({
        icon: "error",
        title: "Oops...",
        text: error,
        timer: "2500",
        buttons: true,
      });
    }
  }, [error]);

  return (
    <header className=" signup-form justify-center items-center my-auto] h-screen">
      <p className="md:text-[28px] text-center">Sign up</p>
      <h2 className="md:text-[40px] text-center mt-[10px] lg:mt-[30px] text-[32px]">
        Welcome to Trouvaille
      </h2>
      <div className="mx-auto flex flex-col gap-[15px] lg:w-[900px] w-[90%] md:px-[30px] md:py-[30px] mt-[15px] signup-details px-[25px] py-[15px] lg:py-[50px] lg:px-[60px] justify-center ">
        <input
          className="input-fields py-[1rem] px-[1.5rem] bg-transparent w-[100%]"
          type="text"
          placeholder="Email ID"
          ref={emailRef}
          onChange={handleEmailValidation}
        />
        <h4
          id="validEmail"
          className="text-red-600 bg-transparent text-xl"
        ></h4>
        <input
          className=" input-fields phone-field  py-[1rem] px-[1.5rem]  w-[100%]"
          type="number"
          placeholder="Phone Number"
          ref={phoneNoRef}
          onChange={handlePhoneNumberValidation}
        />
        <h4
          id="validPhone"
          className="text-red-600 bg-transparent text-xl"
        ></h4>
        <div className=" input-fields px-[25px]  flex flex-row items-center justify-between">
          <input
            className="bg-transparent py-[1rem]  w-[100%] password-field"
            type={showPassword ? "" : "password"}
            placeholder="Password"
            ref={passowrdRef}
            onChange={checkValidPassword}
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
        <h4
          id="validPassword"
          className={
            "font-bold bg-transparent text-xl " +
            (pwdError ? "text-red-700" : "text-green-700")
          }
        ></h4>
        <div className=" input-fields px-[25px] flex flex-row items-center justify-between">
          <input
            className="py-[1rem]  w-[100%]  bg-transparent password-field"
            type={showConfirmPassword ? "" : "password"}
            placeholder="Confirm Password"
            ref={confirmPasswordRef}
            onChange={handlePasswordCheck}
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
        <h4
          id="confirmPassword"
          className="text-red-700 font-bold bg-transparent text-xl"
        ></h4>

        <button
          className="px-[15px] py-[20px]  text-center continue-button "
          onClick={handleCreateNewAccount}
        >
          CONTINUE
        </button>
      </div>
    </header>
  );
};

export default SignUp;
