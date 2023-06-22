import React, { useState, useEffect } from "react";
import { notifications } from "../data";
import { Link } from "react-router-dom";
import "./style.scss";
import { format, compareDesc } from "date-fns";
import { useNavigate } from "react-router-dom/dist/umd/react-router-dom.development";
import axios from "axios";

export default function NotificationPopUp({ statusNotis, setShowNotis }) {
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
      console.log(response);
      if (response.status === 200) {
        parentElement.classList.toggle("bg-green-100");
      }
    } catch (err) {
      console.error(err);
    }

    navigate("/booking");
    setShowNotis(false);
  };

  return (
    <div className="notification-popup absolute bottom-[-1rem] right-0 top-[110%] w-[25rem]  h-[25rem] overflow-auto bg-white p-4 rounded-3xl">
      {statusNotis?.map((data, index) => {
        return (
          <div
            key={index}
            className={
              "notification-popup-item p-3 border border-orange-700 my-2 rounded-3xl " +
              (data.readStatus ? "" : " bg-green-100 ")
            }
          >
            <h2 className="font-bold">{data.title}</h2>
            <p className="my-3">{data.description}</p>
            <p className="text-right text-xs text-gray-400">{data.createdAt}</p>
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
  );
}
