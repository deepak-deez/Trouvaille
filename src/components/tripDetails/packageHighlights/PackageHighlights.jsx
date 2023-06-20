import React from "react";
import divingIcon from "../../../assets/images/tripsDetailsPage/journeyPlanning/diving-icon.svg";
import "./style.scss";

export default function PackageHighlights(props) {
  return (
    <div className="w-[25rem]">
      <div className="flex gap-7 ">
        <img
          className=" w-20 md:w-32 h-20 md:h-32 rounded-lg self-center"
          src={props.imgSrc}
          alt="diving-icon"
        />
        <div className="flex flex-col">
          <h4 className=" text-[#B4BBC1] text-[2rem]">{props.title}</h4>
          <p className="">{props.content}</p>
        </div>
      </div>
    </div>
  );
}
