import React from "react";
import "./style.scss";
import Header from "../../components/tripsPage/header/Header";
import TripCategory from "../../components/tripsPage/tripCategory/TripCategory";

export default function Trips() {
  return (
    <section className="trips pb-32 sm:pb-0">
      <Header />
      <TripCategory />
    </section>
  );
}
