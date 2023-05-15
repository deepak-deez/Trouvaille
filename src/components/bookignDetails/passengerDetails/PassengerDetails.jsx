import React from "react";
import "./style.scss";

export default function PassengerDetails(props) {
  return (
    <div>
      <p className="mb-5">{props.count}. Passenger Details</p>
      <p>
        First Name : <span>{props.firstName}</span>
      </p>
      <p>
        Last Name : <span>{props.lastName}</span>
      </p>
      <p>
        Gender : <span>{props.gender}</span>
      </p>
      <p>
        Age : <span>{props.age}</span>
      </p>
    </div>
  );
}
