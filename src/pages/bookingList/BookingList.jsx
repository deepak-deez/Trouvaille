import React, { useEffect } from "react";
import "./style.scss";
import TripList from "../../components/bookingList/tripList/TripList";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const BookingList = () => {
  const { FrontendUserData } = useSelector((state) => state.user);
  const navigate = useNavigate();
  useEffect(() => {
    if (!FrontendUserData) navigate("/");
  });
  return (
    <header className="trip-list-page pt-[7rem] pb-10 h-screen">
      <TripList />
    </header>
  );
};

export default BookingList;
