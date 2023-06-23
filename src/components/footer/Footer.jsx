import "./style.scss";
import React from "react";
import { Link } from "react-router-dom";

import logo from "../../assets/images/navbar/logo.svg";
import facebookIcon from "../../assets/images/footer/faceboox-icon.svg";
import twitterIcon from "../../assets/images/footer/twitter-icon.svg";
import instagramIcon from "../../assets/images/footer/instagram-icon.svg";
import linkedinIcon from "../../assets/images/footer/linked-in-icon.svg";
import youtubeIcon from "../../assets/images/footer/youtube-icon.svg";
import appleIcon from "../../assets/images/footer/apple-icon.svg";
import pinterestIcon from "../../assets/images/footer/pinterest-icon.svg";

export default function Footer() {
  return (
    <footer className="flex flex-col gap-3 lg:gap-8 xl:gap-0 lg:px-[2rem] 2xl:px-[10rem]">
      <p className="text-center xl:mb-[2rem] text-[#B4BBC1] text-[16px]">
        Get Social with us
      </p>
      <ul className="flex flex-wrap justify-center gap-8  xl:gap-[3rem] xl:mb-[4.5rem]">
        <li className=" w-6 h-6">
          <a href="https://www.facebook.com/" target="_blank">
            <img src={facebookIcon} alt="facebook-icon" />
          </a>
        </li>
        <li className=" w-6 h-6">
          <a href="https://twitter.com/" target="_blank">
            <img src={twitterIcon} alt="twitter-icon" />
          </a>
        </li>
        <li className=" w-6 h-6">
          <a href="https://www.instagram.com/" target="_blank">
            <img src={instagramIcon} alt="instagram-icon" />
          </a>
        </li>
        <li className=" w-6 h-6">
          <a href="https://in.linkedin.com/" target="_blank">
            <img src={linkedinIcon} alt="linkedin-icon" />
          </a>
        </li>
        <li className=" w-6 h-6">
          <a href="https://www.youtube.com/" target="_blank">
            <img src={youtubeIcon} alt="youtube-icon" />
          </a>
        </li>
        <li className=" w-6 h-6">
          <a href="https://www.apple.com/in/" target="_blank">
            <img src={appleIcon} alt="appleIcon" />
          </a>
        </li>
        <li className=" w-6 h-6">
          <a href="https://in.pinterest.com/" target="_blank">
            <img src={pinterestIcon} alt="pinterestIcon" />
          </a>
        </li>
      </ul>
      <div className="flex flex-col scale-[85%] items-center gap-5 lg:pb-[2rem] lg:flex-row lg:justify-between">
        <Link to="/searchResult">
          <div className="flex gap-2">
            <img src={logo} className="" alt="logo" />
            <div className="flex flex-col">
              <h4 className="text-[30.68px]">trouvaille</h4>
              <p className="text-[8.74px] tracking-[3px] mt-[-8.38px]">
                Front-facing Website
              </p>
            </div>
          </div>
        </Link>
        <ul className="flex flex-wrap text-[16px] justify-center gap-3 xl:gap-[3rem]">
          <Link to="/searchResult">
            <li className="footer-links">Home</li>
          </Link>
          <Link to="/trips">
            <li className="footer-links">Trips</li>
          </Link>
          <li className="footer-links">Contacts</li>
          <li className="footer-links">Terms & Conditions</li>
          <li className="footer-links">Privacy Policy</li>
        </ul>
        <p className="text-center">© 2023 Trouville, Inc.</p>
      </div>
    </footer>
  );
}
