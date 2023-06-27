import React, { useState, useEffect } from "react";
import { notifications } from "../data";
import { Link } from "react-router-dom";
import "./style.scss";
import { format, compareDesc } from "date-fns";
import { useNavigate } from "react-router-dom/dist/umd/react-router-dom.development";
import axios from "axios";

export default function NotificationPopUp({
  statusNotis,
  setShowNotis,
  notisUnread,
  setNotisUnread,
}) {
  const navigate = useNavigate();

  const handleNavigate = async (e) => {
    const parentElement = e.target.parentElement;
    const notificatonId = e.target.getAttribute("data-notification-id");
    const markasReadApi =
      process.env.REACT_APP_API_HOST +
      "set-notification-mark-read/" +
      notificatonId;

    try {
      const response = await axios.get(markasReadApi);

      if (response.status === 200) {
        const notisUnreadCopy = [...notisUnread];

        notisUnreadCopy.splice(
          notisUnreadCopy.find((data) => data._id === notificatonId),
          1
        );

        setNotisUnread(notisUnreadCopy);
        parentElement.classList.toggle("bg-blue-100");
      }
    } catch (err) {
      console.error(err);
    }

    navigate("/booking");
    setShowNotis(false);
  };

  const viewAllBtnHandler = () => {
    statusNotis.forEach(async ({ _id }) => {
      const markasReadApi =
        process.env.REACT_APP_API_HOST + "set-notification-mark-read/" + _id;
      try {
        const response = await axios.get(markasReadApi);
      } catch (err) {
        console.error(err);
      }
    });
  };

  return (
    <div className="notification-popup absolute bottom-[-1rem] right-0 top-[110%] w-[25rem]  h-[30rem]  bg-white p-4 rounded-3xl shadow-2xl">
      <div className=" flex justify-between py-5 bg-white w-full">
        <button
          className="px-5 py-2  bg-slate-300 rounded-2xl"
          onClick={viewAllBtnHandler}
        >
          Mark All As Read
        </button>
        <Link
          className="px-5 py-2  bg-slate-300 rounded-2xl"
          to={"/notifications"}
        >
          View All
        </Link>
      </div>
      <div className="overflow-auto h-[23rem] rounded-2xl bg-white">
        {statusNotis?.reverse().map((data, index) => {
          {
            console.log(data.title, " read status : ", data.readStatus);
          }
          return (
            <div
              key={index}
              className={
                "notification-popup-item p-3 border border-orange-700 my-2 rounded-3xl " +
                (data.readStatus ? "" : " bg-blue-100 ")
              }
            >
              <h2 className="font-bold">{data.title}</h2>
              <p className="my-3">{data.description}</p>
              <p className="text-right text-xs text-gray-400">
                {data.createdAt}
              </p>
              <button
                data-notification-id={data._id}
                onClick={handleNavigate}
                className=" text-center text-xs p-2 bg-orange-700 text-white rounded-3xl"
              >
                View Details
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
