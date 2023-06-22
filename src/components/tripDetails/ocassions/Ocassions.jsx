import React, { useEffect, useState, useRef } from "react";
import honeymoonIcon from "../../../assets/images/tripsDetailsPage/journeyPlanning/bedIcon.svg";
import "./style.scss";

export default function Ocassions({ type, image, desc }) {
  const [toShow, setToShow] = useState(false);
  const refOne = useRef(null);

  useEffect(() => {
    document.addEventListener("click", hideOnClickOutside, true);
  }, []);

  const detailsClickHandler = () => {
    setToShow(!toShow);
  };

  const hideOnClickOutside = (e) => {
    if (refOne.current && !refOne.current.contains(e.target)) {
      setToShow(false);
    }
  };

  return (
    <div className="relative ">
      <div
        className="flex flex-col  items-center ocassions"
        ref={refOne}
        onClick={detailsClickHandler}
      >
        <div className="ocassion-image">
          <img
            className=" max-w-[4rem] md:max-w-[5rem] h-[4rem] md:h-[5rem]"
            src={image}
            alt="honeymoon-icon"
          />
        </div>
        <p className="pt-[1rem] font-[600] text-[20px]">{type}</p>
      </div>
      {toShow && (
        <div className="flex flex-col w-[15rem]  gap-0 absolute ">
          <div className="up-arrow ml-5"></div>
          <div className="  bg-[#a53c27ba] h-[10rem] overflow-y-scroll text-white z-[2] p-5  rounded-2xl">
            <h3 className=" activities text-[1rem]  font-extrabold ">{desc}</h3>
          </div>
        </div>
      )}
    </div>
  );
}
