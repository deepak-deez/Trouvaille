import React from "react";
import "./style.scss";
import Navbar from "../../components/searchResult/navbar/Navbar";
import Header from "../../components/searchResult/header/Header";
import TripCategory from "../../components/searchResult/trip-category/TripCategory";
import Footer from "../../components/searchResult/footer/Footer";

export default function SearchResult() {
  return (
    <section className="search-result">
      <Navbar />
      <Header />
      <TripCategory />
      <Footer />
    </section>
  );
}
