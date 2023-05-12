import React from "react";
import bedroomIcon from "../../../assets/images/tripsDetailsPage/journeyPlanning/bedroomIcon.svg";
import "./style.scss";

export default function Ammenities(props) {
  return (
    <div className="flex flex-col items-center">
      <img src={bedroomIcon} alt="ammenities-icon" className="p-10" />
      <p>{props.title}</p>
    </div>
  );
}
