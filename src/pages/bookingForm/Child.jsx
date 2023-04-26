import React from "react";
import "./child.scss";
import NavBar from "../../components/landingPage/navBar/Child.jsx";
import Details from "../../components/landingPage/details/Child.jsx";
import Footer from "../../components/landingPage/footer/Child.jsx";
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
