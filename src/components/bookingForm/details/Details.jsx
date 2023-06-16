import React, { useEffect, useRef, useState } from "react";
import swal from "sweetalert2";
import "./style.scss";
import { useSelector } from "react-redux";
import PassengerDetails from "../passengerDetails/PassengerDetails";
import arrow from "../../../assets/images/bookingForm/loginForm/arrow.svg";
import Success from "../successBox/SuccessBox";
import axios from "axios";

const Details = (props) => {
  const address = useRef();
  const userName = useRef();
  const otherPassengerDetails = [];
  const bookingFormDetails = {
    tripId: props.bookingFormData.currentTripId.id,
    userId: props.bookingFormData.currentUserId,
    title: props.bookingFormData.locationName,
    phone: props.bookingFormData.phNumber,
    email: props.bookingFormData.email,
    bookingStatus: "pending",
    deleteReason: "",
    deleteStatus: false,
    cancellationStatus: false,
  };

  const submitBtnHandler = async () => {
    console.log(bookingFormDetails);

    const otherPassengerSelector = document.querySelectorAll(
      ".other-passenger-details"
    );

    for (let i = 0; i < otherPassengerSelector.length; i++) {
      const firstName = document.querySelector(
        `.other-passenger-details .first-name${i + 1}`
      );
      const lastName = document.querySelector(
        `.other-passenger-details .last-name${i + 1}`
      );
      const gender = document.querySelector(
        `.other-passenger-details .gender${i + 1}`
      );
      const age = document.querySelector(
        `.other-passenger-details .age${i + 1}`
      );

      const tempObj = {
        firstName: firstName.value,
        lastName: lastName.value,
        gender: gender.value,
        age: age.value,
      };

      otherPassengerDetails.push(tempObj);
    }

    bookingFormDetails["otherPassenger"] = otherPassengerDetails;
    bookingFormDetails["address"] = address.current.value;
    bookingFormDetails["name"] = userName.current.value;

    try {
      const response = await axios.post(
        `${process.env.REACT_APP_API_HOST}trip-booking`,
        bookingFormDetails
      );
      setsucessModal(!sucessModal);
    } catch (err) {
      swal.fire({
        icon: "error",
        title: "Oops...",
        text: err.message,
        timer: "2500",
        buttons: true,
      });
    }
  };

  const { userDetails } = useSelector((state) => state.logInUser);

  const [sucessModal, setsucessModal] = useState(false);
  const [passenger, setpassenger] = useState(false);
  let passengerCount = useRef(props.bookingFormData.guestsSelected);
  let passengerHeadCount = [];
  const [passengerCountArray, setPassengerCountArray] = useState([]);
  const [bookingNotes, setBookingNotes] = useState();

  const fetchBookingNotes = async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_API_HOST}get-booking-note`
      );
      setBookingNotes(response?.data.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchBookingNotes();
  }, []);

  useEffect(() => {
    handlePassengerHeadCount();
  }, [passengerCount]);

  function handlePassengerHeadCount() {
    for (let i = 1; i <= passengerCount; i++) {
      passengerHeadCount.push(i);
    }
    setPassengerCountArray(passengerHeadCount);
    passengerCount = props.bookingFormData.guestsSelected;
  }
  return (
    <>
      <section className="flex flex-col details-form justify-center items-center pb-[20rem]">
        <h2 className="md:text-[64px] text-center mt-[10px] lg:mt-[30px] text-[50px]">
          Details about you
        </h2>
        <div className="flex flex-col lg:w-[975px] w-[90%] md:px-[30px] md:py-[30px] mt-[15px] details-container px-[25px] py-[15px] lg:py-[67px] lg:px-[97px] gap-[2rem] md:gap-[3rem] justify-center">
          <input
            className="input-fields lg:px-[39px] px-[15px] py-[20px] text-[20px] lg:py-[32px] mt-[9px]"
            type="text"
            placeholder="Full Name"
            ref={userName}
          />
          <input
            className=" input-fields lg:px-[39px] lg:py-[32px] text-[20px] px-[15px] py-[20px]  w-[100%]"
            type="text"
            placeholder="Phone Number"
            defaultValue={bookingFormDetails.phone}
            disabled={true}
          />
          <input
            className=" input-fields lg:px-[39px] lg:py-[32px] text-[20px] px-[15px] py-[20px]  w-[100%]"
            type="text"
            placeholder="Phone Number"
            defaultValue={bookingFormDetails.email}
            disabled={true}
          />
          <div className="flex input-fields items-center justify-between  lg:px-[39px] px-[15px] ">
            <input
              className=" w-[100%] lg:py-[32px] py-[20px] bg-transparent text-[20px] other-passenger"
              type="text"
              placeholder="Other Passenger (number)"
              defaultValue={props.bookingFormData.guestsSelected}
              disabled={true}
            />
            <button
              onClick={() => {
                setpassenger(!passenger);
                if (passenger) {
                  passengerCount = props.bookingFormData.guestsSelected;
                  handlePassengerHeadCount();
                } else {
                  passengerCount = 0;
                  handlePassengerHeadCount();
                }
              }}
            >
              <img
                src={arrow}
                className={" rotate-0 " + (passenger ? " rotate-180" : "")}
                alt="arrow-img"
              />
            </button>
          </div>

          {passengerCountArray.length > 0
            ? passengerCountArray.map((data, index) => {
                return (
                  <PassengerDetails
                    key={index}
                    count={data}
                    iterator={index + 1}
                  />
                );
              })
            : ""}

          <input
            className=" input-fields text-[20px] w-[100%] lg:px-[39px] lg:py-[32px] px-[15px] py-[20px]  "
            type="text"
            placeholder="Address"
            ref={address}
          />

          <ul className="list-disc flex flex-col gap-5">
            {bookingNotes?.map((data, index) => {
              return <li className="grey-text">{data.note}</li>;
            })}
          </ul>

          <button
            onClick={submitBtnHandler}
            className=" px-[15px] py-[20px] lg:py-[24px] text-center continue-button"
          >
            SUBMIT
          </button>
        </div>
      </section>
      {sucessModal && <Success />}
    </>
  );
};

export default Details;
