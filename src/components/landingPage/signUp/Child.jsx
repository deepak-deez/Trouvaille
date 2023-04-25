import React from "react";
import "./child.scss";
import { Outlet, Link } from "react-router-dom";
import eye from "../../../assets/images/loginForm/eye.svg"

const Header = () => {
  return (
    <section className="flex flex-col signup-form justify-center items-center">
      <p className="md:text-[34px]">Sign up</p>
      <h2 className="md:text-[64px] text-center mt-[10px] lg:mt-[30px] text-[50px]">Welcome to Trouvaille</h2>
      <div className="flex flex-col lg:w-[975px] w-[90%] md:px-[30px] md:py-[30px] mt-[15px] signup-details px-[25px] py-[15px] lg:py-[67px] lg:px-[97px] justify-center">
          <div className=" input-fields lg:px-[39px] px-[15px] py-[20px] lg:py-[25px] mt-[9px] ">
            <input
              className="bg-transparent"
              type="text"
              placeholder="Email ID"
            />
          </div>
          <div className=" input-fields lg:px-[39px] px-[15px] py-[20px] lg:py-[25px] lg:mt-[60px] mt-[30px] ">
            <input
              className="bg-transparent"
              type="text"
              placeholder="Phone Number"
            />
          </div>
          <div className=" input-fields lg:px-[39px] lg:py-[25px] px-[15px] py-[20px] lg:mt-[60px] mt-[30px] flex flex-row items-center justify-between">
            <input
              className="bg-transparent"
              type="text"
              placeholder="Password"
            />
            <button type="button">
              <img className="input-icon" src={eye} alt="view-icon" />
            </button>
          </div>
          <div className=" input-fields lg:px-[39px] lg:py-[25px] px-[15px] py-[20px] lg:mt-[60px] mt-[30px] flex flex-row items-center justify-between">
            <input
              className="bg-transparent"
              type="text"
              placeholder="Confirm Password"
            />
            <button type="button">
              <img className="input-icon" src={eye} alt="view-icon" />
            </button>
          </div>
          <button className="lg:mt-[60px] mt-[20px] px-[15px] py-[20px] lg:py-[26px] text-center continue-button">
            CONTINUE
          </button>
      </div>
    </section>
  );
};

export default Header;
