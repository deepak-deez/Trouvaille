import React from "react";
import "./child.scss";
import Navbar from "../../components/tripDetails/navbar/Child";
import Header from "../../components/tripDetails/header/Child";
import JourneyPlanning from "../../components/tripDetails/journeyPlanning/Child";
import Footer from "../../components/tripDetails/footer/Child";

export default function TripDetails() {
  return (
    <>
      <Navbar />
      <Header />
      <JourneyPlanning />
      <Footer />
    </>
  );
}
