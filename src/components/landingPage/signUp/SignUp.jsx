import React, { useRef, useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./style.scss";
import eye from "../../../assets/images/landingPage/loginForm/eye.svg";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { signUp } from "../../../redux/slices/userSlice";
// import {
//   userDetailsState,
//   loadingState,
//   errorState,
// } from "../../../redux/slices/userSlice";
import swal from "sweetalert2";
import { useSlider } from "@mui/base";


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

  const newUserDetails = {};
  const dispatch = useDispatch();

  const {userDetails,error,loading ,success} = useSelector((state) => state.user);
  // const userDetails = useSelector(userDetailsState);
  // const loading = useSelector(loadingState);
  // const error = useSelector(errorState);
  // useEffect(() => {
  //   if (userDetails !== null) dispatch(signUp(newUserDetails));
  // }, [userDetails, dispatch]);

  const handleCreateNewAccount = async () => {
    if (confirmPasswordRef.current.value === passowrdRef.current.value) {
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

  // navigate('/')

  useEffect(() => {
    if (success) {
      swal.fire({
        position: "center",
        icon: "success",
        title: "Success",
        text: userDetails,
        showConfirmButton: false,
        timer: 2000,
        timerProgressBar: true,
      });
      navigate("/");
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
            "text-3xl different-password my-5 " +
            (differentPassword ? " block " : " hidden ")
          }
        >
          Password Doesn't Match
        </p>
        <p className={apiMessage ? " api-message my-5 " : ""}>{apiMessage}</p>
        <button
          className={
            "px-[15px] py-[20px] lg:py-[26px] text-center continue-button " +
            (!differentPassword && !apiMessage.length
              ? " lg:mt-[60px] mt-[20px] "
              : "")
          }
          onClick={handleCreateNewAccount}
        >
          CONTINUE
        </button>
      </div>
    </header>
  );
};

export default SignUp;
