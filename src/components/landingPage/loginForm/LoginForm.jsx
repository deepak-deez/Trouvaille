import React, { useEffect, useRef, useState } from "react";
import "./style.scss";
import { Link, useNavigate } from "react-router-dom";
import eye from "../../../assets/images/landingPage/loginForm/eye.svg";
import Cookies from "js-cookie";
import { logInUser } from "../../../redux/actions/userActions";
import { useSelector, useDispatch } from "react-redux";
import swal from "sweetalert2";

const LoginForm = () => {
  const navigate = useNavigate();
  const [showPassword, setshowPassword] = useState(false);
  const emailRef = useRef();
  const passwordRef = useRef();
  const accDetails = {};
  const [apiMessage, setApiMessage] = useState("");
  const [empyFieldsMessage, setEmptyFieldsMessage] = useState(false);
  const dispatch = useDispatch();
  const { userDetails, error } = useSelector((state) => state.logInUser);
  const [checked, setChecked] = useState(
    localStorage.getItem("rememberMe") === "true" ? true : false
  );
  useEffect(() => {
    if (userDetails) {
      handleRemember(userDetails);
      navigate("/searchResult");
    }
  }, [userDetails]);

  useEffect(() => {
    if (error) {
      setApiMessage(error.message);
      console.log(apiMessage);
      swal.fire({
        icon: "error",
        title: "Oops...",
        text: error.message,
        timer: "2500",
        buttons: true,
      });
    }
  }, [error]);

  const handleRemember = (userDetails) => {
    if (checked) {
      localStorage.setItem("email", emailRef.current.value);
      localStorage.setItem("password", passwordRef.current.value);
      localStorage.setItem("token", userDetails.data.token);
      localStorage.setItem("id", userDetails.data.userDetails._id);
      localStorage.setItem("usertype", userDetails.data.userDetails.userType);
      localStorage.setItem("rememberMe", checked);
    } else {
      localStorage.removeItem("email", emailRef.current.value);
      localStorage.removeItem("password", passwordRef.current.value);
      localStorage.removeItem("token", userDetails.data.token);
      localStorage.removeItem("id", userDetails.data.userDetails._id);
      localStorage.removeItem(
        "usertype",
        userDetails.data.userDetails.userType
      );
      localStorage.setItem("rememberMe", checked);
    }
    Cookies.set("TOKEN", userDetails.data.token, { expires: 7 });
  };

  const logInHandler = async () => {
    accDetails["email"] = emailRef.current.value;
    accDetails["password"] = passwordRef.current.value;
    console.log(accDetails);
    if (!!emailRef.current.value.length && !!passwordRef.current.value.length) {
      setEmptyFieldsMessage(false);
      console.log(process.env.REACT_APP_API_HOST);
      dispatch(logInUser(emailRef.current.value, passwordRef.current.value));
      console.log("userdetails", userDetails);
    } else {
      swal.fire({
        icon: "warning",
        title: "Warning",
        text: "Fields cannot be Empty",
        timer: "2500",
        buttons: true,
      });
      setEmptyFieldsMessage(true);
    }
  };

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
          defaultValue={
            localStorage.getItem("email") ? localStorage.getItem("email") : ""
          }
        />
        <div className=" input-fields lg:px-[39px]  px-[15px]  lg:mt-[60px] mt-[30px] flex flex-row items-center justify-between">
          <input
            className="text-[20px] lg:py-[32px] py-[20px] w-[100%] bg-transparent"
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            ref={passwordRef}
            defaultValue={
              localStorage.getItem("password")
                ? localStorage.getItem("password")
                : ""
            }
          />
          <button
            type="button"
            onClick={() => {
              setshowPassword(!showPassword);
            }}
          >
            <img className="input-icon" src={eye} alt="view-icon" />
          </button>
        </div>
        <div className="flex flex-row mt-[20px] lg:mt-[26px] text-[14px] gap-[11px]">
          <input
            type="checkbox"
            name="remember-me"
            value="yes"
            defaultChecked={checked}
            onChange={() => setChecked(!checked)}
          />
          <p className="text-[20px] grey-text">Remember Me</p>
        </div>
        <button
          className="lg:mt-[27px] mt-[20px] px-[15px] py-[20px] lg:py-[24px] text-center continue-button"
          onClick={logInHandler}
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

export default LoginForm;
