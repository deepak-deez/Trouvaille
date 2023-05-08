import React from "react";
import "./child.scss";
import Navbar from "../../components/searchResult/navbar/Child";
import Header from "../../components/searchResult/header/Child";
import TripCategory from "../../components/searchResult/trip-category/Child";
import Footer from "../../components/searchResult/footer/Child";

export default function Child() {
  return (
    <section className="search-result">
      <Navbar />
      <Header />
      <TripCategory />
      <Footer />
    </section>
  );
}
