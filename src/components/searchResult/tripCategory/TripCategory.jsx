import "./style.scss";
import "../../../style/animations.scss";
import React, { useEffect, useState, useRef } from "react";
import sortIcon from "../../../assets/images/searchResult/tripCategory/sort-icon.svg";
import filterIcon from "../../../assets/images/searchResult/tripCategory/filter-icon.svg";
import TripCard from "../tripCard/TripCard";
import FilterCategories from "../filterCategories/FilterCategories";
import { getAllApiData, getFilteredData, sortData } from "./logic";
import "rc-slider/assets/index.css";
import defaultCategoryImg from "../../../assets/images/searchResult/tripCategory/hills-icon.svg";
import axios from "axios";

export default function TripCategory({
  checkinDate,
  checkOutDate,
  tripFilterClicked,
  filterDestination,
  filterPerson,
}) {
  const [allPackagesData, setAllPackagesData] = useState();
  const [allTripCategory, setAllTripCategory] = useState();
  const [showFilter, setShowFilter] = useState(false);
  const [closingAnimation, setClosingAnimation] = useState(false);
  const [showMore, setShowMore] = useState(true);
  const [sortClicked, setSortClicked] = useState(false);
  const [categoryFilter, setCategoryFilter] = useState([]);
  const [filterRequirements, setFilterRequirements] = useState({
    title: [],
    maximumGuests: "",
    travelType: [],
    tripCategory: [],
    occasions: [],
    amenities: [],
    price: "",
    checkIn: "",
    checkOut: "",
  });

  useEffect(() => {
    if (filterPerson !== "") handleFilterRequirements();
  }, [filterPerson]);

  useEffect(() => {
    handleFilterRequirements();
  }, [filterDestination]);

  useEffect(() => {
    if (tripFilterClicked > 0) {
      handleFilterRequirements();
    }
  }, [tripFilterClicked]);

  const handleFilterRequirements = () => {
    const setFilterRequirementsCopy = { ...filterRequirements };
    setFilterRequirementsCopy.checkIn = checkinDate;
    setFilterRequirementsCopy.checkOut = checkOutDate;
    setFilterRequirementsCopy.title = filterDestination;
    setFilterRequirementsCopy.maximumGuests = filterPerson;
    setFilterRequirementsCopy.tripCategory = categoryFilter;
    setFilterRequirements(setFilterRequirementsCopy);
  };

  const refOne = useRef(null);

  useEffect(() => {
    console.log(filterRequirements);
    try {
      getFilteredData(filterRequirements, setAllPackagesData);
    } catch (error) {
      console.log(error);
    }
  }, [filterRequirements]);

  useEffect(() => {
    getAllApiData(setAllPackagesData);
    document.addEventListener("click", hideOnClickOutside, true);
  }, []);

  const hideOnClickOutside = (e) => {
    if (refOne.current && !refOne.current.contains(e.target)) {
      setSortClicked(false);
    }
  };

  const handleFilterStateChange = () => {
    if (showFilter) {
      setClosingAnimation(true);
      setTimeout(() => {
        setShowFilter(false);
        setClosingAnimation(false);
      }, 500);
    } else {
      setShowFilter(true);
    }
  };

  const handleSortSelection = (e) => {
    const sortOrder = e.target.getAttribute("data-sort-order");
    const sortCriteria = e.target.getAttribute("data-sort-category");
    sortData(allPackagesData, setAllPackagesData, sortCriteria, sortOrder);
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

  const handleClickedCategory = (e) => {
    const targetSelected = e.target.parentElement.getAttribute(
      "data-category-selected"
    );

    if (categoryFilter.includes(targetSelected)) {
      const categoryIndex = categoryFilter.indexOf(targetSelected);
      categoryFilter.splice(categoryIndex, 1);
    } else {
      categoryFilter.push(e.target.parentElement.lastChild.textContent);
    }
    setCategoryFilter(categoryFilter);
    e.target.classList.toggle("border-transparent");
    e.target.classList.toggle("border-amber-400");
    e.target.parentElement.lastChild.classList.toggle("text-[orange]");
    handleFilterRequirements();
  };

  return (
    <section className="trip-category">
      <div className="flex justify-center 2xl:justify-between flex-wrap gap-10 lg:gap-12 trip-category-icons">
        {/* //Remove className "Details from the classlist" */}
        {allTripCategory?.map((response, index) => {
          let imgSrc;
          console.log("Icon : ", response.icon);
          response.icon
            ? (imgSrc = response.icon)
            : (imgSrc = defaultCategoryImg);
          return (
            <div
              onClick={handleClickedCategory}
              className="category"
              key={index}
              data-category-selected={response.title}
            >
              <img
                // src={imgSrc}
                alt={response.title}
                className="category-icon border-[5px] rounded-[30%] border-transparent"
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
          <button onClick={sortTrips} ref={refOne}>
            <div className="flex justify-center relative gap-[1.5rem]">
              <img src={sortIcon} alt="sort-icon" />
              <p className="">Sort</p>
            </div>
          </button>
          <ul
            className={
              "bg-transparent flex flex-col gap-[1rem] sort-list absolute z-50 top-[3rem] p-10 outline-none " +
              (sortClicked ? "flex" : "hidden")
            }
          >
            <li
              data-sort-category={"price"}
              data-sort-order={"ascending"}
              onClick={handleSortSelection}
            >
              By Price - Low to High
            </li>
            <li
              data-sort-category={"price"}
              data-sort-order={"descending"}
              onClick={handleSortSelection}
            >
              By Price - High to Low
            </li>
            <li
              data-sort-category={"name"}
              data-sort-order={"ascending"}
              onClick={handleSortSelection}
            >
              By Name - A - Z
            </li>
            <li
              data-sort-category={"name"}
              data-sort-order={"descending"}
              onClick={handleSortSelection}
            >
              By Name - Z - A
            </li>
          </ul>
        </div>
        <button onClick={handleFilterStateChange}>
          <div className="flex gap-[1.5rem]">
            <img src={filterIcon} alt="filter-icon" />
            <p className="">Filter</p>
          </div>
        </button>
      </div>
      <div className={"flex flex-col xl:flex-row gap-[2rem] "}>
        <div
          className={
            "trip-category-filters flex flex-col lg:flex-row justify-between xl:justify-normal xl:flex-col gap-5 xl:gap-20 xl:w-[25%] p-10 lg:p-10 2xl:p-[2rem] xl:pb-10 xl:h-[56rem] overflow-y-scroll bg-[#212b33] rounded-[2rem]  openning-animation-y " +
            (showFilter ? "" : "hidden") +
            (closingAnimation ? " closing-animation-y " : "")
          }
        >
          <FilterCategories
            filterRequirements={filterRequirements}
            setFilterRequirements={setFilterRequirements}
          />
        </div>

        <div
          className={
            "trip-category-filter-results all-trip-list grid justify-center grid-flow-col overflow-scroll gap-[2.2rem] md:h-[56rem] overflow-y-scroll px-5 transition-all duration-300" +
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
