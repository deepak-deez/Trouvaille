import React from "react";
import "./child.scss";

const Header = () => {
  return (
    <header className="flex flex-col reset-password justify-center items-center mt-[100px] my-auto">
      <h2 className="md:text-[64px] text-center mt-[10px] lg:mt-[30px] text-[50px]">
        Reset your password
      </h2>
      <div className="flex flex-col lg:w-[975px] w-[90%] md:px-[30px] md:py-[30px] mt-[15px] login-details px-[25px] py-[15px] lg:py-[67px] lg:px-[97px] justify-center">
        <input
          className=" input-fields text-[20px] lg:px-[39px] px-[15px] py-[15px] lg:py-[25px] mt-[9px] "
          type="text"
          placeholder="New Password"
        />
        <input
          className=" input-fields text-[20px] lg:px-[39px] px-[15px] py-[15px] lg:py-[25px] mt-[25px]"
          type="text"
          placeholder="Confirm Password"
        />
        <button className="lg:mt-[27px] mt-[20px] px-[15px] py-[20px] lg:py-[24px] text-center save-button">
          SAVE
        </button>
      </div>
    </header>
  );
};

export default Header;
