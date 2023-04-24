import React, { useState } from "react";
import "./tripCategory.scss";
import seaIcon from "../../assets/images/tripCategory/sea-icon.svg";
import hillsIcon from "../../assets/images/tripCategory/hills-icon.svg";
import forestIcon from "../../assets/images/tripCategory/forest-icon.svg";
import tropicalFallsIcon from "../../assets/images/tripCategory/tropical-falls.svg";
import desertIcon from "../../assets/images/tripCategory/desert-icon.svg";
import riversideIcon from "../../assets/images/tripCategory/riverside-icon.svg";
import sortIcon from "../../assets/images/tripCategory/sort-icon.svg";
import filterIcon from "../../assets/images/tripCategory/filter-icon.svg";
import dropdownIcon from "../../assets/images/tripCategory/drop-drown-icon.svg";
import tripCategoryImg1 from "../../assets/images/tripCategory/trip-category-card-img-1.png";
import tripCategoryImg2 from "../../assets/images/tripCategory/trip-category-card-img-2.png";
import tripCategoryImg3 from "../../assets/images/tripCategory/trip-category-card-img-3.png";
import tripCategoryImg4 from "../../assets/images/tripCategory/trip-category-card-img-4.png";
import tripCategoryImg5 from "../../assets/images/tripCategory/trip-category-card-img-5.png";
import tripCategoryImg6 from "../../assets/images/tripCategory/trip-category-card-img-6.png";
import Slider, { Range } from "rc-slider";
import "rc-slider/assets/index.css";

export default function TripCategory() {
  const [ocassionFilterCollapse, setocassionFilterCollapse] = useState(false);
  const [travelFilterCollapse, settravelFilterCollapse] = useState(false);
  const [ammenitiesFilterCollapse, setammenitiesFilterCollapse] =
    useState(false);

  return (
    <>
      <section className="trip-category lg:mx-[10rem] 2xl:mx-[24rem]">
        <div className="flex justify-center 2xl:justify-between flex-wrap gap-10 lg:gap-12 trip-category-icons">
          <img src={seaIcon} alt="sea-icon" />
          <img src={hillsIcon} alt="hills-icon" />
          <img src={forestIcon} alt="forest-icon" />
          <img src={tropicalFallsIcon} alt="tropicalfalls-icon" />
          <img src={desertIcon} alt="desert-icon" />
          <img src={riversideIcon} alt="riverside-icon" />
        </div>
        <div className="my-[3.75rem] flex justify-end text-[26px] gap-[4.75rem]">
          <div className="flex gap-[1.5rem]">
            <img src={sortIcon} alt="sort-icon" />
            <p className="">Sort</p>
          </div>
          <div className="flex gap-[1.5rem]">
            <img src={filterIcon} alt="filter-icon" />
            <p className="">Filter</p>
          </div>
        </div>
        <div className="trip-category-filters flex flex-col lg:flex-row flex-wrap justify-between xl:flex-col gap-5 xl:gap-20 xl:w-[25%]">
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
              <ul className="flex flex-col xl:gap-[1.8rem] xl:text-[20px] mt-[1rem]">
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
              <ul className="flex flex-col xl:gap-[1.8rem] xl:text-[20px] mt-[1rem]">
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
              <h4>Travel Type</h4>
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
              <ul className="flex flex-col xl:gap-[1.8rem] xl:text-[20px] mt-[1rem]">
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
      </section>
    </>
  );
}
