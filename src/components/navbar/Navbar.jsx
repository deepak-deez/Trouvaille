import React from "react";
import "./navbar.scss";
import logo from "../../assets/images/header/logo.svg";
import searchIcon from "../../assets/images/header/search-icon.svg";
import notificationIcon from "../../assets/images/header/notification-icon.svg";
import documentIcon from "../../assets/images/header/document-icon.svg";
import profileIcon from "../../assets/images/header/user-profile-icon.svg";

export default function Navbar() {
  return (
    <nav className="flex justify-between p-10 lg:px-[20] lg:py-10 2xl:px-[4rem] 2xl:py[2.6rem]">
      <div className="flex gap-2">
        <img src={logo} className="" alt="logo" />
        <div className="flex flex-col">
          <h4 className="text-[30.68px]">trouvaille.</h4>
          <p className="text-[8.74px] tracking-[3px] mt-[-8.38px]">
            Front-facing Website
          </p>
        </div>
      </div>
      <ul className="flex gap-10 2xl:gap-[88px] my-auto">
        <li>Home</li>
        <li>Trips</li>
        <li>Contacts</li>
      </ul>
      <div className="flex gap-10 2xl:gap-[4.1rem]">
        <div className="flex nav-serach-area">
          <input
            type="text"
            className="nav-search-input"
            placeholder="Search"
          />
          <img src={searchIcon} alt="search-icon" />
        </div>
        <img src={notificationIcon} alt="notification-icon" />
        <img src={documentIcon} alt="document-icon" />
        <img src={profileIcon} alt="profile-icon" />
      </div>
    </nav>
  );
}
