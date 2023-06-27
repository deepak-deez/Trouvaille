import React from "react";
import axios from "axios";
import "./style.scss";

export default function TripNotifications({
  createdAt,
  title,
  description,
  _id,
  readStatus,
  notisUnread,
  setNotisUnread,
}) {
  const markAsReadBtnHandler = async ({ target }) => {
    const parentElement = target.parentElement.parentElement;
    const notificationId = target.getAttribute("data-booking-id");
    const markasReadApi =
      process.env.REACT_APP_API_HOST +
      "set-notification-mark-read/" +
      notificationId;

    try {
      const response = await axios.get(markasReadApi);
      if (response.status === 200) {
        const notisUnreadCopy = [...notisUnread];

        notisUnreadCopy.splice(
          notisUnreadCopy.find((data) => data._id === notificationId),
          1
        );
        setNotisUnread(notisUnreadCopy);
        parentElement.classList.toggle("bg-blue-100");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <li
      className={
        "notification-li flex flex-col lg:flex-row justify-between bg-white grey-text rounded-tl-xl rounded-bl-xl rounded-tr-xl rounded-br-xl h-auto my-5 " +
        (!readStatus ? " bg-blue-100 " : " bg-stone-100 ")
      }
    >
      <div className="flex flex-col py-[30px] px-2 md:px-[30px]">
        <h4 className="text-orange-500 font-bold underline">{title}</h4>
        <span className="text-green-600">{description}</span>
        <p>
          With booking ID : <span className="text-blue-600">{_id}</span>
        </p>
      </div>

      <div className="rounded-tr-xl rounded-br-xl py-[3px] lg:px-[40px] px-[20px] my-auto">
        <button
          data-booking-id={_id}
          className="px-[25px] py-[10px] view-button text-[white] ml-auto"
          onClick={markAsReadBtnHandler}
        >
          Mark As Read
        </button>
        <p className="text-grey-200 text-base text-right">{createdAt}</p>
      </div>
    </li>
  );
}
