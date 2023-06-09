import React, { useState } from "react";
import "./style.scss";
import ViewAccountDetails from "../../components/accountDetails/viewAccountDetails/ViewAccountDetails";
import EditAccountDetails from "../../components/accountDetails/editAccountDetails/EditAccountDetails";
import ProfileSettings from "../../components/accountDetails/profileSettings/ProfileSettings";
import Editprofile from "../../components/accountDetails/editProfile/Editprofile";

const ViewAccDetails = () => {
  const [active, setActive] = useState("view-account");

  return (
    <section className="account-details pt-[10rem] pb-[35rem] sm:pb-[20rem]">
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
