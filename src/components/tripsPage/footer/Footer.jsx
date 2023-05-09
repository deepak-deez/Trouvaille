import "./style.scss";
import React from "react";
import logo from "../../../assets/images/searchResult/header/logo.svg";
import facebookIcon from "../../../assets/images/searchResult/footer/faceboox-icon.svg";
import twitterIcon from "../../../assets/images/searchResult/footer/twitter-icon.svg";
import instagramIcon from "../../../assets/images/searchResult/footer/instagram-icon.svg";
import linkedinIcon from "../../../assets/images/searchResult/footer/linked-in-icon.svg";
import youtubeIcon from "../../../assets/images/searchResult/footer/youtube-icon.svg";
import appleIcon from "../../../assets/images/searchResult/footer/apple-icon.svg";
import pinterestIcon from "../../../assets/images/searchResult/footer/pinterest-icon.svg";

export default function Child() {
  return (
    <footer className="flex flex-col gap-5 lg:gap-10 xl:gap-0 my-[4rem] lg:mt-[11rem] lg:mx-[2rem] 2xl:mx-[10rem]">
      <p className="text-center xl:mb-[2rem] text-[#B4BBC1] text-[22px]">
        Get Social with us
      </p>
      <ul className="flex flex-wrap justify-center gap-10 xl:gap-[3rem] xl:mb-[4.5rem]">
        <li>
          <img src={facebookIcon} alt="facebook-icon" />
        </li>
        <li>
          <img src={twitterIcon} alt="twitter-icon" />
        </li>
        <li>
          <img src={instagramIcon} alt="instagram-icon" />
        </li>
        <li>
          <img src={linkedinIcon} alt="linkedin-icon" />
        </li>
        <li>
          <img src={youtubeIcon} alt="youtube-icon" />
        </li>
        <li>
          <img src={appleIcon} alt="appleIcon" />
        </li>
        <li>
          <img src={pinterestIcon} alt="pinterestIcon" />
        </li>
      </ul>
      <div className="flex flex-col items-center gap-5 lg:flex-row lg:justify-between">
        <div className="flex gap-2">
          <img src={logo} className="" alt="logo" />
          <div className="flex flex-col">
            <h4 className="text-[30.68px]">trouvaille</h4>
            <p className="text-[8.74px] tracking-[3px] mt-[-8.38px]">
              Front-facing Website
            </p>
          </div>
        </div>
        <ul className="flex flex-wrap justify-center gap-10 xl:gap-[3rem]">
          <li>Home</li>
          <li>Trips</li>
          <li>Contacts</li>
          <li>Terms & Conditions</li>
          <li>Privacy Policy</li>
        </ul>
        <p className="text-center">© 2023 Trouville, Inc.</p>
      </div>
    </footer>
  );
}
