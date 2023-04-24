import React from "react";
import Navbar from "../../components/navbar/Child";
import Header from "../../components/header/Child";
import TripCategory from "../../components/trip-category/Child";
import Footer from "../../components/footer/Child";

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
