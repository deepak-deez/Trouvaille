import React, { useEffect } from "react";
import "./style.scss";
import Notification from "../../components/viewNotifications/Notification";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const BookingList = () => {
  const { FrontendUserData} = useSelector((state) => state.user);
  const navigate = useNavigate()
  useEffect(()=>{
    if(!FrontendUserData)
    navigate("/")
  })
  return (
    <header className="notification-page pt-[10rem] pb-[35rem] sm:pb-[20rem]">
      <Notification />
    </header>
  );
};

export default BookingList;
