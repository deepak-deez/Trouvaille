import "./style.scss";
import React, { useState, useEffect } from "react";
import Slider from "rc-slider";
import dropdownIcon from "../../../assets/images/searchResult/tripCategory/drop-drown-icon.svg";
import { filterData } from "../filterSubCategories/data.js";
import FilterSubCategories from "../filterSubCategories/FilterSubCategories";

export default function FilterCategories() {
  const [travelFilterCollapse, settravelFilterCollapse] = useState(false);
  const [ammenitiesFilterCollapse, setammenitiesFilterCollapse] =
    useState(false);
  const [filterSliderValue, setFilterSliderValue] = useState(0);

  const onChangeEventTriggered = (newValue) => {
    console.log(`${newValue}`);
    setFilterSliderValue(newValue);
  };

  return (
    <div className="trip-category-filters flex flex-col lg:flex-row flex-wrap justify-between xl:justify-normal xl:flex-col gap-5 xl:gap-20 xl:w-[25%] p-10 lg:p-10 2xl:p-[2rem] bg-[#212b33] rounded-[2rem]">
      <div className="flex flex-col gap-5 lg:w-1/4 xl:w-full">
        <h4>Price</h4>
        <Slider
          value={filterSliderValue}
          step={1}
          min={0}
          max={22500}
          onChange={onChangeEventTriggered}
        />
        <div className="flex justify-between">
          <span>{filterSliderValue}</span>
          <span>22500</span>
        </div>
      </div>
      {filterData.map((data, index) => {
        return <FilterSubCategories data={data} key={index} />;
      })}
    </div>
  );
}
