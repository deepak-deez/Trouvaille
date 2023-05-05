import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./child.scss";
import seaIcon from "../../../assets/images/tripsPage/tripCategory/sea-icon.svg";
import hillsIcon from "../../../assets/images/tripsPage/tripCategory/hills-icon.svg";
import forestIcon from "../../../assets/images/tripsPage/tripCategory/forest-icon.svg";
import tropicalFallsIcon from "../../../assets/images/tripsPage/tripCategory/tropical-falls.svg";
import desertIcon from "../../../assets/images/tripsPage/tripCategory/desert-icon.svg";
import riversideIcon from "../../../assets/images/tripsPage/tripCategory/riverside-icon.svg";
import sortIcon from "../../../assets/images/tripsPage/tripCategory/sort-icon.svg";
import filterIcon from "../../../assets/images/tripsPage/tripCategory/filter-icon.svg";
import dropdownIcon from "../../../assets/images/tripsPage/tripCategory/drop-drown-icon.svg";
import tripCategoryImg1 from "../../../assets/images/tripsPage/tripCategory/trip-category-card-img-1.png";
import tripCategoryImg2 from "../../../assets/images/tripsPage/tripCategory/trip-category-card-img-2.png";
import tripCategoryImg3 from "../../../assets/images/tripsPage/tripCategory/trip-category-card-img-3.png";
import tripCategoryImg4 from "../../../assets/images/tripsPage/tripCategory/trip-category-card-img-4.png";
import tripCategoryImg5 from "../../../assets/images/tripsPage/tripCategory/trip-category-card-img-5.png";
import tripCategoryImg6 from "../../../assets/images/tripsPage/tripCategory/trip-category-card-img-6.png";
import readMoreIcon from "../../../assets/images/tripsPage/tripCategory/more-arrow.svg";
import reviewStarIcon from "../../../assets/images/tripsPage/tripCategory/review-star-icon.svg";
import shareIcon from "../../../assets/images/tripsPage/tripCategory/share-icon.svg";
import Slider, { Range } from "rc-slider";
import "rc-slider/assets/index.css";

