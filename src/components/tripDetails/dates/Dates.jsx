import React from "react";
import "./style.scss";

export default function Dates(props) {
  return (
    <li className="flex flex-col items-center px-10 py-4">
      <h2 className="">{props.day}</h2>
      <p className="">{props.month}</p>
    </li>
  );
}
