import React from "react";
import { Link } from "react-router-dom";
import "./child.scss";
import profileImg from "../../../assets/images/accountDetails/profileSettings/profile-img.png";
import editIcon from "../../../assets/images/accountDetails/profileSettings/edit.svg";
import accountSettingsImgChange from "../../../assets/images/accountDetails/profileSettings/edit-img.svg";

export default function Child() {
  return (
    <header className="mt-[5rem] sm:mt-[8rem] lg:mt-[10rem] sm:mx-20 2xl:mx-[18.75rem]">
      <div className="flex justify-between lg:text-[22px]">
        <h2 className="font-[600]">
          Settings/<span className="font-[400] grey-text"> My profile</span>
        </h2>
        <h2 className="underline font-[600]">Signout</h2>
      </div>
      <div className="flex flex-col sm:flex-row gap-[2rem] mt-[1.5rem] sm:mt-[2rem] profile-section">
        <div className="flex flex-col items-center">
          <div className="flex flex-col profile-img-container">
            <div className="change-profile-img">
              <img src={accountSettingsImgChange} alt="change-profile-image" />
              <p className="underline text-white">Change</p>
            </div>
            <img className="profile-img" src={profileImg} alt="profile-img" />
          </div>
          <h4 className="text-center grey-text grey-text underline mt-[0.8rem]">
            User Dashboard
          </h4>
        </div>
        <div className="flex flex-col items-center sm:items-start gap-[1rem]">
          <h2 className="sm:text-[2.5rem] grey-text text-[1.5rem]">
            Raja Kumari
          </h2>
          <div className="flex gap-[1rem] items-center">
            <span className="lg:text-[1.6rem] grey-text">Paris, Frace</span>
            <img src={editIcon} alt="edit-icon" />
            <span className="lg:text-[1.6rem] grey-text">Joined in 2020</span>
          </div>
        </div>
      </div>
      <div className="mt-[5rem] xl:flex xl:justify-between xl:gap-14 lg:text-[20px]">
        <ul className="hidden xl:flex flex-col gap-10">
          <li className="grey-text font-bold">Profile</li>
          <li className="grey-text">
            <Link to="/accountDetails">Account Details</Link>
          </li>
          <li className="grey-text">
            <Link to="/booking">My Booking</Link>
          </li>
        </ul>
        <div className="profile-details flex flex-col lg:text-[22px]  p-5 lg:p-10 2xl:p-[2.2rem] rounded-2xl xl:w-[80%] backdrop-blur-sm">
          <h2 className="font-[600]">Profile</h2>
          <h5 className="mb-[2rem] text-[1rem]">
            Basic info, for a faster booking experience
          </h5>
          <h4 className="mb-[1.5rem] grey-text">Name</h4>
          <div className="flex mb-[2.6rem] rounded-2xl px-[1.2rem] bg-white">
            <input
              className=" bg-transparent w-[100%] grey-text py-[1rem] "
              type="text"
              value={"Suresh Ramesh"}
            />
            <img src={editIcon} alt="edit-icon" />
          </div>
          <h4 className="mb-[1.5rem] grey-text">DOB</h4>
          <input
            className="mb-[3.1rem] grey-text py-[1rem] px-[1.2rem] rounded-2xl"
            type="date"
            value={"02/11/1972"}
          />
          <h4 className="mb-[1.5rem] grey-text">Gender</h4>
          <div className="bg-white mb-[3.1rem] px-[1.2rem] rounded-2xl">
            <select
              className="bg-transparent w-[100%] py-[1rem] outline-none"
              name="gender"
              id="gender"
            >
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Others">Others</option>
            </select>
          </div>
          <h4 className="mb-[1.5rem] grey-text">Marital Status</h4>
          <div className="bg-white mb-[3.1rem] px-[1.2rem] rounded-2xl">
            <select
              className="bg-transparent w-[100%] py-[1rem] outline-none"
              name="Marital Status"
              id="maritalStatus"
            >
              <option value="Single">Single</option>
              <option value="Married">Married</option>
              <option value="Divorced">Divorced</option>
              <option value="Relationship">In a Relationship</option>
            </select>
          </div>
          <div className="flex gap-[1.2rem]">
            <button className="mt-[2rem] rounded-2xl text-white bg-[#555B58] w-[100%] text-center py-4 xl:py-[1.5rem] ">
              CANCEL
            </button>
            <button className="mt-[2rem] rounded-2xl text-white bg-[#219653] w-[100%] text-center py-4 xl:py-[1.5rem] ">
              SUBMIT
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
