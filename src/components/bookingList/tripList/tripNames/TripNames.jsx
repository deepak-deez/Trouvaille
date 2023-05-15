import React from "react";
import { Link } from "react-router-dom";
import "./style.scss";

export default function TripNames(props) {
  return (
    <tr className="bg-white grey-text ">
      <td className="rounded-tl-xl rounded-bl-xl  py-[15px] lg:px-[40px] px-[10px]">
        {props.title}
      </td>
      <td className="  py-[15px] lg:px-[40px] px-[10px]">{props.duration}</td>
      <td className="  py-[15px] lg:px-[40px] px-[10px]">{props.passengers}</td>
      <td className="  py-[15px] lg:px-[40px] px-[10px]">{props.price}</td>
      <td className="  py-[15px] lg:px-[40px] px-[10px]">{props.status}</td>
      <td className="rounded-tr-xl rounded-br-xl   py-[15px] lg:px-[40px] px-[10px]">
        <Link
          to="/bookingDetails"
          className="px-[25px] py-[10px] view-btn text-[white]"
        >
          View
        </Link>
      </td>
    </tr>
  );
}
