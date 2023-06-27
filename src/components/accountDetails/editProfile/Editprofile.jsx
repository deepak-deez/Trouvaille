import React, { useRef, useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import "./style.scss";
// import { handleProfileImagetoUrl } from "./logic.js";
import defaultProfileImage from "../../../assets/images/accountDetails/profileSettings/defaultProfileImage.png";
import editIcon from "../../../assets/images/accountDetails/profileSettings/edit.svg";
// import accountSettingsImgChange from "../../../assets/images/accountDetails/profileSettings/edit-img.svg";
// import axios from "axios";
import ProfileSideBar from "../profileSideBar/ProfileSideBar";
// import { updateUserDetails } from "../../../redux/slices/userSlice";
import { updateUser, updateUserDetails } from "../../../redux/slices/userSlice";
import SignOut from "../../SignOut/SignOut";
import CountrySelector from "./CountrySelector";
import LoadingScreen from "../../loading/loadingScreen";
import SweetAlert from "../../alert/sweetAlert";

export default function EditProfile({ setActive, active }) {
  const options = {
    genders: ["Male", "Female", "Others"],
    maritalStatus: ["Single", "Married", "Divorced", "In a Relationship"],
  };
  // const [responseData, setResponseData] = useState();
  // const [userFetchedData, setUserFetchedData] = useState();
  const [uploadImgBtnDisplay, setUploadImgBtnDisplay] = useState(false);
  const [profileImg, setProfileImg] = useState();
  const [imageUrlState, setImageUrlState] = useState("");
  const dispatch = useDispatch();

  const { FrontendUserData, updatedUserData, error, loading } = useSelector(
    (state) => state.user
  );

  const navigate = useNavigate();
  const nameRef = useRef("");
  const DOBRef = useRef("");
  const genderRef = useRef("");
  const maritalStatusRef = useRef("");
  // const dataBaseUrl = `${process.env.REACT_APP_API_HOST}database/${updatedUserData.data.userDetails.userType}/${updatedUserData.data.userDetails._id}`;

  const userPLace = FrontendUserData?.data?.userDetails?.userDetails?.place;
  const userName = FrontendUserData?.data?.userDetails?.userDetails?.name;
  const userDOB = FrontendUserData?.data?.userDetails?.userDetails?.DOB;
  const userJoiningYear = FrontendUserData?.data?.userDetails?.joiningYear;
  const userGender = FrontendUserData?.data?.userDetails?.userDetails?.gender;
  const userMarried =
    FrontendUserData?.data?.userDetails?.userDetails?.maritalStatus;
  const [destination, setDestination] = useState();
  // const updateDataHandler = async () => {
  //   console.log(
  //     "Before edit : ",
  //     updatedUserData.data.userDetails.userDetails.image
  //   );

  //   try {
  //     // const getUpdatedData = await axios.get(dataBaseUrl);

  //     // setResponseData(updatedUserData);
  //     setProfileImg(updatedUserData?.data?.userDetails?.userDetails?.image);
  //     setImageUrlState(updatedUserData?.data?.userDetails?.userDetails?.image);
  //   } catch (error) {
  //     setProfileImg(defaultProfileImage);
  //   }
  // };

  // const getUserData = async () => {
  //   // const getUserDataRes = await axios.get(dataBaseUrl);
  //   setUserFetchedData(getUserDataRes);
  //   return getUserDataRes;
  // };

  useEffect(() => {
    const img = FrontendUserData?.data?.userDetails?.userDetails?.image
      ? FrontendUserData?.data?.userDetails?.userDetails?.image
      : defaultProfileImage;
    setProfileImg(img);
    setImageUrlState(img);
    // updateDataHandler();
    // getUserData();
  }, []);
  // useEffect(() => {
  //   console.log(updatedUserData);
  //   if (updatedUserData) dispatch(updateUserDetails(updatedUserData));
  //   console.log(
  //     "After dispatch : ",
  //     updatedUserData,
  //     "FrontendUserData",
  //     FrontendUserData
  //   );
  // }, [updatedUserData]);

  const uploadImgHandler = (e) => {
    try {
      console.log(e.target.files[0]);
      // setProfileImg(e.target.files[0]);
      setImageUrlState(e.target.files[0]);
      setProfileImg(URL.createObjectURL(e.target.files[0]));
      setUploadImgBtnDisplay(!uploadImgBtnDisplay);
    } catch (err) {
      return err;
    }
  };

  const updateDetailsHandler = async () => {
    const imgUrl = imageUrlState;
    console.log(nameRef.current.value);

    const formData = new FormData();

    formData.append("image", imgUrl);
    formData.append("name", nameRef.current.value);
    formData.append("place", destination);
    formData.append("DOB", DOBRef.current.value);
    formData.append("gender", genderRef.current.value);
    formData.append("maritalStatus", maritalStatusRef.current.value);
    let arr = [];
    console.log(
      "formData",
      formData.forEach((value, key) => {
        arr.push(value);
        console.log(key, " : ", value);
      })
    );

    // const userData = {
    //   image: imgUrl ? imgUrl : responseData?.data.data[0].userDetails.image.url,
    //   name: nameRef.current.value,
    //   place: placeRef.current.value,
    //   DOB: DOBRef.current.value,
    //   gender: genderRef.current.value,
    //   maritalStatus: maritalStatusRef.current.value,
    // };

    // console.log(userData);

    // const updateUrl = `${process.env.REACT_APP_API_HOST}update/Frontend-user/${updatedUserData.data.userDetails._id}`;

    try {
      if (nameRef.current.value.length) {
        document.getElementById("nameField").textContent = "";
        dispatch(
          updateUser({
            type: FrontendUserData?.data?.userDetails?.userType,
            id: FrontendUserData?.data?.userDetails?._id,
            formdata: formData,
          })
        );
        // dispatch(updateUserDetails(updatedUserData));
        // console.log(
        //   "After dispatch : ",
        //   updatedUserData,
        //   "FrontendUserData",
        //   FrontendUserData
        // );
        // setActive("profile");

        // const response = await axios.post(updateUrl, formData, {
        //   headers: {
        //     "content-type": "multipart/form-data",
        //   },
        // });
      } else {
        throw new Error("Name is required!");
      }
    } catch (error) {
      document.getElementById("nameField").textContent = error.message;
    }
  };
  if (updatedUserData?.success) {
    console.log(updatedUserData);
    SweetAlert("success", updatedUserData.message);
    // dispatch(updateUserDetails());
    //   console.log(
    //     "After dispatch : ",
    //     updatedUserData,
    //     "FrontendUserData",
    //     FrontendUserData
    //   );
    // updateDataHandler({ userDetails: response.data });
    setActive("profile");
    // dispatch(updateUserDetails());
  }
  if (error) {
    SweetAlert("error", error);
  }
  if (FrontendUserData?.success) {
    return (
      <>
        {loading && <LoadingScreen />}
        <header className="sm:mx-20 2xl:mx-[18.75rem]">
          <div className="flex justify-between px-10 xl:px-0 lg:text-[22px]">
            <div className="flex">
              <h2
                className="font-[600]"
                onClick={() => {
                  setActive("view-account");
                }}
              >
                Settings/
              </h2>
              <span className="font-[400] grey-text"> My profile</span>
            </div>
            <SignOut />
          </div>
          <div className="flex flex-col sm:flex-row gap-[2rem] mt-[1.5rem] sm:mt-[2rem] profile-section">
            <div className="flex flex-col items-center">
              <div className="flex flex-col profile-img-container h-[250px] w-[150px] overflow-hidden">
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
                <img
                  className="profile-img"
                  src={profileImg}
                  alt="profile-img"
                />
              </div>
              <h4 className="text-center grey-text grey-text underline mt-[0.8rem]">
                User Dashboard
              </h4>
            </div>
            <div className="flex flex-col items-center sm:items-start gap-[1rem]">
              <input
                className="sm:text-[2.5rem] grey-text text-[1.5rem] bg-transparent"
                defaultValue={updatedUserData?.data?.userDetails?.email}
                disabled={true}
              />
              <div className="flex gap-[1rem] w-[100%] items-center">
                {/* <input
                  className="lg:text-[1.6rem] grey-text bg-transparent p-2"
                  placeholder="Your Location"
                  defaultValue={userPLace ? userPLace : ""}
                  ref={placeRef}
                  disabled
                /> */}
                <CountrySelector
                  selectedValue={userPLace ? userPLace : ""}
                  setDestination={setDestination}
                  // placeRef={placeRef}
                />
                <img src={editIcon} alt="edit-icon" />
                <span className="lg:text-[1.6rem] grey-text">
                  Joined in {userJoiningYear ? userJoiningYear : "2023"}
                </span>
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
              <div className="flex flex-co relative">
                <div className="flex mb-[2.6rem] w-full rounded-2xl px-[1.2rem] bg-white">
                  <input
                    className=" bg-transparent outline-none w-[100%] grey-text py-[1rem] "
                    type="text"
                    placeholder="Your Name"
                    defaultValue={userName ? userName : ""}
                    ref={nameRef}
                  />
                  <img src={editIcon} alt="edit-icon" />
                </div>
                <h4
                  id="nameField"
                  className="text-red-700 font-bold absolute mt-[3.5rem] bg-transparent text-md"
                ></h4>
              </div>
              <h4 className="mb-[1.5rem] grey-text">DOB</h4>
              <input
                className="mb-[3.1rem] outline-none grey-text py-[1rem] px-[1.2rem] rounded-2xl"
                type="date"
                placeholder="D O B"
                defaultValue={userDOB ? userDOB : ""}
                ref={DOBRef}
              />
              <h4 className="mb-[1.5rem] grey-text">Gender</h4>
              <div className="bg-white mb-[3.1rem] px-[1.2rem] rounded-2xl">
                <select
                  className="bg-transparent grey-text w-[100%] py-[1rem] outline-none"
                  name="gender"
                  id="gender"
                  ref={genderRef}
                >
                  {options.genders.map((data, index) => {
                    return (
                      <option
                        key={index}
                        selected={userGender === data ? "selected" : ""}
                      >
                        {data}
                      </option>
                    );
                  })}
                </select>
              </div>
              <h4 className="mb-[1.5rem] grey-text">Marital Status</h4>
              <div className="bg-white mb-[3.1rem] px-[1.2rem] rounded-2xl">
                <select
                  className="bg-transparent grey-text w-[100%] py-[1rem] outline-none"
                  name="Marital Status"
                  id="maritalStatus"
                  ref={maritalStatusRef}
                >
                  {options.maritalStatus.map((data, index) => {
                    return (
                      <option
                        key={index}
                        selected={userMarried === data ? "selected" : ""}
                      >
                        {data}
                      </option>
                    );
                  })}
                </select>
              </div>
              <div className="flex gap-[1.2rem]">
                <button
                  className="mt-[2rem] rounded-2xl text-white bg-[#555B58] w-[100%] text-center py-4 xl:py-[1.5rem] "
                  onClick={() => {
                    setActive("profile");
                  }}
                >
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
      </>
    );
  } else {
    return (
      <div className="text-center  py-[30rem] md:py-[20rem]">
        <h1 className="text-5xl leading-[5rem]">
          <span className="text-red-700">Oops</span> Something's Wrong, <br />{" "}
          With Status Code : {FrontendUserData.status}
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
