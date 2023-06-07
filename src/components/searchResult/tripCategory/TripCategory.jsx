import "./style.scss";
import React, { useEffect, useState } from "react";
import seaIcon from "../../../assets/images/searchResult/tripCategory/sea-icon.svg";
import hillsIcon from "../../../assets/images/searchResult/tripCategory/hills-icon.svg";
import forestIcon from "../../../assets/images/searchResult/tripCategory/forest-icon.svg";
import tropicalFallsIcon from "../../../assets/images/searchResult/tripCategory/tropical-falls.svg";
import desertIcon from "../../../assets/images/searchResult/tripCategory/desert-icon.svg";
import riversideIcon from "../../../assets/images/searchResult/tripCategory/riverside-icon.svg";
import sortIcon from "../../../assets/images/searchResult/tripCategory/sort-icon.svg";
import filterIcon from "../../../assets/images/searchResult/tripCategory/filter-icon.svg";
import TripCard from "../tripCard/TripCard";
import FilterCategories from "../filterCategories/FilterCategories";
import getAllApiData from "./logic";
import "rc-slider/assets/index.css";

export default function TripCategory() {
  const [allPackagesData, setAllPackagesData] = useState();
  const [showFilter, setShowFilter] = useState();

  useEffect(() => {
    getAllApiData(setAllPackagesData);
  }, []);

  return (
    <section className="trip-category">
      <div className="flex justify-center 2xl:justify-between flex-wrap gap-10 lg:gap-12 trip-category-icons">
        {/* //Remove className "Details from the classlist" */}
        <img src={seaIcon} alt="sea-icon" />
        <img src={hillsIcon} alt="hills-icon" />
        <img src={forestIcon} alt="forest-icon" />
        <img src={tropicalFallsIcon} alt="tropicalfalls-icon" />
        <img src={desertIcon} alt="desert-icon" />
        <img src={riversideIcon} alt="riverside-icon" />
      </div>
      <div className="my-[3.75rem] flex justify-end text-[26px] gap-[4.75rem] ">
        {/* //Remove className hidden from the classlist */}
        <div className="flex gap-[1.5rem]">
          <img src={sortIcon} alt="sort-icon" />
          <p className="">Sort</p>
        </div>
        <div className="flex gap-[1.5rem]">
          <button
            onClick={() => {
              setShowFilter(!showFilter);
            }}
          >
            <img src={filterIcon} alt="filter-icon" />
          </button>
          <p className="">Filter</p>
        </div>
      </div>
      <div className="flex flex-col xl:flex-row gap-[2rem]">
        {showFilter && <FilterCategories />}
        <div
          className={
            "trip-category-filter-results grid justify-center grid-flow-col lg:grid-flow-dense overflow-scroll lg:grid-cols-3 gap-[2.2rem]  px-5" +
            (showFilter ? " xl:w-[75%] lg:grid-cols-3 " : " lg:grid-cols-4 ")
          }
        >
          {allPackagesData?.map((data, index) => {
            return <TripCard data={data} key={index} />;
          })}
        </div>
      </div>
      <div className="flex justify-end mt-[5rem]">
        <p>See More</p>
      </div>
    </section>
  );
}