import React from "react";
import "./style.scss";
import Details from "../../components/bookingForm/details/Details";
const BookingForm = () => {
  return (
    <header className="booking-form pt-[10rem] pb-[15rem] sm:pb-[10rem]">
      <Details />
    </header>
  );
};

export default BookingForm;
