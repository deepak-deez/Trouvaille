import React from "react";
import { useRef } from "react";
import "./style.scss";

export default function PassengerDetails(props) {
  const firstName = useRef();
  const lastName = useRef();
  const gender = useRef();
  const age = useRef();

  return (
    <div className="other-passenger-details">
      <p className="passenger-number text-3xl mt-[3rem]">
        Passenger : {props.count}
      </p>
      <input
        className={
          `first-name${props.iterator}` +
          " input-fields lg:px-[39px] text-[20px] w-[100%] lg:py-[32px] px-[15px] py-[20px] lg:mt-[60px] mt-[30px] "
        }
        type="text"
        placeholder="First Name"
        ref={firstName}
      />

      <input
        className={
          `last-name${props.iterator}` +
          " input-fields lg:px-[39px] text-[20px] w-[100%] lg:py-[32px] px-[15px] py-[20px] lg:mt-[60px] mt-[30px] "
        }
        type="text"
        placeholder="Last Name"
        ref={lastName}
      />
      <input
        className={
          `gender${props.iterator}` +
          " input-fields lg:px-[39px] text-[20px] w-[100%] lg:py-[32px] px-[15px] py-[20px] lg:mt-[60px] mt-[30px] "
        }
        type="text"
        placeholder="Gender"
        ref={gender}
      />
      <input
        className={
          `age${props.iterator}` +
          " input-fields lg:px-[39px] text-[20px] w-[100%] lg:py-[32px] px-[15px] py-[20px] lg:mt-[60px] mt-[30px] "
        }
        type="text"
        placeholder="Age"
        ref={age}
      />
    </div>
  );
}
