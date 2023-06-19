import React from "react";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import "./style.scss";
import getAllApiData from "./logic";
import { notifications } from "./data";
import TripNotifications from "./tripNotifications/TripNotifications";

export default function Notification() {
  const { FrontendUserData } = useSelector((state) => state.user);
  const userId = FrontendUserData.data.userDetails._id;
  const [userBookingDetails, setUserBookingDetails] = useState();

  useEffect(() => {
    getAllApiData(userId, setUserBookingDetails);
  }, []);

  return (
    <section className="flex flex-col notification-list-container justify-center items-center">
      <h2 className="sm:text-[54px] text-center mt-[10px] lg:mt-[30px] text-[40px] font-[300]">
        Notifications
      </h2>

      <div className="notification-container overflow-x-scroll w-[90%] sm:w-[70%] pt-20">
        <ul className="flex flex-col md:h-[20rem] h-[18rem] overflow-y-scroll text-[20px] sm:text-[30px]">
          {notifications?.map((data, index) => {
            console.log("Data:", data, "Index", index);
            return (
              <TripNotifications
                time={data.date}
                title={data.title} 
                notification={data.message}
                key={index}
                bookingId={index}
              />
            );
          })}
        </ul>
      </div>
    </section>
  );
}
