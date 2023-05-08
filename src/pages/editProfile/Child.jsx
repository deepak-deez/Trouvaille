import React from "react";
import "./child.scss";
import Navbar from "../../components/accountDetails/navbar/Child";
import Footer from "../../components/accountDetails/footer/Child";
import Header from "../../components/accountDetails/editProfile/Child";

const editAccDetails = () => {
  return (
    <section className="account-details">
      <Navbar />
      <Header />
      <Footer />
    </section>
  );
};

export default editAccDetails;
