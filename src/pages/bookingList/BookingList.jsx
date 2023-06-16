import React, { useEffect } from "react";
import "./style.scss";
import TripList from "../../components/bookingList/tripList/TripList";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const BookingList = () => {
  const { userDetails} = useSelector((state) => state.user);
  const navigate = useNavigate()
  useEffect(()=>{
    if(!userDetails)
    navigate("/")
  })
  return (
    <header className="trip-list-page pt-[10rem] pb-[35rem] sm:pb-[20rem]">
      <TripList />
    </header>
  );
};

export default BookingList;
