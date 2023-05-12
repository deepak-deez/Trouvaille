import React from "react";
import honeymoonIcon from "../../../assets/images/tripsDetailsPage/journeyPlanning/bedIcon.svg";
import "./style.scss";

export default function Ocassions(props) {
  return (
    <div className="flex flex-col items-center ocassions">
      <div className="ocassion-image">
        <img src={honeymoonIcon} alt="honeymoon-icon" />
      </div>
      <p className="pt-[1rem] font-[600] text-[20px]">{props.type}</p>
    </div>
  );
}