export default function TripCategory() {
  const [ocassionFilterCollapse, setocassionFilterCollapse] = useState(false);
  const [travelFilterCollapse, settravelFilterCollapse] = useState(false);
  const [ammenitiesFilterCollapse, setammenitiesFilterCollapse] =
    useState(false);

  return (
    <section className="trip-category 2xl:mt-[20rem]">
      <h1 className="bg-[#BC4E37]">Choose your exotic holidays</h1>
      <div className="flex justify-center 2xl:justify-between flex-wrap gap-10 lg:gap-12 trip-category-icons 2xl:mt-[6rem]">
        <img src={seaIcon} alt="sea-icon" />
        <img src={hillsIcon} alt="hills-icon" />
        <img src={forestIcon} alt="forest-icon" />
        <img src={tropicalFallsIcon} alt="tropicalfalls-icon" />
        <img src={desertIcon} alt="desert-icon" />
        <img src={riversideIcon} alt="riverside-icon" />
      </div>
      <div className="my-[3.75rem] flex justify-between xl:justify-end px-5 xl:px-0 text-[26px] gap-[4.75rem]">
        <div className="flex gap-[1.5rem]">
          <img src={sortIcon} alt="sort-icon" />
          <p className="">Sort</p>
        </div>
        <div className="flex gap-[1.5rem]">
          <img src={filterIcon} alt="filter-icon" />
          <p className="">Filter</p>
        </div>
      </div>
      <div className="flex flex-col xl:flex-row gap-[2rem]">
        <div className="trip-category-filters flex flex-col lg:flex-row flex-wrap justify-between xl:justify-normal xl:flex-col gap-5 xl:gap-20 xl:w-[25%] p-10 lg:p-5 2xl:p-[2rem]">
          <div className="flex flex-col gap-5">
            <h4>Price</h4>
            <Slider />
            <div className="flex justify-between">
              <span>₹5,241</span>
              <span>₹22,500</span>
            </div>
          </div>
          <div className="lg:w-[12rem] xl:w-[auto]">
            <div className="flex justify-between ">
              <h4>Ocassion</h4>
              <button>
                <img
                  src={dropdownIcon}
                  onClick={() => {
                    setocassionFilterCollapse(!ocassionFilterCollapse);
                  }}
                  alt="dropdownIcon"
                />
              </button>
            </div>
            {ocassionFilterCollapse && (
              <ul className="flex flex-col gap-5 xl:gap-[1.8rem] xl:text-[20px] mt-[1rem]">
                <li className="flex justify-between">
                  <input type="checkbox" />
                  <label htmlFor="">Family Vacation</label>
                </li>
                <li className="flex justify-between">
                  <input type="checkbox" />
                  <label htmlFor="">Romantic Gateway</label>
                </li>
                <li className="flex justify-between">
                  <input type="checkbox" />
                  <label htmlFor="">Adventure</label>
                </li>
                <li className="flex justify-between">
                  <input type="checkbox" />
                  <label htmlFor="">Business</label>
                </li>
                <li className="flex justify-between">
                  <input type="checkbox" />
                  <label htmlFor="">Relaxation</label>
                </li>
              </ul>
            )}
          </div>
          <div className="lg:w-[12rem] xl:w-[auto]">
            <div className="flex justify-between">
              <h4>Travel Type</h4>
              <button>
                <img
                  src={dropdownIcon}
                  onClick={() => {
                    settravelFilterCollapse(!travelFilterCollapse);
                  }}
                  alt="dropdownIcon"
                />
              </button>
            </div>
            {travelFilterCollapse && (
              <ul className="flex flex-col gap-5 xl:gap-[1.8rem] xl:text-[20px] mt-[1rem]">
                <li className="flex justify-between">
                  <input type="checkbox" />
                  <label htmlFor="">Independent Tour</label>
                </li>
                <li className="flex justify-between">
                  <input type="checkbox" />
                  <label htmlFor="">Escorted tour</label>
                </li>
              </ul>
            )}
          </div>
          <div className="lg:w-[12rem] xl:w-[auto]">
            <div className="flex justify-between">
              <h4>Ammenities</h4>
              <button>
                <img
                  src={dropdownIcon}
                  onClick={() => {
                    setammenitiesFilterCollapse(!ammenitiesFilterCollapse);
                  }}
                  alt="dropdownIcon"
                />
              </button>
            </div>
            {ammenitiesFilterCollapse && (
              <ul className="flex flex-col gap-5 xl:gap-[1.8rem] xl:text-[20px] mt-[1rem]">
                <li className="flex justify-between">
                  <input type="checkbox" />
                  <label htmlFor="">Some Option</label>
                </li>
                <li className="flex justify-between">
                  <input type="checkbox" />
                  <label htmlFor="">Some Option</label>
                </li>
              </ul>
            )}
          </div>
        </div>
        <div
          className="trip-category-filter-results grid grid-flow-col lg:grid-flow-dense
            overflow-scroll lg:grid-cols-3 gap-[2.2rem] xl:w-[75%] px-5"
        >
          <div className="filter-results-cards">
            <img className="share-icon" src={shareIcon} alt="share-icon" />
            <img
              className="filter-results-card-img"
              src={tripCategoryImg1}
              alt="trip-category-img"
            />
            <div className="flex gap-5 show-detail-text">
              <Link to="/tripDetails">
                <p>Show detail</p>
              </Link>
              <img src={readMoreIcon} alt="read-more-icon" />
            </div>
            <div className="flex gap-2 review-stars">
              <img src={reviewStarIcon} alt="review-start-icon" />
              <p>4.2</p>
            </div>
            <div className="result-card-details">
              <p className="location">Kendhoo, Maldives</p>
              <p className="trip-date">24 - 31 August 4 People</p>
              <div className="flex gap-3">
                <p className="trip-cost">26,978/-</p>
                <p className="per-night">Night</p>
              </div>
            </div>
          </div>
          <div className="filter-results-cards">
            <img className="share-icon" src={shareIcon} alt="share-icon" />
            <img
              className="filter-results-card-img"
              src={tripCategoryImg2}
              alt="trip-category-img"
            />
            <div className="flex gap-5 show-detail-text">
              <Link to="/tripDetails">
                <p>Show detail</p>
              </Link>
              <img src={readMoreIcon} alt="read-more-icon" />
            </div>
            <div className="flex gap-2 review-stars">
              <img src={reviewStarIcon} alt="review-start-icon" />
              <p>4.2</p>
            </div>
            <div className="result-card-details">
              <p className="location">Kendhoo, Maldives</p>
              <p className="trip-date">24 - 31 August 4 People</p>
              <div className="flex gap-3">
                <p className="trip-cost">26,978/-</p>
                <p className="per-night">Night</p>
              </div>
            </div>
          </div>
          <div className="filter-results-cards">
            <img className="share-icon" src={shareIcon} alt="share-icon" />
            <img
              className="filter-results-card-img"
              src={tripCategoryImg3}
              alt="trip-category-img"
            />
            <div className="flex gap-5 show-detail-text">
              <Link to="/tripDetails">
                <p>Show detail</p>
              </Link>
              <img src={readMoreIcon} alt="read-more-icon" />
            </div>
            <div className="flex gap-2 review-stars">
              <img src={reviewStarIcon} alt="review-start-icon" />
              <p>4.2</p>
            </div>
            <div className="result-card-details">
              <p className="location">Kendhoo, Maldives</p>
              <p className="trip-date">24 - 31 August 4 People</p>
              <div className="flex gap-3">
                <p className="trip-cost">26,978/-</p>
                <p className="per-night">Night</p>
              </div>
            </div>
          </div>
          <div className="filter-results-cards">
            <img
              className="filter-results-card-img"
              src={tripCategoryImg4}
              alt="trip-category-img"
            />
            <div className="flex gap-5 show-detail-text">
              <Link to="/tripDetails">
                <p>Show detail</p>
              </Link>
              <img src={readMoreIcon} alt="read-more-icon" />
            </div>
            <div className="flex gap-2 review-stars">
              <img src={reviewStarIcon} alt="review-start-icon" />
              <p>4.2</p>
            </div>
            <div className="result-card-details">
              <p className="location">Kendhoo, Maldives</p>
              <p className="trip-date">24 - 31 August 4 People</p>
              <div className="flex gap-3">
                <p className="trip-cost">26,978/-</p>
                <p className="per-night">Night</p>
              </div>
            </div>
          </div>
          <div className="filter-results-cards">
            <img className="share-icon" src={shareIcon} alt="share-icon" />
            <img
              className="filter-results-card-img"
              src={tripCategoryImg5}
              alt="trip-category-img"
            />
            <div className="flex gap-5 show-detail-text">
              <Link to="/tripDetails">
                <p>Show detail</p>
              </Link>
              <img src={readMoreIcon} alt="read-more-icon" />
            </div>
            <div className="flex gap-2 review-stars">
              <img src={reviewStarIcon} alt="review-start-icon" />
              <p>4.2</p>
            </div>
            <div className="result-card-details">
              <p className="location">Kendhoo, Maldives</p>
              <p className="trip-date">24 - 31 August 4 People</p>
              <div className="flex gap-3">
                <p className="trip-cost">26,978/-</p>
                <p className="per-night">Night</p>
              </div>
            </div>
          </div>
          <div className="filter-results-cards">
            <img className="share-icon" src={shareIcon} alt="share-icon" />
            <img
              className="filter-results-card-img"
              src={tripCategoryImg6}
              alt="trip-category-img"
            />
            <div className="flex gap-5 show-detail-text">
              <Link to="/tripDetails">
                <p>Show detail</p>
              </Link>
              <img src={readMoreIcon} alt="read-more-icon" />
            </div>
            <div className="flex gap-2 review-stars">
              <img src={reviewStarIcon} alt="review-start-icon" />
              <p>4.2</p>
            </div>
            <div className="result-card-details">
              <p className="location">Kendhoo, Maldives</p>
              <p className="trip-date">24 - 31 August 4 People</p>
              <div className="flex gap-3">
                <p className="trip-cost">26,978/-</p>
                <p className="per-night">Night</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-end mt-[5rem]">
        <p>See More</p>
      </div>
    </section>
  );
}
