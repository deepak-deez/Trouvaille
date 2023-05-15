import React from "react";
import "./style.scss";
import NavBar from "../../components/bookingList/navBar/Navbar";
import BookingList from "../../components/bookingList/tripList/TripList";
import Footer from "../../components/bookingList/footer/Footer";
const signin = () => {
  return (
    <header className="trip-list-page">
      <NavBar />
      <BookingList />
      <Footer />
    </header>
  );
};

export default signin;
