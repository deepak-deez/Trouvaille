import React, { useEffect, useRef, useState } from "react";
import swal from "sweetalert2";
import SweetAlert from "../../alert/sweetAlert";
import "./style.scss";
import { useDispatch, useSelector } from "react-redux";
import PassengerDetails from "../passengerDetails/PassengerDetails";
import arrow from "../../../assets/images/bookingForm/loginForm/arrow.svg";
import Success from "../successBox/SuccessBox";
import axios from "axios";
import { validName } from "../../../constants/regex";
import LoadingScreen from "../../loading/loadingScreen";
import {
  createBooking,
  resetBooking,
} from "../../../redux/slices/bookingSlice";
import socketIOClient from "socket.io-client";

const Details = (props) => {
  const socket = socketIOClient(process.env.REACT_APP_API_HOST);
  const address = useRef();
  const userName = useRef();
  const dispatch = useDispatch();

  const { bookingData, loading, error } = useSelector((state) => state.booking);
  const phoneNumberRef = useRef();
  const otherPassengerDetails = [];
  const bookingFormDetails = {
    tripId: props.bookingFormData.currentTripId.id,
    userId: props.bookingFormData.currentUserId,
    title: props.bookingFormData.locationName,
    phone: props.bookingFormData.phNumber,
    email: props.bookingFormData.email,
    bookingStatus: "Pending",
    deleteReason: "",
    deleteStatus: false,
    cancellationStatus: false,
  };

  const submitBtnHandler = async () => {
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
    console.log("Other Passenger : ", otherPassengerDetails);
    if (userName.current.value && address.current.value) {
      dispatch(createBooking(bookingFormDetails));

      // socket.on("connect", () => {
      //   console.log(socket.id);
      // });
    } else {
      SweetAlert("warning", "", "All fields are required!");
    }
    // try {
    //   const response = await axios.post(
    //     `${process.env.REACT_APP_API_HOST}trip-booking`,
    //     bookingFormDetails
    //   );
    //   setsucessModal(!sucessModal);
    // } catch (err) {
    //   swal.fire({
    //     icon: "error",
    //     title: "Oops...",
    //     text: err.message,
    //     timer: "2500",
    //     buttons: true,
    //   });
    // }
  };
  useEffect(() => {
    if (bookingData) {
      // console.log(bookingData);
      // SweetAlert("success", bookingData.message);
      setsucessModal(!sucessModal);
      dispatch(resetBooking());
      console.log(bookingData.data._id, " : id");

      const notificationObj = {
        userType: "Frontend-user",
        title: "Trip Update",
        description: bookingFormDetails.title,
        refId: bookingData.data._id,
        userId: bookingFormDetails.userId,
        createdAt: new Date(),
        readStatus: false,
        userName: userName.current.value,
        userEmail: bookingFormDetails.email,
      };

      socket.emit("sendCurrentBooking", notificationObj);

      console.log("Emitted : ", notificationObj);
    }
  }, bookingData);

  const [sucessModal, setsucessModal] = useState(false);
  const [passenger, setpassenger] = useState(false);
  let [passengerCount, setPassengerCount] = useState(
    props.bookingFormData.guestsSelected
  );
  let passengerHeadCount = [];
  const [passengerCountArray, setPassengerCountArray] = useState([]);
  const [bookingNotes, setBookingNotes] = useState();
  const [errorField, setErrorField] = useState(false);

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
    passengerHeadCount = [];
    for (let i = 1; i <= passengerCount; i++) {
      passengerHeadCount.push(i);
    }
    setPassengerCountArray(passengerHeadCount);
    passengerCount = props.bookingFormData.guestsSelected;
  }
  console.log("Booking form details : ", bookingFormDetails);

  const checkValidUserName = () => {
    try {
      console.log(userName.current.value);
      if (validName.test(userName.current.value)) {
        setErrorField(false);
        document.getElementById("validUserName").textContent = "";
      } else {
        if (userName.current.value) {
          setErrorField(true);
          throw new Error("Enter a valid Name");
        }
      }
    } catch (err) {
      document.getElementById("validUserName").textContent = err.message;
    }
  };

  const checkValidPhoneNumber = () => {
    try {
      console.log(phoneNumberRef.current.value);
      if (validName.test(phoneNumberRef.current.value)) {
        setErrorField(false);
        document.getElementById("validPhone").textContent = "Great!";
      } else {
        setErrorField(true);
        throw new Error("Not a valid Phone Number");
      }
    } catch (err) {
      document.getElementById("validPhone").textContent = err.message;
    }
  };

  return (
    <>
      {loading && <LoadingScreen />}
      <section className="flex flex-col details-form justify-center items-center pb-[20rem]">
        <h2 className="md:text-[64px] text-center mt-[10px] lg:mt-[30px] text-[50px]">
          Details about you
        </h2>
        <div className="flex flex-col lg:w-[975px] w-[90%] md:px-[30px] md:py-[30px] mt-[15px] details-container px-[25px] py-[15px] lg:py-[67px] lg:px-[97px] gap-[2rem] md:gap-[3rem] justify-center">
          <div className="relative">
            <input
              className="input-fields w-full lg:px-[39px] px-[15px] py-[20px] text-[20px] lg:py-[32px] mt-[9px]"
              type="text"
              placeholder="Full Name"
              ref={userName}
              onChange={checkValidUserName}
            />
            <h4
              id="validUserName"
              className={
                "font-bold bg-transparent text-xl absolute top-28 " +
                (errorField ? "text-red-700" : "text-green-700")
              }
            ></h4>
          </div>

          <div>
            <input
              className="input-fields lg:px-[39px] lg:py-[32px] text-[20px] px-[15px] py-[20px]  w-[100%]"
              type="text"
              placeholder="Phone Number"
              defaultValue={bookingFormDetails.phone}
              ref={phoneNumberRef}
              disabled={true}
              onChange={checkValidPhoneNumber}
            />
            <h4
              id="validPhone"
              className={
                "font-bold bg-transparent text-xl absolute top-28 " +
                (errorField ? "text-red-700" : "text-green-700")
              }
            ></h4>
          </div>

          <input
            className=" input-fields lg:px-[39px] lg:py-[32px] text-[20px] px-[15px] py-[20px]  w-[100%]"
            type="text"
            placeholder="E-mail"
            defaultValue={bookingFormDetails.email}
            disabled={true}
          />
          <input
            className=" input-fields text-[20px] w-[100%] lg:px-[39px] lg:py-[32px] px-[15px] py-[20px]  "
            type="text"
            placeholder="Address"
            ref={address}
          />

          <div className="flex input-fields items-center justify-between  lg:px-[39px] px-[15px] ">
            <input
              className=" w-[100%] lg:py-[32px] py-[20px] bg-transparent text-[20px] other-passenger"
              type="number"
              placeholder="Other Passenger (number)"
              defaultValue={props.bookingFormData.guestsSelected}
              onChange={(e) => {
                console.log(props);
                if (e.target.value > props.bookingFormData.maximumGuests) {
                  setPassengerCount(props.bookingFormData.maximumGuests);
                  swal.fire({
                    icon: "warning",
                    title: "Oops...",
                    text: "cant exceed maximum guests for this package",
                    timer: "2500",
                    buttons: true,
                  });
                  e.target.value = props.bookingFormData.maximumGuests;
                } else setPassengerCount(e.target.value);
              }}
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

          <ul className="list-disc flex flex-col gap-5">
            {bookingNotes?.map((data, index) => {
              return (
                <li className="grey-text" key={index}>
                  {data.note}
                </li>
              );
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
