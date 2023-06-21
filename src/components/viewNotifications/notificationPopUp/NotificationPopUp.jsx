import React, { useState, useEffect } from "react";
import { notifications } from "../data";
import { Link } from "react-router-dom";
import "./style.scss";

export default function NotificationPopUp({ statusNotis }) {
  console.log(statusNotis);

  // useEffect(() => {
  //   socket.on("getNotis", (data) => {
  //     console.log("You have a new Notification : ", data);
  //   });
  // }, [socket]);

  // useEffect(() => {
  //   socket.on("hello-bye", (data) => {
  //     console.log(data);
  //   });
  // }, [socket]);

  // useEffect(() => {
  //   socket.emit("getId", userId);
  //   socket.on("response", (data) => {
  //     console.log(data);
  //   });
  // }, []);

  return (
    <div className="notification-popup absolute bottom-[-1rem] right-0 top-[110%] w-[25rem]  h-[25rem] overflow-auto bg-white p-4 rounded-3xl">
      {statusNotis?.map((data, index) => {
        return (
          <div
            key={index}
            className="notification-popup-item p-3 border border-orange-700 my-2 rounded-3xl"
          >
            <h2 className="font-bold">{data.title}</h2>
            <p className="my-3">{data.description}</p>
            <p className="text-right text-xs text-gray-400">{data.createdAt}</p>
            <Link
              to={"/bookingDetails/" + data.refId}
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
