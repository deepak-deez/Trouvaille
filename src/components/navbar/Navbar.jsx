import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { fullNavLocations, dashboardLocations } from "./locationData";
import "./style.scss";
import logo from "../../assets/images/navbar/logo.svg";
import searchIcon from "../../assets/images/navbar/search-icon.svg";
import notificationIcon from "../../assets/images/navbar/notification-icon.svg";
import bookingsIcon from "../../assets/images/navbar/document-icon.svg";
import profileIcon from "../../assets/images/navbar/user-profile-icon.svg";
import menuHamburger from "../../assets/images/navbar/menu-hamburger.svg";
import SearchBar from "./searchBar/SearchBar";
import { useSelector } from "react-redux";
import NotificationPopUp from "../viewNotifications/notificationPopUp/NotificationPopUp";

export default function Navbar({ setActive }) {
  const navigate = useNavigate();
  const [navCollapse, setnavColapse] = useState(true);
  const [showNotis, setShowNotis] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const currentPageLocation = useLocation().pathname;
  const { userDetails } = useSelector((state) => state.user);

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

  const handleNotificationPopUp = () => {
    setShowNotis(!showNotis);
  };

  const refMenu = useRef(null)

const handleClickOutside=(e)=>{
  if(refMenu.current && !refMenu.current.contains(e.target)){
    setnavColapse(true)
  }
}

useEffect(()=>{
  document.addEventListener("click",handleClickOutside,"true")
  console.log(navCollapse);
},[])

  return (
    <nav
      className={
        "p-2 sm:p-5 lg:px-[10] lg:py-5 2xl:px-[4rem] 2xl:py-[1.6rem] transition-all duration-500 " +
        (isScrolled ? "bg-white text-black nav-box-shadow " : "")
      }
    >
      <div ref={refMenu} className="flex justify-between flex-wrap">
        {/* {dashboardLocations.find(
          (location) => location === currentPageLocation
        ) ? ( */}
          <button 
            className="collapse-button xl:hidden"
            onClick={(e) => {
              navCollapse ? setnavColapse(false) : setnavColapse(true);
              handleClickOutside(e)
            }}
          >
            <img src={menuHamburger} alt="menu-hamburger" />
          </button>
        {/* ) : (
          ""
        )} */}

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

        {/* {dashboardLocations.find(
          (location) => location === currentPageLocation
        ) ? ( */}
          <div className="flex gap-10 2xl:gap-[4.1rem] items-center">
            <SearchBar />

            <div className="my-auto relative hidden xl:block">
              <button onClick={handleNotificationPopUp} className="my-auto">
                <img
                  src={notificationIcon}
                  className=" mt-2 w-8  h-full  my-auto"
                  alt="notification-icon"
                />
              </button>
              {showNotis ? <NotificationPopUp /> : ""}
            </div>

            <Link to={"/booking"}>
              <img
                src={bookingsIcon}
                className="hidden xl:block w-8 h-full"
                alt="document-icon"
              />
            </Link>
            <button
              onClick={() => {
                navigate("/accountDetails");
                setActive("view-account");
              }}
            >
              <div className="rounded-[50%] border-salte-300 border-4">
                <img
                  className="h-10 w-10 rounded-[50%]"
                  src={
                    userDetails?.data?.userDetails?.userDetails?.image
                      ? userDetails?.data?.userDetails?.userDetails?.image
                      : profileIcon
                  }
                  alt="profile-icon"
                />
              </div>
            </button>
          </div>
        {/* ) : (
          ""
        )} */}
        
            {navCollapse ? (
        ""
      ) : (
        <div
          className={
            "flex flex-col xl:hidden gap-10 mt-[4rem] nav-tab-menu " +
            (navCollapse ? "nav-close" : "nav-open")
          }

        >
          <ul className={"flex flex-col gap-10 2xl:gap-[88px] my-auto "} >
            <li className="flex justify-between" >
              <Link to="/searchResult">Home</Link>
              <div className="flex gap-10">
                <Link to={"/notifications"}>
                  <img
                    src={notificationIcon}
                    className="w-[25px] h-[27px]"
                    alt="notification-icon"
                  />
                </Link>
                <Link to={"/booking"}>
                  <img src={bookingsIcon} alt="bookings-icon" />
                </Link>
              </div>
            </li>
            <li>
              <Link to="/trips">Trips</Link>
            </li>
            <li>
              <Link to="/contacts">Contacts</Link>
            </li>
          </ul>
        </div>
      )}
      </div>
      
    </nav>
  );
}
