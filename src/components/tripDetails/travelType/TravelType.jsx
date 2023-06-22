import React from "react";
import independentIcon from "../../../assets/images/tripsDetailsPage/journeyPlanning/independentIcon.svg";
import "./style.scss";

export default function TravelType({ image, title }) {
  return (
    <div>
      <img
        className="saturate-0 brightness-200 max-w-[4rem] md:max-w-[5rem] h-[4rem] md:h-[5rem]"
        src={image}
        alt="travel-type-icon"
      />
      <p className="mt-[1.35rem]">{title}</p>
    </div>
  );
}
