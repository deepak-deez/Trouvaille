import React from "react";
import "./child.scss";
import NavBar from "../../components/bookingForm/navBar/Child.jsx";
import Details from "../../components/bookingForm/details/Child.jsx";
import Footer from "../../components/bookingForm/footer/Child.jsx";
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
