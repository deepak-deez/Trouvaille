import React from "react";
import "./style.scss";
import NavBar from "../../components/bookingForm/navBar/Navbar";
import Details from "../../components/bookingForm/details/Details";
import Footer from "../../components/bookingForm/footer/Footer";
const signin = () => {
  return (
    <header className="details-page">
      <NavBar />
      <Details />
      <Footer />
    </header>
  );
};

export default signin;
