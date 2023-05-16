import React from "react";
import "./style.scss";
import { goaData, basicInfo, passengerDetails } from "./data.js";
import PassengerDetails from "../../components/bookignDetails/passengerDetails/PassengerDetails";

export default function BookingDetails() {
  return (
    <section className="booking-details pb-[20rem] pt-[10rem]">
      <section className="md:mx-20 xl:mx-44 min-[1920px]:mx-[20rem]">
        <h1 className="text-center my-[75px]">Trip details</h1>
        <div className="details-container md:p-16 lg:p-20">
          <div className="flex flex-col md:flex-row gap-5">
            <img
              className="md:w-[144px] md:h-[192px] m-auto rounded-2xl"
              src={goaData.imgUrl}
              alt="trip-img"
            />
            <div className="w-full">
              <h2 className="text-white text-[24px] font-[600] my-5">
                {goaData.locationName}
              </h2>
              <div className="basic-information text-white lg:grid ">
                <h4 className="mb-5">Basic Information</h4>
                <div className="flex flex-wrap justify-between p-3">
                  <p>
                    Full Name : <span>{basicInfo.name}</span>
                  </p>
                  <p>
                    Email : <span>{basicInfo.email}</span>
                  </p>
                  <p>
                    Address : <span>{basicInfo.address}</span>
                  </p>
                  <p>
                    Phone Number : <span>{basicInfo.phoneNumber}</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-5 all-passenger-details">
            <h4>Other Passengers details</h4>
            <div className="mt-5 flex flex-wrap justify-between gap-10">
              {passengerDetails.map((data, index) => {
                return (
                  <PassengerDetails
                    firstName={data.firstName}
                    lastName={data.lastName}
                    gender={data.gender}
                    age={data.age}
                    count={index + 1}
                    key={index}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}
