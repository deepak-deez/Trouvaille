import React, { useState } from "react";
import "./style.scss";
import swal from "sweetalert2";

export default function Dates(props) {
  const [toShow, setToShow] = useState(false);
  return (
    <div>
      {/* {toShow && <p>{props.detail}</p>} */}
      <li
        className="flex flex-col items-center px-10 py-4"
        onClick={() => setToShow(true)}
        onMouseLeave={() => setToShow(false)}
      >
        <h2 className="">{props.day}</h2>
        <p className="">{props.month}</p>
      </li>
      {toShow && (
        <div className="h-40 w-64 bg-white text-orange-500 absolute mt-4 mb-3 py-3 text-center rounded-md">
          {props.detail}
        </div>
      )}
    </div>
  );
}
