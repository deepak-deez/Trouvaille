import React, { useEffect } from "react";
import Header from "../../components/accountDetails/editProfile/Editprofile";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const EditProfile = () => {
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

export default EditProfile;
