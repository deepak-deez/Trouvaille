import React, { useEffect, useState } from "react";
import honeymoonIcon from "../../../assets/images/tripsDetailsPage/journeyPlanning/bedIcon.svg";
import "./style.scss";

export default function Ocassions({ type, image }) {
  return (
    <div className="flex flex-col items-center ocassions">
      <div className="ocassion-image">
        <img src={image} alt="honeymoon-icon" />
      </div>
      <p className="pt-[1rem] font-[600] text-[20px]">{type}</p>
    </div>
  );
}
