import "./style.scss";
import React, { useEffect, useState, useRef } from "react";
import sortIcon from "../../../assets/images/searchResult/tripCategory/sort-icon.svg";
import filterIcon from "../../../assets/images/searchResult/tripCategory/filter-icon.svg";
import TripCard from "../tripCard/TripCard";
import FilterCategories from "../filterCategories/FilterCategories";
import getAllApiData from "./logic";
import "rc-slider/assets/index.css";
import axios from "axios";

export default function TripCategory() {
  let [allPackagesData, setAllPackagesData] = useState();
  const [allTripCategory, setAllTripCategory] = useState();
  const [showFilter, setShowFilter] = useState();
  const [showMore, setShowMore] = useState(true);
  const [sortActive, setSortActive] = useState(false);
  const [sortClicked, setSortClicked] = useState(false);
  const [filterRequirements, setFilterRequirements] = useState();
  const refOne = useRef(null);
  let sortCriteria = [];

  useEffect(() => {
    console.log(filterRequirements);
  }, [filterRequirements]);

  useEffect(() => {
    getAllApiData(setAllPackagesData);
    setFilterRequirements({
      title: [],
      maximumGuests: [],
      travelType: [],
      tripCategory: [],
      ocassions: [],
      amenities: [],
      discountedPrice: [],
      checkIn: [],
      checkOut: [],
    });
    document.addEventListener("click", hideOnClickOutside, true);
  }, []);

  const hideOnClickOutside = (e) => {
    if (refOne.current && !refOne.current.contains(e.target)) {
      setSortClicked(false);
    }
  };

  const sortFunction = (sortProp, sortOrder) => {
    allPackagesData?.map((data) => {
      data.title = data.title.charAt(0).toUpperCase() + data.title.slice(1);
    });
    if (sortProp === "Price" && sortOrder === "Ascending") {
      setAllPackagesData(
        [...allPackagesData].sort((a, b) => a.price - b.price)
      );
    } else if (sortProp === "Price" && sortOrder === "Descending") {
      setAllPackagesData(
        [...allPackagesData].sort((a, b) => b.price - a.price)
      );
    } else if (sortProp === "Name" && sortOrder === "Ascending") {
      setAllPackagesData(
        [...allPackagesData].sort((a, b) => (a.title > b.title ? 1 : -1))
      );
    } else if (sortProp === "Name" && sortOrder === "Descending") {
      setAllPackagesData(
        [...allPackagesData].sort((a, b) => (a.title > b.title ? -1 : 1))
      );
    }
  };

  const handleSelect = (e) => {
    sortCriteria = e.target.textContent.split(" ");
    sortFunction(sortCriteria[1], sortCriteria[3]);
    setSortClicked(false);
  };

  const showMoreToggler = () => {
    setShowMore(!showMore);
  };
  const sortTrips = () => {
    sortClicked ? setSortClicked(false) : setSortClicked(true);
  };

  const getTripCategory = async () => {
    const response = await axios.get(
      `${process.env.REACT_APP_API_HOST}get-feature/category`
    );
    setAllTripCategory(response.data.data);
  };

  useEffect(() => {
    getTripCategory();
  }, []);

  return (
    <section className="trip-category">
      <div className="flex justify-center 2xl:justify-between flex-wrap gap-10 lg:gap-12 trip-category-icons">
        {/* //Remove className "Details from the classlist" */}
        {allTripCategory?.map((response, index) => {
          return (
            <div key={index} className="category">
              <img
                // src={response.icon.url}
                alt="category"
                className="category-icon"
              />
              <p className="text-center text-2xl category-title">
                {response.title}
              </p>
            </div>
          );
        })}
      </div>
      <div className="my-[3.75rem] flex justify-start relative items-start text-[26px] gap-[4.75rem] ">
        <div className="flex flex-col gap-[1.5rem] ">
          <button onClick={sortTrips}>
            <div className="flex justify-center relative gap-[1.5rem]">
              <img src={sortIcon} alt="sort-icon" />
              <p className="">Sort</p>
            </div>
          </button>
          <ul
            ref={refOne}
            className={
              "bg-transparent flex flex-col gap-[1rem] sort-list absolute z-50 top-[3rem] p-10 outline-none " +
              (sortClicked ? "flex" : "hidden")
            }
          >
            <li onClick={handleSelect}>By Price - Low to High</li>
            <li onClick={handleSelect}>By Price - High to Low</li>
            <li onClick={handleSelect}>By Name - A - Z</li>
            <li onClick={handleSelect}>By Name - Z - A</li>
          </ul>
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
      <div className="flex flex-col xl:flex-row gap-[2rem] ">
        {showFilter && (
          <FilterCategories
            filterRequirements={filterRequirements}
            setFilterRequirements={setFilterRequirements}
          />
        )}
        <div
          className={
            "trip-category-filter-results all-trip-list grid justify-center grid-flow-col overflow-scroll gap-[2.2rem] md:h-[56rem] overflow-y-scroll px-5" +
            (showFilter ? " xl:w-[75%]" : "")
          }
        >
          {showMore
            ? allPackagesData?.slice(0, 8).map((data, index) => {
                return <TripCard data={data} key={index} />;
              })
            : allPackagesData?.map((data, index) => {
                return <TripCard data={data} key={index} />;
              })}
        </div>
      </div>
      <div className="flex justify-end mt-[5rem] show-more">
        <p onClick={showMoreToggler}>{showMore ? "See More" : "See Less"}</p>
      </div>
    </section>
  );
}
