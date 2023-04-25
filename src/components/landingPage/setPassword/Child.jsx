import React from "react";
import "./child.scss";
import eye from "../../../assets/images/loginForm/eye.svg"

const Header = () => {
  return (
    <section className="flex flex-col set-password justify-center items-center">
      <h2 className="md:text-[64px] text-center mt-[10px] lg:mt-[30px] text-[50px]">Set profile password</h2>
      <div className="flex flex-col lg:w-[975px] w-[90%] md:px-[30px] md:py-[30px] mt-[15px] login-details px-[25px] py-[15px] lg:py-[67px] lg:px-[97px] justify-center">
          <div className=" input-fields lg:px-[39px] px-[15px] py-[20px] lg:py-[32px] mt-[9px] ">
            <input
              className="bg-transparent"
              type="text"
              placeholder="Enter Your Email Address"
            />
          </div>
          <button className="lg:mt-[27px] mt-[20px] px-[15px] py-[20px] lg:py-[24px] text-center send-password-button">
            SEND PASSWORD
          </button>
      </div>
    </section>
  );
};

export default Header;
