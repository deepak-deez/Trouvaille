import React from "react";
import bedroomIcon from "../../../assets/images/tripsDetailsPage/journeyPlanning/bedroomIcon.svg";
import "./style.scss";

export default function Ammenities({ image, title }) {
  return (
    <div className="flex flex-col items-center h-full">
      <img
        src={image}
        alt="ammenities-icon"
        className="p-4 md:p-10 w-20 md:w-32 h-20 md:h-32 rounded-lg object-fill self-center"
      />
      <p>{title}</p>
    </div>
  );
}
