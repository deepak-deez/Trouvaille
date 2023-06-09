import "./style.scss";
import React, { useState, useEffect } from "react";
import PriceSlider from "./priceSlider/PriceSlider";
import FilterSubCategories from "./filterSubCategories/FilterSubCategories";
import axios from "axios";

export default function FilterCategories() {
  const filterApiUrl =
    process.env.REACT_APP_API_HOST +
    "get-options/category/occasion/amenity/travel";

  const [filterData, setFilterData] = useState();
  const [ocassionData, setOcassionData] = useState();
  const [ammenityData, setAmmenityData] = useState();
  const [travelTypeData, setTravelTypeData] = useState();

  useEffect(() => {
    getFilterData();
    setFilterDatas();
  }, []);

  const getFilterData = async () => {
    const response = await axios.get(filterApiUrl);
    setFilterData(response?.data?.data);
  };

  const setFilterDatas = () => {
    setOcassionData(filterData?.filter((data) => data?.purpose === "occasion"));
    setTravelTypeData(filterData?.filter((data) => data?.purpose === "travel"));
    setAmmenityData(filterData?.filter((data) => data?.purpose === "amenity"));
  };

  return (
    <div className="trip-category-filters flex flex-col lg:flex-row justify-between xl:justify-normal xl:flex-col gap-5 xl:gap-20 xl:w-[25%] p-10 lg:p-10 2xl:p-[2rem] xl:pb-10 xl:h-[56rem] overflow-y-scroll bg-[#212b33] rounded-[2rem]">
      <PriceSlider />
      <FilterSubCategories title={"Ocassion"} data={ocassionData} />
      <FilterSubCategories title={"Amenity"} data={ammenityData} />
      <FilterSubCategories title={"Travel Type"} data={travelTypeData} />
    </div>
  );
}
