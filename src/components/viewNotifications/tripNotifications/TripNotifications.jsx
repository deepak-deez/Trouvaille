import React from "react";
import "./style.scss";

export default function TripNotifications(props) {
  return (
    <li className="flex justify-between items-center bg-white grey-text rounded-tl-xl rounded-bl-xl rounded-tr-xl rounded-br-xl">
      <div className="flex flex-col py-[30px] px-[30px]">
        <div className="text-grey-200 text-base">{props.time}</div>
        <div className="text-orange-500">{props.title}</div>
      </div>

      <div className="rounded-tr-xl rounded-br-xl  py-[3px] lg:px-[40px] px-[20px]">
        <button
          data-booking-id={props.bookingId}
          // onClick={viewButtonHandler}
          className="px-[25px] py-[10px] view-button text-[white]"
        >
          View
        </button>
      </div>
      {/* <div className="text-grey-200 text-base py-[3px] lg:px-[40px] px-[20px]">{props.time}</div> */}
    </li>
  );
}
