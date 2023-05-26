import "./style.scss";
import React, { useState, useEffect } from "react";
import dropdownIcon from "../../../assets/images/searchResult/tripCategory/drop-drown-icon.svg";
import PriceSlider from "./priceSlider/PriceSlider";
import { filterData } from "./filterSubCategories/data.js";
import FilterSubCategories from "./filterSubCategories/FilterSubCategories";

export default function FilterCategories() {
  const [travelFilterCollapse, settravelFilterCollapse] = useState(false);
  const [ammenitiesFilterCollapse, setammenitiesFilterCollapse] =
    useState(false);

  return (
    <div className="trip-category-filters flex flex-col lg:flex-row flex-wrap justify-between xl:justify-normal xl:flex-col gap-5 xl:gap-20 xl:w-[25%] p-10 lg:p-10 2xl:p-[2rem] bg-[#212b33] rounded-[2rem]">
      <PriceSlider />
      {filterData.map((data, index) => {
        return <FilterSubCategories data={data} key={index} />;
      })}
    </div>
  );
}
