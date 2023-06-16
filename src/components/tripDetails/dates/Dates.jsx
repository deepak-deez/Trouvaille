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
    props.setToShowDetails(props.detail);
    props.setDetails(!props.details);
  };

  const hideOnClickOutside = (e) => {
    if (refOne.current && !refOne.current.contains(e.target)) {
      setToShow(false);
      props.setDetails(false);
    }
  };

  return (
    <div>
      <div
        ref={refOne}
        className={
          "flex flex-col date items-center px-10 py-4 " +
          (toShow ? " dates-active " : " dates ")
        }
        onClick={detailsClickHandler}
      >
        <h2 className="">{date[0]}</h2>
        <p className="">{date[1].substring(0, 3)}</p>
      </div>
      {toShow && (
        <div className="  bg-slate-100 mt-[2rem] z-[2] p-5 absolute rounded-2xl">
          <h3 className=" activities text-[1rem]  font-extrabold ">
            {props.detail}
          </h3>
        </div>
      )}
    </div>
  );
}
