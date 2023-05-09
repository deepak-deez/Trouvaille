import React from "react";
import "./style.scss";
import Navbar from "../../components/tripsPage/navbar/Navbar";
import Header from "../../components/tripsPage/header/Header";
import TripCategory from "../../components/tripsPage/tripCategory/TripCategory";
import Footer from "../../components/tripsPage/footer/Footer";

export default function Child() {
  return (
    <section className="trips">
      <Navbar />
      <Header />
      <TripCategory />
      <Footer />
    </section>
  );
}
