import React, { useEffect } from "react";
import Header from "../../components/accountDetails/profileSettings/ProfileSettings";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const ProfileSettings = () => {
  const { userDetails} = useSelector((state) => state.user);
  const navigate = useNavigate()
  useEffect(()=>{
    if(!userDetails)
    navigate("/")
  })
  return (
    <section className="account-details pt-[10rem] pb-[35rem] sm:pb-[20rem]">
      <Header />
    </section>
  );
};

export default ProfileSettings;
