import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import "./style.scss";

export default function EditAccountDetails() {
  const { userDetails } = useSelector((state) => state.logInUser);
  console.log(userDetails);
  if (userDetails.success) {
    return (
      <header className="sm:mx-20 2xl:mx-[18.75rem]">
        <div className="flex justify-between lg:text-[22px]">
          <h2 className="font-[600]">
            Settings/
            <span className="font-[400] grey-text"> Accounts Page</span>
          </h2>
          <h2 className="underline font-[600]">Signout</h2>
        </div>
        <div className="mt-[5rem] xl:flex xl:justify-between xl:gap-14 lg:text-[20px]">
          <ul className="hidden xl:flex flex-col gap-10">
            <li className="grey-text">
              <Link to="/profile">Profile</Link>
            </li>
            <li className="grey-text font-bold">
              <Link to="/accountDetails">Account Details</Link>
            </li>
            <li className="grey-text">
              <Link to="/booking">My Booking</Link>
            </li>
          </ul>
          <div className="edit-details flex flex-col lg:text-[22px]  p-5 lg:p-10 2xl:p-[2.2rem] rounded-2xl xl:w-[80%] backdrop-blur-sm">
            <h2 className="font-[600]">Login Details</h2>
            <h5 className="mb-[2rem] text-[1rem] grey-text">
              Manage your email address mobile number and password
            </h5>
            <h4 className="mb-[1.5rem]">Mobile Number</h4>
            <input
              type="text"
              className="mb-[2.6rem] grey-text pl-[1.5rem] py-[0.88rem] rounded-2xl"
              defaultValue={userDetails.data.userDetails.phone}
            />
            <h4 className="mb-[1.5rem]">Email ID</h4>
            <input
              type="text"
              className="mb-[3.1rem] grey-text pl-[1.5rem] py-[0.88rem] rounded-2xl"
              defaultValue={userDetails.data.userDetails.email}
            />
            <h4 className="mb-[1.5rem]">Password</h4>
            <input
              type="password"
              className="mb-[3.1rem] grey-text pl-[1.5rem] py-[0.88rem] rounded-2xl"
              defaultValue={userDetails.data.userDetails.password}
            />
            <h4 className="mb-[1.5rem]">Old Password</h4>
            <input
              type="text"
              className="mb-[3.1rem] grey-text pl-[1.5rem] py-[0.88rem] rounded-2xl"
            />
            <h4 className="mb-[1.5rem]">New Password</h4>
            <input
              type="text"
              className="mb-[3.1rem] grey-text pl-[1.5rem] py-[0.88rem] rounded-2xl"
            />
            <button className="mt-[4rem] rounded-2xl text-white bg-[#219653] text-center py-4 xl:py-[1.5rem] xl:mx-[6rem]">
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
