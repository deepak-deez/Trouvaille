import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import "./style.scss";
import axios from "axios";
import Swal from "sweetalert2";
import ProfileSideBar from "../profileSideBar/ProfileSideBar";
import SignOut from "../../SignOut/SignOut";
import { validPassword } from "../../../constants/regex";

export default function EditAccountDetails({ setActive }) {
  const { userDetails } = useSelector((state) => state.user);
  const [checkPass, setCheckPass] = useState(true);
  const [emptyFields, setEmptyFields] = useState();
  const [newPasswordValid, setNewPasswordValid] = useState(false);
  const [confirmPasswordValid, setConfirmPasswordValid] = useState(false);
  const [pwdError, setPwdError] = useState(false);

  const oldPassRef = useRef();
  const newPassRef = useRef();
  const confirmNewPassRef = useRef();
  const emailId = userDetails?.data?.userDetails?.email;
  // console.log(localStorage.getItem());

  const updateDetailsHandler = async () => {
    try {
      if (
        newPassRef.current.value.length &&
        confirmNewPassRef.current.value.length
      ) {
        setEmptyFields(false);
      } else {
        setEmptyFields(true);
      }
      if (newPassRef.current.value === oldPassRef.current.value) {
        setNewPasswordValid(false);
        throw new Error("Old Password and New Password cannot be same!");
      } else {
        setNewPasswordValid(true);
        document.getElementById("newPassword").textContent = "";
      }
    } catch (err) {
      document.getElementById("newPassword").textContent = err.message;
    }
  };

  useEffect(() => {
    updatePasswords();
  }, [newPasswordValid]);

  const updatePasswords = async () => {
    const verifyOldPassUrl = `${process.env.REACT_APP_API_HOST}login/${userDetails.data.userDetails.userType}`;
    const updateUPassUrl = `${process.env.REACT_APP_API_HOST}set-password/${userDetails.data.userDetails.userType}`;
    if (newPasswordValid && confirmPasswordValid && !pwdError) {
      const checkOldPass = await axios.post(verifyOldPassUrl, {
        email: emailId,
        password: oldPassRef.current.value,
      });

      if (checkOldPass.data.success) {
        setCheckPass(true);
        const updatePassRes = await axios.post(updateUPassUrl, {
          logInStatus: true,
          id: userDetails.data.userDetails._id,
          newPassword: newPassRef.current.value,
        });
        console.log("update Status :", updatePassRes);

        if (updatePassRes.data.success) {
          Swal.fire("Success!", "Pasword Updated!", "success");
          setActive("view-account");
        }
      } else {
        setCheckPass(false);
      }
    }
  };
  const checkValidPassword = () => {
    try {
      if (!validPassword.test(newPassRef.current.value)) {
        setPwdError(true);
        throw new Error("Not a valid Password!");
      } else {
        setPwdError(false);
        document.getElementById("validPassword").textContent = "";
      }
    } catch (err) {
      document.getElementById("validPassword").textContent = err.message;
    }
  };

  const handlePasswordCheck = () => {
    try {
      if (newPassRef.current.value === confirmNewPassRef.current.value) {
        setConfirmPasswordValid(true);
        document.getElementById("confirmPassword").textContent = "";
      } else {
        setConfirmPasswordValid(false);
        throw new Error("Passwords doesn't match!");
      }
    } catch (err) {
      document.getElementById("confirmPassword").textContent = err.message;
    }
  };

  if (userDetails) {
    return (
      <header className="sm:mx-20 2xl:mx-[18.75rem]">
        <div className=" flex justify-between px-10 xl:px-0 lg:text-[22px]">
          <h2 className="font-[600]">
            Settings/
            <span className="font-[400] grey-text"> Accounts Page</span>
          </h2>
          <SignOut />
        </div>
        <div className="mt-[3rem] xl:mt-[5rem] flex flex-col xl:flex-row xl:justify-between gap-8 xl:gap-14 lg:text-[20px] xl:flex ">
          <ProfileSideBar activePage={"accounts"} setActive={setActive} />
          <div className="edit-details flex flex-col gap-[2rem] lg:text-[22px]  p-5 lg:p-10 2xl:p-[2.2rem] rounded-2xl xl:w-[80%] backdrop-blur-sm">
            <h2 className="font-[600]">Login Details</h2>
            <h5 className="mb-[2rem] text-[1rem] grey-text">
              Manage your email address mobile number and password
            </h5>
            <h4 className="">Mobile Number</h4>
            <input
              type="text"
              className=" grey-text pl-[1.5rem] py-[0.88rem] rounded-2xl"
              defaultValue={userDetails.data.userDetails.phone}
              disabled={true}
            />
            <h4 className="">Email ID</h4>
            <input
              type="text"
              className=" grey-text pl-[1.5rem] py-[0.88rem] rounded-2xl"
              defaultValue={emailId}
              disabled={true}
            />
            <h4 className={""}>Old Password</h4>
            <input
              type="password"
              className={
                " grey-text pl-[1.5rem] py-[0.88rem] rounded-2xl" +
                (!checkPass
                  ? " border border-red-500 outline outline-red-500 "
                  : "")
              }
              ref={oldPassRef}
            />
            <h4
              id="newPassword"
              className="text-red-700 font-bold bg-transparent text-xl"
            ></h4>
            <h4 className={""}>New Password</h4>
            <input
              type="password"
              className={
                " grey-text pl-[1.5rem] py-[0.88rem] rounded-2xl" +
                (emptyFields
                  ? " border border-red-500 outline outline-red-500 "
                  : "")
              }
              onChange={checkValidPassword}
              ref={newPassRef}
            />
            <h4
              id="validPassword"
              className="text-red-700 font-bold bg-transparent text-xl"
            ></h4>
            <h4 className="">Confirm Password</h4>
            <input
              type="password"
              className={
                " grey-text pl-[1.5rem] py-[0.88rem] rounded-2xl" +
                (emptyFields
                  ? " border border-red-500 outline outline-red-500 "
                  : "")
              }
              ref={confirmNewPassRef}
              onChange={handlePasswordCheck}
            />
            <h4
              id="confirmPassword"
              className="text-red-700 font-bold bg-transparent text-xl"
            ></h4>
            <button
              className="mt-[4rem] rounded-2xl text-white bg-[#219653] text-center py-4 xl:py-[1.5rem] xl:mx-[6rem]"
              onClick={updateDetailsHandler}
            >
              SUBMIT
            </button>
          </div>
        </div>
      </header>
    );
  } else {
    return (
      <div className="text-center  py-[30rem] md:py-[20rem]">
        <h1 className="text-5xl leading-[5rem]">
          <span className="text-red-700">Oops</span> Something's Wrong, <br />{" "}
          With Status Code : {userDetails.status}
        </h1>
        <Link
          to="/searchResult"
          className="my-10 block w-[15rem] border border-green-400 hover:text-white hover:bg-green-900 text-2xl px-5 py-2 mx-auto"
        >
          Take Me Back?
        </Link>
      </div>
    );
  }
}
