import React, { useState, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./style.scss";

export default function PricingDetails(props) {
  let guestsArr = [];
  const navigate = useNavigate();
  let guestsSelected = useRef();
  guestsSelected = "No Guests Selected!";
  const [validGuestsSeleced, setValidGuestsSelected] = useState(true);

  const handleGuestsChange = (e) => {
    guestsSelected = e.target.value;
    props.bookingFormData["guestsSelected"] = guestsSelected;
  };

  const checkPassengerCounts = () => {
    if (isNaN(guestsSelected)) {
      setValidGuestsSelected(!validGuestsSeleced);
    } else {
      navigate("/bookingForm", { state: props.bookingFormData });
    }
  };

  (async () => {
    for (let i = 1; i <= props.maxGuests; i++) {
      guestsArr[i] = i;
    }
  })();

  return (
    <div className="lg:w-1/2 mt-10 lg:mt-0">
      <div>
        <h4 className="text-[#B4BBC1] mb-[3rem]">Price Details:</h4>
        <div className="bg-[#ffffff0d] p-10 lg:p-[3.7rem] backdrop-blur-3xl border border-gray-700 flex flex-col gap-10">
          <div className="bg-slate-600 p-10 rounded-2xl">
            <h4 className="mb-5">Guests</h4>
            <select
              name="select-customer "
              className={
                "w-full outline-none border[10px]" +
                (!validGuestsSeleced ? " shake border border-red-900" : "")
              }
              defaultValue="Select an Option"
              onChange={handleGuestsChange}
            >
              <option>Select an option</option>
              {guestsArr.map((data, index) => {
                return (
                  <option key={index} value={data}>
                    {data}
                  </option>
                );
              })}
            </select>
          </div>
          <h2 className="text-[#DAE0E5]">
            <span className="line-through font-[400]">
              ₹{props.originalPrice}
            </span>
            ₹{props.discountedPrice}/night
          </h2>
          <button onClick={checkPassengerCounts} className="w-[100%]">
            Reserve
          </button>
          <p className="text-center">You won't be charged yet</p>
        </div>
      </div>
    </div>
  );
}
