import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import "./style.scss";
import axios from "axios";
export default function TripNames(props) {
  const navigate = useNavigate();
  const tripId = props.tripId;
  const [duration, setDuration] = useState();
  const [price, setPrice] = useState();

  const getTripData = async () => {
    const tripDetailsUrl = `${process.env.REACT_APP_API_HOST}get-trip-details/trip-package/${tripId}`;
    const getTripDataResponse = await axios.get(tripDetailsUrl);
    setDuration(getTripDataResponse.data.data[0].duration);
    setPrice(getTripDataResponse.data.data[0].price);
  };

  useEffect(() => {
    getTripData();
  }, []);

  return (
    <tr className="bg-white grey-text ">
      <td className="rounded-tl-xl rounded-bl-xl  py-[15px] lg:px-[40px] px-[10px]">
        {props.title}
      </td>
      <td className="  py-[15px] lg:px-[40px] px-[10px]">{duration}</td>
      <td className="  py-[15px] lg:px-[40px] px-[10px]">{props.passengers}</td>
      <td className="  py-[15px] lg:px-[40px] px-[10px]">{price}</td>
      <td className="  py-[15px] lg:px-[40px] px-[10px]">{props.status}</td>
      <td className="rounded-tr-xl rounded-br-xl   py-[15px] lg:px-[40px] px-[10px]">
        <button
          navigate="/bookingDetails"
          className="px-[25px] py-[10px] view-btn text-[white]"
        >
          View
        </button>
      </td>
    </tr>
  );
}
