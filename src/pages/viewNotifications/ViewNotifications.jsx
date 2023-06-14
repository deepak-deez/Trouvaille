import React from "react";
import "./style.scss";
import Notification from "../../components/viewNotifications/Notification";

const BookingList = () => {
  return (
    <header className="notification-page pt-[10rem] pb-[35rem] sm:pb-[20rem]">
      <Notification />
    </header>
  );
};

export default BookingList;
