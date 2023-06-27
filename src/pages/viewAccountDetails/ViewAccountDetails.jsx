import React, { useEffect, useState } from "react";
import "./style.scss";
import ViewAccountDetails from "../../components/accountDetails/viewAccountDetails/ViewAccountDetails";
import EditAccountDetails from "../../components/accountDetails/editAccountDetails/EditAccountDetails";
import ProfileSettings from "../../components/accountDetails/profileSettings/ProfileSettings";
import Editprofile from "../../components/accountDetails/editProfile/Editprofile";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  updateFrontendUserData,
  updateUserDetails,
} from "../../redux/slices/userSlice";

const ViewAccDetails = ({ active, setActive }) => {
  const dispatch = useDispatch();
  const { updatedUserData, FrontendUserData } = useSelector(
    (state) => state.user
  );
  useEffect(() => {
    if (updatedUserData) {
      dispatch(updateFrontendUserData(updatedUserData));
      // dispatch(updateUserDetails());
    }
  }, [updatedUserData]);
  // console.log(updatedUserData, FrontendUserData);
  const navigate = useNavigate();
  useEffect(() => {
    if (!FrontendUserData) navigate("/");
  }, []);

  return (
    <section className="account-details pt-[7rem] pb-[5rem]">
      {active === "view-account" && (
        <ViewAccountDetails
          setActive={setActive}
          title="view-account-details"
        />
      )}
      {active === "edit-account" && (
        <EditAccountDetails
          setActive={setActive}
          title="edit-account-details"
        />
      )}
      {active === "profile" && (
        <ProfileSettings setActive={setActive} title="profile-settings" />
      )}
      {active === "edit-profile" && (
        <Editprofile
          setActive={setActive}
          active={active}
          title="edit-profile"
        />
      )}
    </section>
  );
};

export default ViewAccDetails;
