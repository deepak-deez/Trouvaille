import React, { useEffect } from "react";
import Header from "../../components/accountDetails/editAccountDetails/EditAccountDetails";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Footer from "../../components/footer/Footer";

const EditAccDetails = () => {
  const { FrontendUserData } = useSelector((state) => state.user);
  const navigate = useNavigate();
  useEffect(() => {
    if (!FrontendUserData) navigate("/");
  });
  return (
    <section className="account-details pt-[10rem]">
      <Header />

      <Footer />
    </section>
  );
};

export default EditAccDetails;
