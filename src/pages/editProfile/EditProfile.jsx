import React, { useEffect } from "react";
import Header from "../../components/accountDetails/editProfile/Editprofile";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const EditProfile = () => {
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

export default EditProfile;
