import React, { useEffect } from "react";
import Header from "../../components/accountDetails/editAccountDetails/EditAccountDetails";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const EditAccDetails = () => {
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

export default EditAccDetails;
