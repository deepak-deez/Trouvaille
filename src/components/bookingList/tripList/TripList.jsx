import { React, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./style.scss";
import getAllApiData from "./logic";
import TripNames from "./tripNames/TripNames";
import { getAllUserBooking } from "../../../redux/slices/bookingSlice";
export default function TripList() {
  const { FrontendUserData } = useSelector((state) => state.user);
  const userId = FrontendUserData.data?.userDetails?._id;
  const [userBookingDetails, setUserBookingDetails] = useState();
  const { bookingData } = useSelector((state) => state.booking);

  const dispatch = useDispatch();

  if (userBookingDetails?.data?.success) {
  }
  useEffect(() => {
    dispatch(getAllUserBooking(userId));
  }, []);

  useEffect(() => {
    if (bookingData) {
      setUserBookingDetails(bookingData);
    }
  }, [bookingData]);

  console.log(userBookingDetails);
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
            {userBookingDetails && userBookingDetails ? (
              userBookingDetails?.data.map((data, index) => {
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
                <th colSpan="6" className="text-4xl font-bold text-[#E0DBD9]">
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
