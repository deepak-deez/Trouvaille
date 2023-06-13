import React, { useState, useRef, useEffect } from "react";
import "./style.scss";
import swal from "sweetalert2";

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
        <p className="">{date[1]}</p>
      </div>
      {/* {toShow && (
        <span className=" activities text-[1rem] md:text-[2rem] mt-[2rem] ml-[-4rem] font-extrabold  p-5 absolute rounded-2xl">
          {props.detail}
        </span>
      )} */}
    </div>
  );
}
