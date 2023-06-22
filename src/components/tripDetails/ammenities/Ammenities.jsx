import React from "react";
import bedroomIcon from "../../../assets/images/tripsDetailsPage/journeyPlanning/bedroomIcon.svg";
import "./style.scss";

export default function Ammenities({ image, title }) {
  return (
    <div className="flex flex-col items-center h-full">
      <img
        src={image}
        alt="ammenities-icon"
        className="p-5 lg:p-10  w-[5rem] lg:w-[10rem] h-[5rem] lg:h-[10rem] rounded-lg lg:rounded-2xl object-fill self-center white-border"
      />
      <p>{title}</p>
    </div>
  );
}
