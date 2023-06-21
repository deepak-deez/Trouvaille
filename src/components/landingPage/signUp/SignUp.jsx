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

// import {
//   userDetailsState,
//   loadingState,
//   errorState,
// } from "../../../redux/slices/userSlice";
import swal from "sweetalert2";
import { useSlider } from "@mui/base";

const generateCaptcha = () => {
  const randomText = Math.random().toString(36).substring(2, 8);
  return randomText;
};

const SignUp = () => {
  const navigate = useNavigate();
  const emailRef = useRef();
  const phoneNoRef = useRef();
  const passowrdRef = useRef();
  const confirmPasswordRef = useRef();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowCofirmPassword] = useState(false);
  const [differentPassword, setDifferentPassword] = useState(false);
  const [captchaText, setCaptchaText] = useState(generateCaptcha());
  const [userInput, setUserInput] = useState("");
  const [isValidCaptcha, setIsValidCaptcha] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const [toOpenDiv, setToOpenDiv] = useState(false);
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

  const inputChange = (e) => {
    setUserInput(e.target.value);
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

  const checkCaptcha = (e) => {
    e.preventDefault();
    if (userInput === captchaText) {
      setIsValidCaptcha(true);
      setIsChecked(true);
    } else {
      setIsValidCaptcha(false);
      setCaptchaText(generateCaptcha());
      setUserInput("");
    }
  };

  const openDiv = () => {
    console.log("div opening");
    // setIsChecked(true);
    setToOpenDiv(true);
  }

  // const handleCreateNewAccount = async (e) => {
  
    // const inputVal = await e.target.value;
    // const token = captchaRef.current.getValue();
    // console.log(token);
    // console.log(inputVal);
    // captchaRef.current.reset();

    // await axios
    //   .post(inputVal, token)
    //   .then((res) => console.log(res))
    //   .catch((error) => {
    //     console.log(error);
    //   });

  const handleCreateNewAccount = async (e) => {
    e.preventDefault();
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

      // const response = await axios.post(
      //   `${process.env.REACT_APP_API_HOST}register/Frontend-user`,
      //   newUserDetails
      // );

      // setApiMessage(response?.data?.message);

      // if (response?.data?.success) {
      //   navigate("/");
      // }
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

  // console.log(
  //   "UserDetails:",userDetails,
  //   "Success : ",
  //   success,
  //   "ERROR: ",
  //   error,
  //   "Loading: ",
  //   loading
  // );

  return (
    <header className="flex flex-col signup-form justify-center items-center">
      <p className="md:text-[34px]">Sign up</p>
      <h2 className="md:text-[64px] text-center mt-[10px] lg:mt-[30px] text-[50px]">
        Welcome to Trouvaille
      </h2>
      <div className="flex flex-col gap-[30px] lg:w-[975px] w-[90%] md:px-[30px] md:py-[30px] mt-[15px] signup-details px-[25px] py-[15px] lg:py-[67px] lg:px-[97px] justify-center">
        <input
          className="input-fields text-[20px] lg:px-[39px] px-[15px] py-[20px] lg:py-[25px] bg-transparent w-[100%]"
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
          className=" input-fields phone-field text-[20px] lg:px-[39px] px-[15px] py-[20px] lg:py-[25px]  w-[100%]"
          type="number"
          placeholder="Phone Number"
          ref={phoneNoRef}
          onChange={handlePhoneNumberValidation}
        />
        <h4
          id="validPhone"
          className="text-red-600 bg-transparent text-xl"
        ></h4>
        <div className=" input-fields lg:px-[39px] px-[15px]  flex flex-row items-center justify-between">
          <input
            className="bg-transparent text-[20px] lg:py-[25px] py-[20px] w-[100%] password-field"
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
        <div className=" input-fields lg:px-[39px] px-[15px] flex flex-row items-center justify-between">
          <input
            className="py-[20px] text-[20px] w-[100%] lg:py-[25px] bg-transparent password-field"
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
       
        <p className={apiMessage ? " api-message my-5 " : ""}>{apiMessage}</p>

        <div className="bg-white w-[20rem] py-3 mt-2 lg:mb-[-15px] lg:px-3 lg:py-3 lg:text-lg rounded-lg">
          <input type="checkbox" className="ml-2" checked={isValidCaptcha} onClick={openDiv} />
          <label className="pl-4 pr-3">I am not a Robot</label>
        </div>

        <div className={"flex flex-col " + (isChecked ? "hidden" : "block")}>
          <p
            className=" mt-2 w-[5rem] captcha-text bg-white font-bold text-lg sm:text-xl"
            onPaste={(e) => {
              e.preventDefault();
              return false;
            }}
            onCopy={(e) => {
              e.preventDefault();
              return false;
            }}
          >
            {captchaText}
          </p>
          <input
            className="rounded-xl pl-2 py-2 w-[20rem] mt-2"
            type="text"
            value={userInput}
            onChange={inputChange}
          />
          <button
            className="submit-button text-center px-[5px] py-[10px] mt-4 w-[30%] sm:mx-96 lg:mx-72"
            type="submit"
            onClick={checkCaptcha}
          >
            submit
          </button>
        </div>
        <button
          className={
            "px-[15px] py-[20px] lg:py-[26px] text-center continue-button " +
            (!differentPassword && !apiMessage.length
              ? " lg:mt-[60px] mt-[20px] "
              : "")
          }
          onClick={(e) => {
            if (isChecked) {
              handleCreateNewAccount(e);
            }
          }}
        >
          CONTINUE
        </button>
      </div>
    </header>
  );
};

export default SignUp;
