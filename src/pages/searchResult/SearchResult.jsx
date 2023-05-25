import React from "react";
import "./style.scss";
import TripCategory from "../../components/searchResult/tripCategory/TripCategory";
import Header from "../../components/searchResult/header/Header";

export default function SearchResult() {
  return (
    <section className="search-result pb-[35rem] sm:pb-[20rem]">
      <Header />
      <TripCategory />
    </section>
  );
}
