import React from "react";
import "./child.scss";
import Navbar from "../../components/accountDetails/navbar/Child";
import Footer from "../../components/accountDetails/footer/Child";
import Header from "../../components/accountDetails/viewAccountDetails/Child";

const viewAccDetails = () => {
  return (
    <>
      <Navbar />
      <Header />
      <Footer />
    </>
  );
};

export default viewAccDetails;
