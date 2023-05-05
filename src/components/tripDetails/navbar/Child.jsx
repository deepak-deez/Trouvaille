import React, { useState } from "react";
import "./child.scss";
import logo from "../../../assets/images/tripsDetailsPage/header/logo.svg";
import searchIcon from "../../../assets/images/tripsDetailsPage/header/search-icon.svg";
import notificationIcon from "../../../assets/images/tripsDetailsPage/header/notification-icon.svg";
import documentIcon from "../../../assets/images/tripsDetailsPage/header/document-icon.svg";
import profileIcon from "../../../assets/images/tripsDetailsPage/header/user-profile-icon.svg";
import menuHamburger from "../../../assets/images/tripsDetailsPage/header/menu-hamburger.svg";

export default function Navbar() {
  const [navCollapse, setnavColapse] = useState(true);
  return (
    <nav className="p-2 sm:p-10 lg:px-[20] lg:py-10 2xl:px-[4rem] 2xl:py[2.6rem]">
      <div className="flex justify-between flex-wrap">
        <button
          className="xl:hidden"
          onClick={() => {
            navCollapse ? setnavColapse(false) : setnavColapse(true);
          }}
        >
          <img src={menuHamburger} alt="menu-hamburger" />
        </button>
        <div className="flex gap-2">
          <img src={logo} className="" alt="logo" />
          <div className="flex flex-col">
            <h4 className="text-[30.68px]">trouvaille</h4>
            <p className="text-[8.74px] tracking-[3px] mt-[-8.38px]">
              Front-facing Website
            </p>
          </div>
        </div>
        <ul className="hidden xl:flex gap-10 2xl:gap-[88px] my-auto nav-lg-view">
          <li>Home</li>
          <li>Trips</li>
          <li>Contacts</li>
        </ul>
        <div className="flex gap-10 2xl:gap-[4.1rem]">
          <div className="nav-serach-area hidden xl:flex">
            <input
              type="text"
              className="nav-search-input"
              placeholder="Search"
            />
            <img src={searchIcon} alt="search-icon" />
          </div>
          <img
            src={notificationIcon}
            className="hidden xl:block"
            alt="notification-icon"
          />
          <img
            src={documentIcon}
            className="hidden xl:block"
            alt="document-icon"
          />
          <img src={profileIcon} alt="profile-icon" />
        </div>
      </div>
      {navCollapse ? (
        ""
      ) : (
        <div
          className={
            "flex flex-col gap-10 sm:mt-10 nav-tab-menu " +
            (navCollapse ? "nav-close" : "nav-open")
          }
        >
          <ul className={"flex flex-col gap-10 2xl:gap-[88px] my-auto "}>
            <li className="flex justify-between">
              <span>Home</span>{" "}
              <div className="flex gap-10">
                <img src={notificationIcon} alt="notification-icon" />
                <img src={documentIcon} alt="document-icon" />
              </div>
            </li>
            <li>Trips</li>
            <li>Contacts</li>
          </ul>
          <div className="flex nav-serach-area justify-between">
            <input
              type="text"
              className="nav-search-input"
              placeholder="Search"
            />

            <img src={searchIcon} alt="search-icon" />
          </div>
        </div>
      )}
    </nav>
  );
}
