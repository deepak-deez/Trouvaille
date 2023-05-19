import React, { useState, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import "./style.scss";

export default function PricingDetails(props) {
  let maxArr = [];

  let guestsSelected = useRef();

  const handleGuestsChange = (e) => {
    console.log("Called");
    guestsSelected = e.target.value;
    console.log("Guests Selected : ", guestsSelected);
    props.bookingFormData["guestsSelected"] = guestsSelected;
    console.log("Props Data on Pricing Page : ", props.bookingFormData);
  };

  (async () => {
    for (let i = 1; i <= props.maxGuests; i++) {
      maxArr[i] = i;
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
              className="w-full outline-none"
              onChange={handleGuestsChange}
            >
              {maxArr.map((data, index) => {
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
          <Link to="/bookingForm" state={props.bookingFormData}>
            <button className="w-[100%]">Reserve</button>
          </Link>
          <p className="text-center">You won't be charged yet</p>
        </div>
      </div>
    </div>
  );
}
