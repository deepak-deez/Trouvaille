import React from "react";
import Logo from "../../assets/images/logo.png";
// import Background from "../../assets/images/camelsBackground.png";

const Login = () => {
  return (
    <div>
      <section className="header">
        <img src={Logo} alt="logo" />
        <div className="title">
          <p classname="logoName">trouvaille.</p>
          <p className="subTitle">Front-facing website</p>
        </div>
      </section>
    </div>
  );
};

export default Login;
