import React from "react";
import independentIcon from "../../../assets/images/tripsDetailsPage/journeyPlanning/independentIcon.svg";
import "./style.scss";

export default function TravelType({ image, title }) {
  return (
    <div>
      <img
        className="saturate-0 brightness-200"
        src={image}
        alt="travel-type-icon"
      />
      <p className="mt-[1.35rem]">{title}</p>
    </div>
  );
}
