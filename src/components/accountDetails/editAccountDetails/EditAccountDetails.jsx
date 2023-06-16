import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import "./style.scss";
import axios from "axios";
import Swal from "sweetalert2";
import ProfileSideBar from "../profileSideBar/ProfileSideBar";
import SignOut from "../../SignOut/SignOut";

export default function EditAccountDetails({ setActive }) {
  const { userDetails } = useSelector((state) => state.user);
  const [checkPass, setCheckPass] = useState(true);
  const [emptyFields, setEmptyFields] = useState();
  const oldPassRef = useRef();
  const newPassRef = useRef();
  const confirmNewPassRef = useRef();
  const emailId = userDetails.data.data.userDetails.email;

  const updateDetailsHandler = async () => {
    const verifyOldPassUrl = `${process.env.REACT_APP_API_HOST}login/Frontend-user`;
    const updateUPassUrl = `${process.env.REACT_APP_API_HOST}set-password/Frontend-user`;
    const checkOldPass = await axios.post(verifyOldPassUrl, {
      email: emailId,
      password: oldPassRef.current.value,
    });

    if (checkOldPass.data.success) {
      setCheckPass(true);
      if (
        newPassRef.current.value.length &&
        confirmNewPassRef.current.value.length &&
        newPassRef.current.value === confirmNewPassRef.current.value
      ) {
        setEmptyFields(false);

        const updatePassRes = await axios.post(updateUPassUrl, {
          logInStatus: true,
          id: localStorage.getItem("id"),
          newPassword: newPassRef.current.value,
        });

        if (updatePassRes.data.success) {
          Swal.fire("Success!", "Pasword Updated!", "success");
        }
      } else {
        setEmptyFields(true);
      }
    } else {
      setCheckPass(false);
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
          <div className="edit-details flex flex-col lg:text-[22px]  p-5 lg:p-10 2xl:p-[2.2rem] rounded-2xl xl:w-[80%] backdrop-blur-sm">
            <h2 className="font-[600]">Login Details</h2>
            <h5 className="mb-[2rem] text-[1rem] grey-text">
              Manage your email address mobile number and password
            </h5>
            <h4 className="mb-[1.5rem]">Mobile Number</h4>
            <input
              type="text"
              className="mb-[2.6rem] grey-text pl-[1.5rem] py-[0.88rem] rounded-2xl"
              defaultValue={userDetails.data.data.userDetails.phone}
              disabled={true}
            />
            <h4 className="mb-[1.5rem]">Email ID</h4>
            <input
              type="text"
              className="mb-[3.1rem] grey-text pl-[1.5rem] py-[0.88rem] rounded-2xl"
              defaultValue={emailId}
              disabled={true}
            />
            <h4 className={"mb-[1.5rem]"}>Old Password</h4>
            <input
              type="password"
              className={
                "mb-[3.1rem] grey-text pl-[1.5rem] py-[0.88rem] rounded-2xl" +
                (!checkPass
                  ? " border border-red-500 outline outline-red-500 "
                  : "")
              }
              ref={oldPassRef}
            />
            <h4 className={"mb-[1.5rem]"}>New Password</h4>
            <input
              type="text"
              className={
                "mb-[3.1rem] grey-text pl-[1.5rem] py-[0.88rem] rounded-2xl" +
                (emptyFields
                  ? " border border-red-500 outline outline-red-500 "
                  : "")
              }
              ref={newPassRef}
            />
            <h4 className="mb-[1.5rem]">Confirm Password</h4>
            <input
              type="text"
              className={
                "mb-[3.1rem] grey-text pl-[1.5rem] py-[0.88rem] rounded-2xl" +
                (emptyFields
                  ? " border border-red-500 outline outline-red-500 "
                  : "")
              }
              ref={confirmNewPassRef}
            />
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
