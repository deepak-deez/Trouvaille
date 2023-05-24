import React, { useRef, useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import "./style.scss";
import { handleProfileImagetoUrl } from "./logic.js";
import defaultProfileImage from "../../../assets/images/accountDetails/profileSettings/defaultProfileImage.png";
import editIcon from "../../../assets/images/accountDetails/profileSettings/edit.svg";
import accountSettingsImgChange from "../../../assets/images/accountDetails/profileSettings/edit-img.svg";
import axios from "axios";

export default function EditProfile() {
  const [responseData, setResponseData] = useState();
  const [userFetchedData, setUserFetchedData] = useState();
  const [uploadImgBtnDisplay, setUploadImgBtnDisplay] = useState(false);
  const [profileImg, setProfileImg] = useState();
  const [imageUrlState, setImageUrlState] = useState("");

  const { userDetails } = useSelector((state) => state.logInUser);
  console.log("User Id ", userDetails.data.userDetails._id);

  const navigate = useNavigate();
  const nameRef = useRef();
  const DOBRef = useRef();
  const placeRef = useRef();
  const genderRef = useRef();
  const maritalStatusRef = useRef();
  const dataBaseUrl = `${process.env.REACT_APP_API_HOST}database/Frontend-user/${userDetails.data.userDetails._id}`;

  const userPLace = responseData?.data.data[0].userDetails?.place;
  const userName = responseData?.data.data[0].userDetails?.name;
  const userDOB = responseData?.data.data[0].userDetails?.DOB;
  const userJoiningYear = responseData?.data.data[0]?.joiningYear;

  const updateDataHandler = async () => {
    try {
      const getUpdatedData = await axios.get(dataBaseUrl);
      setResponseData(getUpdatedData);
      console.log("dwc", getUpdatedData?.data.data[0].userDetails.image);
      setProfileImg(getUpdatedData?.data.data[0].userDetails.image.url);
    } catch (error) {
      setProfileImg(defaultProfileImage);
      console.log(error);
    }
  };

  const getUserData = async () => {
    const getUserDataRes = await axios.get(dataBaseUrl);
    setUserFetchedData(getUserDataRes);
    return getUserDataRes;
  };

  useEffect(() => {
    updateDataHandler();
    getUserData();
  }, []);

  console.log(
    "User  Feteched Data ",
    userFetchedData?.data.data[0].userDetails
  );

  const uploadImgHandler = (e) => {
    console.log(e.target.files);
    try {
      setImageUrlState(e.target.files[0]);
      setProfileImg(URL.createObjectURL(e.target.files[0]));
      setUploadImgBtnDisplay(!uploadImgBtnDisplay);
    } catch (err) {
      return err;
    }
  };

  const updateDetailsHandler = async () => {
    const imgUrl = await handleProfileImagetoUrl(imageUrlState).then((res) => {
      return res;
    });

    console.log(imageUrlState);
    console.log(imgUrl);

    const userData = {
      image: imgUrl ? imgUrl : responseData?.data.data[0].userDetails.image.url,
      name: nameRef.current.value,
      place: placeRef.current.value,
      DOB: DOBRef.current.value,
      gender: genderRef.current.value,
      maritalStatus: maritalStatusRef.current.value,
    };

    console.log(userData);

    const updateUrl = `${process.env.REACT_APP_API_HOST}update/Frontend-user/${userDetails.data.userDetails._id}`;

    console.log(updateUrl);

    try {
      const response = await axios.post(updateUrl, userData);
      if (response.data.success) {
        navigate("/profile");
      }
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  if (userDetails.success) {
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
              disabled={true}
            />
            <div className="flex gap-[1rem] items-center">
              <input
                className="lg:text-[1.6rem] grey-text bg-transparent p-2"
                placeholder="Your Location"
                defaultValue={userPLace ? userPLace : ""}
                ref={placeRef}
              />
              <img src={editIcon} alt="edit-icon" />
              <span className="lg:text-[1.6rem] grey-text">
                Joined in {userJoiningYear}
              </span>
            </div>
          </div>
        </div>
        <div className="mt-[5rem] xl:flex xl:justify-between xl:gap-14 lg:text-[20px]">
          <ul className="hidden xl:flex flex-col gap-10">
            <li className="grey-text font-bold">
              <Link to="/profile">Profile</Link>
            </li>
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
                defaultValue={userName ? userName : ""}
                ref={nameRef}
              />
              <img src={editIcon} alt="edit-icon" />
            </div>
            <h4 className="mb-[1.5rem] grey-text">DOB</h4>
            <input
              className="mb-[3.1rem] grey-text py-[1rem] px-[1.2rem] rounded-2xl"
              type="date"
              placeholder="D O B"
              defaultValue={userDOB ? userDOB : ""}
              ref={DOBRef}
            />
            <h4 className="mb-[1.5rem] grey-text">Gender</h4>
            <div className="bg-white mb-[3.1rem] px-[1.2rem] rounded-2xl">
              <select
                className="bg-transparent w-[100%] py-[1rem] outline-none"
                name="gender"
                id="gender"
                ref={genderRef}
                // defaultValue={userGender ? userGender : ""}
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
                ref={maritalStatusRef}
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
