import React from "react";
import "./style.scss";
import { tripNames } from "./data";
import TripNames from "./tripNames/TripNames";
export default function TripList() {
  return (
    <section className="flex flex-col trip-list-container justify-center items-center">
      <h2 className="md:text-[64px] text-center mt-[10px] lg:mt-[30px] text-[50px]">
        Trip List
      </h2>
      <div className="bookings-table-container overflow-x-scroll w-[90%] md:max-w-fit">
        <table className="text-center trip-list lg:pt-[70px] pt-[30px]">
          <tr className="text-[#E0DBD9]">
            <th>Trip Title</th>
            <th>Duration</th>
            <th>No. Of Passenger</th>
            <th>Price</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
          {tripNames.map((data, index) => {
            return (
              <TripNames
                key={index}
                title={data.title}
                duration={data.duration}
                passengers={data.passengers}
                price={data.price}
                status={data.status}
              />
            );
          })}
        </table>
      </div>
    </section>
  );
}
