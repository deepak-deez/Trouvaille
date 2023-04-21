import React from "react";
import Logo from "../../assets/images/logo.svg";
import "../landingPage/header.scss";

const Header = () => {
  return (
    <nav className="header">
      <img src={Logo} alt="logo" />
      <div className="title">
        <p classname="logoName">trouvaille.</p>
        <p className="subTitle">Front-facing website</p>
      </div>
    </nav>
  );
};

export default Header;
