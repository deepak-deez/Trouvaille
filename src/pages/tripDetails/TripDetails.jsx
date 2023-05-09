import React from "react";
import "./style.scss";
import Navbar from "../../components/tripDetails/navbar/Navbar";
import Header from "../../components/tripDetails/header/Header";
import JourneyPlanning from "../../components/tripDetails/journeyPlanning/JourneyPlanning";
import Footer from "../../components/tripDetails/footer/Footer";

export default function TripDetails() {
  return (
    <section className="trip-details">
      <Navbar />
      <Header />
      <JourneyPlanning />
      <Footer />
    </section>
  );
}
