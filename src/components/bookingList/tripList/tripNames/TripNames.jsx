import React, { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import "./style.scss";
import axios from "axios";
export default function TripNames(props) {
  const navigate = useNavigate();
  const tripId = props.tripId;
  const [getTripDataResponse, setGetTripDataResponse] = useState();
  let userDetails = {};
  const getTripData = async () => {
    const tripDetailsUrl = `${process.env.REACT_APP_API_HOST}get-trip-details/trip-package/${tripId}`;
    setGetTripDataResponse(await axios.get(tripDetailsUrl));
  };
  const viewButtonHandler = (e) => {
    userDetails = {
      bookingId: e.target.getAttribute("data-booking-id"),
      tripTitle: getTripDataResponse?.data?.data[0]?.title,
      image: getTripDataResponse?.data?.data[0]?.image?.url,
    };
    navigate("/bookingDetails", { state: userDetails });
  };
  useEffect(() => {
    getTripData();
  }, []);
  if (getTripDataResponse?.data?.success) {
    return (
      <tr className="bg-white grey-text ">
        <td className="rounded-tl-xl rounded-bl-xl  py-[15px] lg:px-[40px] px-[10px]">
          {props.title}
        </td>
        <td className="  py-[15px] lg:px-[40px] px-[10px]">
          {getTripDataResponse?.data?.data[0]?.duration}
        </td>
        <td className="  py-[15px] lg:px-[40px] px-[10px]">
          {props.passengers}
        </td>
        <td className="  py-[15px] lg:px-[40px] px-[10px]">
          {getTripDataResponse?.data?.data[0]?.price}
        </td>
        <td className="  py-[15px] lg:px-[40px] px-[10px]">{props?.status}</td>
        <td className="rounded-tr-xl rounded-br-xl   py-[15px] lg:px-[40px] px-[10px]">
          <button
            data-booking-id={props.bookingId}
            onClick={viewButtonHandler}
            className="px-[25px] py-[10px] view-btn text-[white]"
          >
            View
          </button>
        </td>
      </tr>
    );
  }
}
