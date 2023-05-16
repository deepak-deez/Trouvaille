import React from "react";
import "./style.scss";
import BookingList from "../../components/bookingList/tripList/TripList";

const signin = () => {
  return (
    <header className="trip-list-page pt-[10rem] pb-[35rem] sm:pb-[20rem]">
      <BookingList />
    </header>
  );
};

export default signin;
