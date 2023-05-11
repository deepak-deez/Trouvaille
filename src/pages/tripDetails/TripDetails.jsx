import React from "react";
import "./style.scss";
import Navbar from "../../components/tripDetails/navbar/Navbar";
import Header from "../../components/tripDetails/header/Header";
import JourneyPlanning from "../../components/tripDetails/journeyPlanning/JourneyPlanning";
import Footer from "../../components/tripDetails/footer/Footer";
import Dates from "../../components/tripDetails/dates/Dates";
import TripHighlights from "../../components/tripDetails/packageHighlights/PackageHighlights";
import Ocassions from "../../components/tripDetails/ocassions/Ocassions";
import { dates, packageHighlights, ocassionData } from "./data";

export default function TripDetails() {
  return (
    <section className="trip-details">
      <Navbar />
      <Header />
      <section className="md:mx-10 xl:mx-28 2xl:mx-44 min-[1920px]:mx-[20rem]">
        <h1 className="mt-[5rem] text-center lg:text-start">Itinerary</h1>
        <ul className="flex flex-wrap justify-center lg:justify-start sm:flex-row gap-5 text-[#838597] my-[3rem] text-[22px]">
          <li>Maximum guests 12</li>
          <li>Explore 5 places</li>
          <li>Available for 6 guests</li>
        </ul>
        <h4 className="mb-[2rem] text-2xl">Dates</h4>
        <ul className="flex flex-wrap justify-center gap-5 xl:justify-between available-dates overflow-x-scroll">
          {dates.map((data, index) => {
            return <Dates day={data.day} month={data.month} key={index} />;
          })}
        </ul>
        <p className="my-[3rem] text-[#B4BBC1] text-[22px]">
          Till now 4 suits empty for this day, hurry up!
        </p>
        <div className="trip-highlights-container my-5">
          <h2>Highlights of the package</h2>
          <div className="flex flex-wrap gap-10">
            {packageHighlights.map((data, index) => {
              return (
                <TripHighlights
                  title={data.title}
                  content={data.content}
                  key={index}
                />
              );
            })}
          </div>
        </div>
        <div className="mt-[5rem]">
          <h2 className="mb-[3rem]">Occassions Related</h2>
          <div className="flex flex-wrap justify-center lg:justify-start gap-10 xl:gap-[4rem] occassions-cards">
            {ocassionData.map((data, index) => {
              return <Ocassions type={data.ocassionType} key={index} />;
            })}
          </div>
        </div>
      </section>

      <Footer />
    </section>
  );
}
