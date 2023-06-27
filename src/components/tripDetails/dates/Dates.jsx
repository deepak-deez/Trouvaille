import React, { useState, useRef, useEffect } from "react";
import "./style.scss";

export default function Dates(props) {
  const date = props.day.split(" ");
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
    <div>
      <div
        ref={refOne}
        className={
          "flex flex-col date w-[7rem] lg:w-[8rem] h-[7rem] lg:h-[8rem] items-center px-10 py-4 " +
          (toShow ? " dates-active " : " dates ")
        }
        onClick={detailsClickHandler}
      >
        <h2 className="text-[30px] lg:text-[40px]">{date[0]}</h2>
        <p className="text-[18px] lg:text-[22px]">{date[1].substring(0, 3)}</p>
      </div>
      {toShow && (
        <div className="flex flex-col  gap-0 absolute ">
          <div className="up-arrow ml-5"></div>
          <div className="  bg-[#a53c27f0] text-white z-[2] p-5  rounded-2xl">
            <h3 className=" activities text-[1rem] font-extrabold  break-all">
              {props.detail}
            </h3>
          </div>
        </div>
      )}
    </div>
  );
}
