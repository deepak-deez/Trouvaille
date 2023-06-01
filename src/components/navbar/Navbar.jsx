import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { fullNavLocations, dashboardLocations } from "./locationData";
import "./style.scss";
import logo from "../../assets/images/navbar/logo.svg";
import searchIcon from "../../assets/images/navbar/search-icon.svg";
import notificationIcon from "../../assets/images/navbar/notification-icon.svg";
import bookingsIcon from "../../assets/images/navbar/document-icon.svg";
import profileIcon from "../../assets/images/navbar/user-profile-icon.svg";
import menuHamburger from "../../assets/images/navbar/menu-hamburger.svg";
import SearchBar from "./searchBar/SearchBar";

export default function Navbar() {
  const [navCollapse, setnavColapse] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  const currentPageLocation = useLocation().pathname;

  useEffect(() => {
    function handleScroll() {
      const scrollTop = window.scrollY;
      const isTop = scrollTop < 20;
      setIsScrolled(!isTop);
    }
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={
        "p-2 sm:p-5 lg:px-[10] lg:py-5 2xl:px-[4rem] 2xl:py-[2.6rem] transition-all duration-500 " +
        (isScrolled ? "bg-white text-black nav-box-shadow " : "")
      }
    >
      <div className="flex justify-between flex-wrap">
        {dashboardLocations.find(
          (location) => location === currentPageLocation
        ) ? (
          <button
            className="xl:hidden"
            onClick={() => {
              navCollapse ? setnavColapse(false) : setnavColapse(true);
            }}
          >
            <img src={menuHamburger} alt="menu-hamburger" />
          </button>
        ) : (
          ""
        )}

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

        {fullNavLocations.find(
          (location) => location === currentPageLocation
        ) ? (
          <ul className="hidden xl:flex gap-10 2xl:gap-[88px] my-auto nav-lg-view">
            <li>
              <Link to="/searchResult">Home</Link>
            </li>
            <li>
              <Link to="/trips">Trips</Link>
            </li>
            <li>
              <Link to="/contacts">Contacts</Link>
            </li>
          </ul>
        ) : (
          ""
        )}

        {dashboardLocations.find(
          (location) => location === currentPageLocation
        ) ? (
          <div className="flex gap-10 2xl:gap-[4.1rem]">
            <SearchBar />
            <img
              src={notificationIcon}
              className=" xl:hidden w-8 hidden"
              // Remove class name hidden
              alt="notification-icon"
            />
            <Link to={"/booking"}>
              <img
                src={bookingsIcon}
                className="hidden xl:block w-8 h-full"
                alt="document-icon"
              />
            </Link>
            <Link to="/accountDetails">
              <img
                className="h-[100%] w-10"
                src={profileIcon}
                alt="profile-icon"
              />
            </Link>
          </div>
        ) : (
          ""
        )}
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
              <Link to="/searchResult">Home</Link>
              <div className="flex gap-10">
                <img
                  src={notificationIcon}
                  className=""
                  alt="notification-icon"
                />
                {/* Remove class name hidden */}
                <img src={bookingsIcon} alt="document-icon" />
              </div>
            </li>
            <li>
              <Link to="/trips">Trips</Link>
            </li>
            <li>
              <Link to="/">Contacts</Link>
            </li>
          </ul>
          <div className="flex nav-serach-area justify-between">
            <SearchBar />
          </div>
        </div>
      )}
    </nav>
  );
}
