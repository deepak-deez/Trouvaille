import React from "react";
import "./style.scss";
import { bookingFormDetails } from "../details/data";

export default function PassengerDetails(props) {
  return (
    <>
      <p className="passenger-number text-3xl mt-[3rem]">
        Passenger : {props.count}
      </p>
      <input
        className={
          " input-fields lg:px-[39px] text-[20px] w-[100%] lg:py-[32px] px-[15px] py-[20px] lg:mt-[60px] mt-[30px] "
        }
        type="text"
        placeholder="First Name"
        defaultValue={bookingFormDetails.otherPassenger[0].firstName}
        disabled={true}
      />

      <input
        className={
          " input-fields lg:px-[39px] text-[20px] w-[100%] lg:py-[32px] px-[15px] py-[20px] lg:mt-[60px] mt-[30px] "
        }
        type="text"
        placeholder="Last Name"
        defaultValue={bookingFormDetails.otherPassenger[0].lastName}
        disabled={true}
      />
      <input
        className={
          " input-fields lg:px-[39px] text-[20px] w-[100%] lg:py-[32px] px-[15px] py-[20px] lg:mt-[60px] mt-[30px] "
        }
        type="text"
        placeholder="Gender"
        defaultValue={bookingFormDetails.otherPassenger[0].gender}
        disabled={true}
      />
      <input
        className={
          " input-fields lg:px-[39px] text-[20px] w-[100%] lg:py-[32px] px-[15px] py-[20px] lg:mt-[60px] mt-[30px] "
        }
        type="text"
        placeholder="Age"
        defaultValue={bookingFormDetails.otherPassenger[0].age}
        disabled={true}
      />
    </>
  );
}
