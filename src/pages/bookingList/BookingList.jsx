import React from "react";
import "./style.scss";
import TripList from "../../components/bookingList/tripList/TripList";

const BookingList = () => {
  return (
    <header className="trip-list-page pt-[10rem] pb-[35rem] sm:pb-[20rem]">
      <TripList />
    </header>
  );
};

export default BookingList;
