import React from "react";
import divingIcon from "../../../assets/images/tripsDetailsPage/journeyPlanning/diving-icon.svg";

export default function PackageHighlights(props) {
  return (
    <div className="flex gap-7 w-[25rem]">
      <img src={divingIcon} alt="diving-icon" />
      <div className="text-[#B4BBC1]">
        <h4 className=" pt-10 text-[#B4BBC1] text-[2rem]">{props.title}</h4>
        <p className="mt-[2rem]">{props.content}</p>
      </div>
    </div>
  );
}
