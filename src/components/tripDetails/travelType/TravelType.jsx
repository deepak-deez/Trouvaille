import React from "react";
import independentIcon from "../../../assets/images/tripsDetailsPage/journeyPlanning/independentIcon.svg";
import "./style.scss";

export default function TravelType(props) {
  return (
    <div>
      <img src={independentIcon} alt="travel-type-icon" />
      <p className="mt-[1.35rem]">{props.title}</p>
    </div>
  );
}
