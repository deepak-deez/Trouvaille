import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import "./style.scss";
import { handleProfileImagetoUrl } from "./logic.js";
import profileImg from "../../../assets/images/accountDetails/profileSettings/profile-img.png";
import editIcon from "../../../assets/images/accountDetails/profileSettings/edit.svg";
import accountSettingsImgChange from "../../../assets/images/accountDetails/profileSettings/edit-img.svg";
import axios from "axios";

export default function EditProfile() {
  const [uploadImgBtnDisplay, setUploadImgBtnDisplay] = useState(false);
  const [profileImg, setProfileImg] = useState();
  const { userDetails } = useSelector((state) => state.logInUser);
  const nameRef = useRef();
  const DOBRef = useRef();
  const placeRef = useRef();
  const genderRef = useRef();
  const martialStatusRef = useRef();

  console.log(userDetails);

  const uploadImgHandler = (e) => {
    console.log(e.target.files);
    try {
      setProfileImg(URL.createObjectURL(e.target.files[0]));
      setUploadImgBtnDisplay(!uploadImgBtnDisplay);
    } catch (err) {
      return err;
    }
  };

  const updateDetailsHandler = async () => {
    const imgUrl = await handleProfileImagetoUrl(profileImg).then((res) => {
      return res;
    });

    console.log(profileImg);
    console.log(imgUrl);

    const userData = {
      image: "",
      name: nameRef.current.value,
      place: placeRef.current.value,
      DOB: DOBRef.current.value,
      gender: genderRef.current.value,
      martialStatus: martialStatusRef.current.value,
    };

    console.log(userData);

    const apiUrl = `${process.env.REACT_APP_apiHost}update/Frontend-user/${userDetails.data.userDetails._id}`;
    const dataBaseUrl = `${process.env.REACT_APP_apiHost}database/Frontend-user/${userDetails.data.userDetails._id}`;

    console.log(apiUrl);

    try {
      const response = await axios.post(apiUrl, userData);
      console.log(response);
    } catch (error) {
      console.log(error);
    }

    try {
      const getUpdatedRes = await axios.get(dataBaseUrl);
      console.log("Data : ", getUpdatedRes.data.data[0]);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <header className="sm:mx-20 2xl:mx-[18.75rem]">
      <div className="flex justify-between lg:text-[22px]">
        <h2 className="font-[600]">
          Settings/<span className="font-[400] grey-text"> My profile</span>
        </h2>
        <h2 className="underline font-[600]">Signout</h2>
      </div>
      <div className="flex flex-col sm:flex-row gap-[2rem] mt-[1.5rem] sm:mt-[2rem] profile-section">
        <div className="flex flex-col items-center">
          <div className="flex flex-col profile-img-container h-[256px] w-[225px] overflow-hidden">
            <div className="change-profile-img">
              <div
                className="user-profile-img w-10"
                style={{
                  backgroundImage: `url(${profileImg})`,
                }}
              ></div>
              <button
                className={
                  "underline text-white my-3 text-2xl " +
                  (uploadImgBtnDisplay && "hidden")
                }
                onClick={() => {
                  setUploadImgBtnDisplay(!uploadImgBtnDisplay);
                }}
              >
                Change
              </button>
              <input
                type="file"
                name="files"
                id="profileImg"
                className="w-full hidden"
                onChange={uploadImgHandler}
              />
              <label
                htmlFor="profileImg"
                className={
                  "bg-white bg-opacity-50 backdrop-blur-sm rounded-xl my-3 px-5 text-2xl cursor-pointer hover:bg-green-600 hover:bg-opacity-30 hover:text-gray-400 transition-all duration-200 " +
                  (uploadImgBtnDisplay ? "block" : "hidden")
                }
              >
                Select file
              </label>
            </div>
            <img className="profile-img" src={profileImg} alt="profile-img" />
          </div>
          <h4 className="text-center grey-text grey-text underline mt-[0.8rem]">
            User Dashboard
          </h4>
        </div>
        <div className="flex flex-col items-center sm:items-start gap-[1rem]">
          <input
            className="sm:text-[2.5rem] grey-text text-[1.5rem] bg-transparent"
            defaultValue={userDetails.data.userDetails.email}
          />
          <div className="flex gap-[1rem] items-center">
            <input
              className="lg:text-[1.6rem] grey-text bg-transparent p-2"
              placeholder="Your Location"
              ref={placeRef}
            />
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
              placeholder="Your Name"
              ref={nameRef}
            />
            <img src={editIcon} alt="edit-icon" />
          </div>
          <h4 className="mb-[1.5rem] grey-text">DOB</h4>
          <input
            className="mb-[3.1rem] grey-text py-[1rem] px-[1.2rem] rounded-2xl"
            type="date"
            placeholder="D O B"
            ref={DOBRef}
          />
          <h4 className="mb-[1.5rem] grey-text">Gender</h4>
          <div className="bg-white mb-[3.1rem] px-[1.2rem] rounded-2xl">
            <select
              className="bg-transparent w-[100%] py-[1rem] outline-none"
              name="gender"
              id="gender"
              ref={genderRef}
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
              ref={martialStatusRef}
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
            <button
              className="mt-[2rem] rounded-2xl text-white bg-[#219653] w-[100%] text-center py-4 xl:py-[1.5rem] "
              onClick={updateDetailsHandler}
            >
              SUBMIT
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
