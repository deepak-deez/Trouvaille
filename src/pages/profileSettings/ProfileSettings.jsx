import React, { useEffect } from "react";
import Header from "../../components/accountDetails/profileSettings/ProfileSettings";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const ProfileSettings = () => {
  const { FrontendUserData } = useSelector((state) => state.user);
  const navigate = useNavigate();
  useEffect(() => {
    if (!FrontendUserData) navigate("/");
  });
  return (
    <section className="account-details pt-[10rem] pb-[5rem]">
      <Header />
    </section>
  );
};

export default ProfileSettings;
