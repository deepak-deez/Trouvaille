import React from "react";
import "./style.scss";
import Navbar from "../../components/accountDetails/navbar/Navbar";
import Footer from "../../components/accountDetails/footer/Footer";
import Header from "../../components/accountDetails/viewAccountDetails/ViewAccountDetails";

const viewAccDetails = () => {
  return (
    <section className="account-details">
      <Navbar />
      <Header />
      <Footer />
    </section>
  );
};

export default viewAccDetails;
