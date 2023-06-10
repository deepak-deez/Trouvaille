import React, { useState } from "react";
import "./style.scss";
import dateSearchIcon from "../../../assets/images/tripsPage/header/date-search-icon.svg";
import DatePicker from "./datePicker/DatePicker.jsx";

export default function Header() {
  return (
    <>
      <header>
        <div className="flex flex-col xl:flex-row lg:justify-between gap-5 bg-white p-10 rounded-[3rem] lg:mx-[5rem] xl:mx-[25rem] min-[1920px]:mx-[32rem]">
          {/* Remove the classname hidden from the classlist */}
          <div className="flex flex-col gap-2">
            <h4>Where to</h4>
            <input
              type="text"
              placeholder="Search Result destination"
              className="bg-transparent"
            />
          </div>
          <DatePicker type={"Check In"} />
          <DatePicker type={"Check Out"} />
          <div className="flex flex-col gap-2 lg:border-l-[2px] border-black lg:pl-5">
            <h4>Person</h4>
            <select name="no-of-persons" id="">
              <option value="1">1</option>
              <option value="1">2</option>
              <option value="1">3</option>
              <option value="1">4</option>
              <option value="1">5</option>
              <option value="1">Others</option>
            </select>
          </div>
          <img
            src={dateSearchIcon}
            className="hidden xl:block"
            alt="date-search-icon"
          />
          <button className="bg-[#E5664C] py-3 lg:hidden rounded-[3rem] hover:bg-[#c34a32] hover:text-white transition-colors duration-200">
            Search
          </button>
        </div>
        <h1 className="mt-[5rem] 2xl:mt-[9rem]">
          Make your Trip as beautiful as you
        </h1>
        <h2 className="bg-[#BC4E37] heading-main">
          Choose your exotic holidays
        </h2>
      </header>
    </>
  );
}
