import React from "react";
import "./style.scss";
import Header from "../../components/tripsPage/header/Header";
import TripCategory from "../../components/searchResult/trip-category/TripCategory";

export default function Trips() {
  return (
    <section className="trips pb-[35rem] sm:pb-[20rem]">
      <Header />
      <TripCategory />
    </section>
  );
}
