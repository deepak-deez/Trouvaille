import React from "react";
import "./child.scss";
import { Outlet, Link } from "react-router-dom";
import eye from "../../../assets/images/loginForm/eye.svg"

const Header = () => {
  return (
    <section className="flex flex-col login-form justify-center items-center my-auto">
      <p className="md:text-[34px]">Signin</p>
      <h2 className="md:text-[64px] text-center mt-[10px] lg:mt-[30px] text-[50px]">Welcome to Trouvaille</h2>
      <div className="flex flex-col lg:w-[975px] w-[90%] md:px-[30px] md:py-[30px] mt-[15px] login-details px-[25px] py-[15px] lg:py-[67px] lg:px-[97px] justify-center">
            <input
              className=" text-[20px] input-fields lg:px-[39px] px-[15px] py-[20px] lg:py-[32px] mt-[9px] w-[100%]"
              type="text"
              placeholder="Enter Email ID"
            />
          <div className=" input-fields lg:px-[39px]  px-[15px]  lg:mt-[60px] mt-[30px] flex flex-row items-center justify-between">
            <input
              className=" text-[20px] lg:py-[32px] py-[20px] w-[100%] bg-transparent"
              type="text"
              placeholder="Password"
            />
            <button type="button">
              <img className="input-icon" src={eye} alt="view-icon" />
            </button>
          </div>
          <div className="flex flex-row mt-[20px] lg:mt-[26px] text-[14px] gap-[11px]">
            <input type="checkbox" name="remember-me" value="yes" />
            <p className="text-[20px] grey-text">Remember Me</p>
          </div>
          <button className="lg:mt-[27px] mt-[20px] px-[15px] py-[20px] lg:py-[24px] text-center continue-button">
            CONTINUE
          </button>
          <div className="flex justify-between">
            <Link className="text-center grey-text mt-[10px] text-[20px] lg:mt-[30px]" to="/setPassword">
              Forget Password
            </Link>
            <Link className="text-center lg:text[25px text-[20px] grey-text mt-[10px] lg:mt-[30px]" to="/signup">
              Create Account
            </Link>
          </div>
      </div>
    </section>
  );
};

export default Header;
