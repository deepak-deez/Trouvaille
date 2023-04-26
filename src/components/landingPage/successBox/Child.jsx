import React from "react";
import { Link } from "react-router-dom";
import "./child.scss";
import successImg from "../../../assets/images/success/success.svg";

const Header = () => {
  return (
      <section className="success-section flex flex-col justify-center items-center">
          <div className="success-box flex flex-col justify-center items-center  lg:pb-[30px] pb-[15px] px-[20px] lg:px-[110px] bg-white">
              <img className="lg:mt-[-90px] mt-[-50px] max-w-[60%] lg:max-w-[80%]" src={successImg} alt="success-img" />
                <h2 className="lg:text-[60px] text-[35px]">Success!</h2>
                <p className="lg:mt-[38px]  text-center lg:text-[22px]">Your booking is is <br/> successfully reserved.</p>
                <Link className="lg:mt-[50px] mt-[20px] px-[45px] py-[20px] lg:py-[24px] text-center lg:text-[22px] back-button">BACK TO HOME</Link>
            </div>
      </section>
  );
};

export default Header;
