import React, { useEffect, useState } from "react";
import store from "../../../redux/store";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./style.scss";
import profileImg from "../../../assets/images/accountDetails/profileSettings/profile-img.png";
import defaultProfileImg from "../../../assets/images/accountDetails/profileSettings/defaultProfileImage.png";
import editIcon from "../../../assets/images/accountDetails/profileSettings/edit.svg";
import axios from "axios";
import SignOut from "../../SignOut/SignOut";
import ProfileSideBar from "../profileSideBar/ProfileSideBar";

export default function ProfileSettings({ setActive }) {

  const { userDetails } = useSelector((state) => state.user);

  console.log("Profile:", userDetails);
  const dataBaseUrl = `${process.env.REACT_APP_API_HOST}database/Frontend-user/${userDetails.data.userDetails._id}`;
  const [responseData, setResponseData] = useState();

  const updateDataHandler = async () => {
    try {
      const getUpdatedData = await axios.get(dataBaseUrl);
      setResponseData(getUpdatedData);
    } catch (err) {
      return err;
    }
  };
  useEffect(() => {
    updateDataHandler();
  }, []);
  console.log(responseData);
  const profileImage = responseData?.data?.data[0]?.userDetails?.image;
  const userLcoation = responseData?.data?.data[0]?.userDetails?.place;
  const userName = responseData?.data?.data[0]?.userDetails?.name;
  const userDOB = responseData?.data?.data[0]?.userDetails?.DOB;
  const userGender = responseData?.data.data[0]?.userDetails?.gender;
  const userMaritalStatus =
    responseData?.data?.data[0]?.userDetails?.maritalStatus;
  const userJoiningYear = responseData?.data?.data[0]?.joiningYear;

  if (userDetails) {
    return (
      <header className=" sm:mx-20 2xl:mx-[18.75rem]">
        <div className="flex justify-between px-10 xl:px-0 lg:text-[22px]">
          <h2 className="font-[600]">
            Settings/<span className="font-[400] grey-text"> My profile</span>
          </h2>
          <SignOut />
        </div>
        <div className="flex flex-col sm:flex-row gap-[2rem] items-center xl:items-start mt-[1.5rem] sm:mt-[2rem] profile-section ">
          <div className="flex flex-col h-[256px] w-[225px] overflow-hidden">
            {console.log(responseData?.data.data[0].userDetails.image)}
            {profileImage && (
              <img
                className={
                  "profile-img" + (responseData ? " block " : " hidden ")
                }
                src={
                  responseData?.data.data[0].userDetails.image &&
                  responseData?.data.data[0].userDetails.image
                    ? responseData.data.data[0].userDetails.image
                    : profileImg
                }
                alt="profile-img"
              />
            )}
            <img
              src={defaultProfileImg}
              alt="defaultProfileImage"
              className={profileImage ? " hidden " : " block profile-img "}
            />
            <h4 className="text-center grey-text grey-text underline mt-[0.8rem]">
              User Dashboard
            </h4>
          </div>
          <div className="flex flex-col items-center sm:items-start gap-[1rem]">
            <h2 className="sm:text-[2.5rem] grey-text text-[1.5rem]">
              {userDetails.data.userDetails.email}
            </h2>
            <div className="flex gap-[1rem] items-center">
              <span className="lg:text-[1.6rem] grey-text">
                {userLcoation ? userLcoation : "Location"}
              </span>
              <i className="fa-solid fa-circle text-[0.8rem]"></i>
              <span className="lg:text-[1.6rem] grey-text">
                Joined in {userJoiningYear}
              </span>
            </div>
            <div className="flex gap-[1.3rem] items-center">
              <img src={editIcon} alt="edit-icon" />
              <p className="lg:text-[1.6rem] underline grey-text">
                <button
                  onClick={() => {
                    setActive("edit-profile");
                  }}
                >
                  Edit Profile
                </button>
              </p>
            </div>
          </div>
        </div>
        <div className="xl:mt-[5rem] mt-[2rem] flex flex-col xl:flex-row xl:justify-between gap-8 xl:gap-14 lg:text-[20px]">
          <ProfileSideBar activePage={"profile"} setActive={setActive} />
          <div className="profile-details flex flex-col lg:text-[22px]  p-5 lg:p-10 2xl:p-[2.2rem] rounded-2xl xl:w-[80%] backdrop-blur-sm">
            <h2 className="font-[600]">Profile</h2>
            <h5 className="mb-[2rem] text-[1rem]">
              Basic info, for a faster booking experience
            </h5>
            <h4 className="mb-[1.5rem] grey-text">Name</h4>
            <input
              className="mb-[2.6rem] grey-text"
              defaultValue={userName ? userName : ""}
              placeholder="Your Name"
              disabled={true}
            />
            <h4 className="mb-[1.5rem] grey-text">Date</h4>
            <input
              className="mb-[2.6rem] grey-text"
              defaultValue={userDOB ? userDOB : ""}
              placeholder="Your DOB"
              disabled={true}
            />
            <h4 className="mb-[1.5rem] grey-text">Gender</h4>
            <input
              className="mb-[2.6rem] grey-text"
              defaultValue={userGender ? userGender : ""}
              placeholder="Your Gender"
              disabled={true}
            />
            <h4 className="mb-[1.5rem] grey-text">Marital Status</h4>
            <input
              className="mb-[2.6rem] grey-text"
              defaultValue={userMaritalStatus ? userMaritalStatus : ""}
              placeholder="Your Martial Status"
              disabled={true}
            />
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
