import React from "react";
import { notifications } from "../data";
import { Link } from "react-router-dom";
import "./style.scss";

export default function NotificationPopUp() {
  return (
    <div className="notification-popup absolute bottom-[-1rem] right-0 top-[110%] w-[25rem]  h-[25rem] overflow-auto bg-white p-4 rounded-3xl">
      {notifications?.map((data, index) => {
        console.log(data, index);
        return (
          <div
            key={index}
            className="notification-popup-item p-3 border border-orange-700 my-2 rounded-3xl"
          >
            <h2 className="font-bold">{data.title}</h2>
            <p className="my-3">{data.message}</p>
            <p className="text-right text-xs text-gray-400">{data.date}</p>
            <Link
              to={"/notifications"}
              className=" text-center text-xs p-2 bg-orange-700 text-white rounded-3xl"
            >
              View Details
            </Link>
          </div>
        );
      })}
    </div>
  );
}
