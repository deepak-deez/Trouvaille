import React, { useEffect } from "react";
import "./style.scss";
import Details from "../../components/bookingForm/details/Details";
import { useLocation, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
const BookingForm = (props) => {
  const location = useLocation();
  const bookingFormData = location.state;
  const { userDetails} = useSelector((state) => state.user);
  const navigate = useNavigate()
  useEffect(()=>{
    if(!userDetails)
    navigate("/")
  })

  return (
    <header className="booking-form pt-[10rem] pb-[15rem] sm:pb-[10rem]">
      <Details bookingFormData={bookingFormData} />
    </header>
  );
};

export default BookingForm;
