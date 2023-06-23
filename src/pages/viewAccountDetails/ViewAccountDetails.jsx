import React, { useEffect, useState } from "react";
import "./style.scss";
import ViewAccountDetails from "../../components/accountDetails/viewAccountDetails/ViewAccountDetails";
import EditAccountDetails from "../../components/accountDetails/editAccountDetails/EditAccountDetails";
import ProfileSettings from "../../components/accountDetails/profileSettings/ProfileSettings";
import Editprofile from "../../components/accountDetails/editProfile/Editprofile";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const ViewAccDetails = ({ active, setActive }) => {
  const { FrontendUserData } = useSelector((state) => state.user);
  console.log(FrontendUserData);
  const navigate = useNavigate();
  useEffect(() => {
    if (!FrontendUserData) navigate("/");
  });

  return (
    <section className="account-details pt-[7rem] pb-[20rem] xl:pb-[10rem]">
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
        <Editprofile setActive={setActive} title="edit-profile" />
      )}
    </section>
  );
};

export default ViewAccDetails;
