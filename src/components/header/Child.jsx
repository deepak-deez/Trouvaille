import React from "react";
import "./child.scss";

export default function Child() {
  return (
    <header className="mt-[5rem] sm:mt-[8rem] lg:mt-[10rem] sm:mx-20 2xl:mx-[18.75rem]">
      <div className="flex justify-between lg:text-[22px]">
        <h2 className="font-[600]">
          Settings/<span className="font-[400]"> Accounts Page</span>
        </h2>
        <h2 className="underline font-[600]">Signout</h2>
      </div>
      <div className="mt-[5rem] xl:flex xl:justify-between xl:gap-14 lg:text-[20px]">
        <ul className="hidden xl:flex flex-col gap-10">
          <li>Profile</li>
          <li>Account Details</li>
          <li>My Booking</li>
        </ul>
        <div className="login-details flex flex-col lg:text-[22px]  p-5 lg:p-10 2xl:p-[2.2rem] rounded-2xl xl:w-[80%] backdrop-blur-sm">
          <h2 className="font-[600]">Login Details</h2>
          <h5 className="mb-[2rem] text-[1rem]">
            Manage your email address mobile number and password
          </h5>
          <h4 className="mb-[1.5rem]">Mobile Number</h4>
          <p className="mb-[2.6rem]">+ 112 6578 8978</p>
          <h4 className="mb-[1.5rem]">Email ID</h4>
          <p className="mb-[3.1rem]">suresh@sample.com</p>
          <h4 className="mb-[1.5rem]">Password</h4>
          <p>********</p>
          <button className="mt-[4rem] rounded-2xl text-white bg-[#219653] text-center py-4 xl:py-[1.5rem] xl:mx-[6rem]">
            EDIT ACCOUNT DETAIL
          </button>
        </div>
      </div>
    </header>
  );
}
