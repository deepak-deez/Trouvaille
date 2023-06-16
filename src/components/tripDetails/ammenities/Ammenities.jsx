import React from "react";
import bedroomIcon from "../../../assets/images/tripsDetailsPage/journeyPlanning/bedroomIcon.svg";
import "./style.scss";

export default function Ammenities({ image, title }) {
  return (
    <div className="flex flex-col items-center">
      <img src={image} alt="ammenities-icon" className="p-10" />
      <p>{title}</p>
    </div>
  );
}
