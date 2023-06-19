import React from "react";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import "./style.scss";
import getAllApiData from "./logic";
import TripNames from "./tripNames/TripNames";
export default function TripList() {
  const { userDetails } = useSelector((state) => state.user);
  console.log(userDetails);
  const userId = userDetails.data?.userDetails?._id;
  const [userBookingDetails, setUserBookingDetails] = useState();

  if (userBookingDetails?.data?.success) {
  }
  useEffect(() => {
    getAllApiData(userId, setUserBookingDetails);
  }, []);
  return (
    <section className="flex flex-col trip-list-container justify-center items-center ">
      <h2 className="md:text-[64px] text-center mt-[10px] lg:mt-[30px] text-[50px]">
        Trip List
      </h2>
      <div className="bookings-table-container overflow-x-scroll w-[90%] md:max-w-fit">
        <table className="text-center trip-list lg:pt-[70px] pt-[30px]">
          <tbody>
            <tr className="text-[#E0DBD9]">
              <th>Trip Title</th>
              <th>Duration</th>
              <th>No. Of Passenger</th>
              <th>Price</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
            {userBookingDetails?.data?.success ? (
              userBookingDetails?.data?.data?.map((data, index) => {
                return (
                  <TripNames
                    key={index}
                    title={data.title}
                    duration={data.tripDetails.duration}
                    passengers={data.otherPassenger.length}
                    price={data.tripDetails.price}
                    status={data.bookingStatus}
                    bookingId={data._id}
                    userId={userId}
                  />
                );
              })
            ) : (
              <tr>
                <th colspan="6" className="text-4xl font-bold text-[#E0DBD9]">
                  No Bookings Found
                </th>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </section>
  );
}
