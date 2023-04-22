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

export default function TripCategory() {
  const [ocassionFilterCollapse, setocassionFilterCollapse] = useState(false);
  const [travelFilterCollapse, settravelFilterCollapse] = useState(false);
  const [ammenitiesFilterCollapse, setammenitiesFilterCollapse] =
    useState(false);

  return (
    <>
      <section className="trip-category 2xl:mx-[24rem]">
        <div className="flex justify-between flex-wrap">
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
        <div className="flex gap-[2rem]">
          <div className="filter-categories w-[25%] p-[2.25rem] text-[24px]">
            <h4 className="text-[1.5rem]">Price</h4>
            <p className="my-[20px]">Slider here</p>
            <div className="flex justify-between">
              <p>₹5,241</p>
              <p>₹22,500</p>
            </div>
            <div className="flex justify-between mt-[3.4rem]">
              <p>Ocassion</p>
              <button
                onClick={() => {
                  setocassionFilterCollapse(!ocassionFilterCollapse);
                }}
              >
                <img src={dropdownIcon} alt="drop-down-Icon" />
              </button>
            </div>
            {ocassionFilterCollapse && (
              <ul className="flex flex-col gap-[1.8rem] text-[20px] mt-[1rem]">
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
            <div className="flex justify-between mt-[3.4rem]">
              <p>Travel Type</p>
              <button
                onClick={() => {
                  settravelFilterCollapse(!travelFilterCollapse);
                }}
              >
                <img src={dropdownIcon} alt="drop-down-Icon" />
              </button>
            </div>
            {travelFilterCollapse && (
              <ul className="flex flex-col gap-[1.8rem] text-[20px] mt-[1rem]">
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
            <div className="flex justify-between mt-[3.4rem]">
              <p>Ammenities</p>
              <button
                onClick={() => {
                  setammenitiesFilterCollapse(!ammenitiesFilterCollapse);
                }}
              >
                <img src={dropdownIcon} alt="drop-down-Icon" />
              </button>
            </div>
            {ammenitiesFilterCollapse && (
              <ul className="flex flex-col gap-[1.8rem] text-[20px] mt-[1rem]">
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
          <div className="filter-results w-[75%]">
            <div className="flex gap-[2rem]">
              <div>
                <img src={tripCategoryImg1} alt="trip-category-img" />
              </div>
              <div>
                <img src={tripCategoryImg2} alt="trip-category-img" />
              </div>
              <div>
                <img src={tripCategoryImg3} alt="trip-category-img" />
              </div>
            </div>
            <div className="flex gap-[2rem] mt-[2rem]">
              <div>
                <img src={tripCategoryImg4} alt="trip-category-img" />
              </div>
              <div>
                <img src={tripCategoryImg5} alt="trip-category-img" />
              </div>
              <div>
                <img src={tripCategoryImg6} alt="trip-category-img" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
