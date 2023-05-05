import React from "react";
import "./child.scss";
import Navbar from "../../components/tripsPage/navbar/Child";
import Header from "../../components/tripsPage/header/Child";
import TripCategory from "../../components/tripsPage/trip-category/Child";
import Footer from "../../components/tripsPage/footer/Child";

export default function Child() {
  return (
    <>
      <Navbar />
      <Header />
      <TripCategory />
      <Footer />
    </>
  );
}
