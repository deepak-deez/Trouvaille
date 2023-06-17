import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import "./style.scss";
import ProfileSideBar from "../profileSideBar/ProfileSideBar";
import SignOut from "../../SignOut/SignOut";

export default function ViewAccountDetails({ setActive }) {
  const { userDetails } = useSelector((state) => state.user);

  console.log(userDetails, "Sc", userDetails.success);
  let userData;
  if (userDetails.success) {
    console.log(userDetails);
    userData = {
      email: userDetails?.data?.userDetails?.email,
      phNumber: userDetails?.data?.userDetails?.phone,
      password: userDetails?.data?.userDetails?.password,
    };
  }
  console.log("userdetails:", userDetails, userData);

  if (userDetails.success) {
    // const userData = {
    //   email: userDetails?.data?.data.userDetails?.email,
    //   phNumber: userDetails?.data?.data.userDetails?.phone,
    //   password: userDetails?.data?.data.userDetails?.password,
    // };
    console.log("userdetails:", userDetails.data.userDetails, userData);

    return (
      <header className="sm:mx-20 2xl:mx-[18.75rem]">
        {console.log(userData)}
        <div className="flex justify-between px-10 xl:px-0 lg:text-[22px]">
          <h2 className="font-[600]">
            Settings/
            <span className="font-[400] grey-text"> Accounts Page</span>
          </h2>
          <SignOut />
        </div>
        <div className="mt-[3rem] xl:mt-[5rem] flex flex-col xl:flex-row xl:justify-between gap-8 xl:gap-14 lg:text-[20px]">
          <ProfileSideBar activePage={"accounts"} setActive={setActive} />
          <div className="login-details flex flex-col lg:text-[22px]  p-5 lg:p-10 2xl:p-[2.2rem] rounded-2xl xl:w-[80%] backdrop-blur-sm">
            <h2 className="font-[600]">Login Details</h2>
            <h5 className="mb-[2rem] grey-text text-[1rem]">
              Manage your email address mobile number and password
            </h5>
            <h4 className="mb-[1.5rem]">Mobile Number</h4>
            <input
              type="text"
              defaultValue={userData.phNumber}
              disabled={true}
            />
            <h4 className="mb-[1.5rem]">Email ID</h4>
            <input type="text" defaultValue={userData.email} disabled={true} />
            <h4 className="mb-[1.5rem]">Password</h4>
            <input
              type="password"
              defaultValue={userData.password.substring(0, 7)}
              disabled={true}
            />
            <button
              onClick={() => {
                setActive("edit-account");
              }}
              className="mt-[4rem] rounded-2xl text-white bg-[#219653] text-center py-4 xl:py-[1.5rem] xl:mx-[6rem]"
            >
              EDIT ACCOUNT DETAILS
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
          {/* With Message : {userDetails.data.data.message} */}
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
