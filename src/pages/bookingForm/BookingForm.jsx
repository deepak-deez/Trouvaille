import React from "react";
import "./style.scss";
import Details from "../../components/bookingForm/details/Details";
import { useLocation } from "react-router-dom";
const BookingForm = (props) => {
  console.log(props);
  const location = useLocation();
  const propsData = location.state;
  console.log(propsData);
  return (
    <header className="booking-form pt-[10rem] pb-[15rem] sm:pb-[10rem]">
      <Details userData={props.tripinfo} />
    </header>
  );
};

export default BookingForm;
