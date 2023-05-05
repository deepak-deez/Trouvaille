import React from "react";
<<<<<<< HEAD:src/components/bookingForm/navBar/Child.jsx
import logo from "../../../assets/images/bookingForm/navBar/logo.svg";
=======
import logo from "../../../assets/images/landingPage/navBar/logo.svg";
>>>>>>> TROUV-4-landing-page:src/components/landingPage/navBar/Child.jsx
import "./child.scss";

const Header = () => {
  return (
    <nav className="flex flex-row lg:px-[76px] px-[50px] py-[10px] lg:py-[40px] gap-[9px]">
      <img src={logo} alt="logo" />
      <div className="flex flex-col">
        <h4 className="text-[30.68px] trouvaille-heading">trouvaille</h4>
        <p className="text-[8.74px] tracking-[3px] trouvaille-text mt-[-8px]">
          Front-facing Website
        </p>
      </div>
    </nav>
  );
};

export default Header;
