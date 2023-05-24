import React from "react";
import { useState, useEffect, useRef } from "react";
import Slider from "rc-slider";
import getAllApiData from "./logic";

export default function PriceSlider() {
  const [filterSliderValue, setFilterSliderValue] = useState(0);
  let allPackagesData = useRef();
  let maxPrice = useRef();
  let minPrice = useRef();

  const [max, setMax] = useState();
  const [min, setMin] = useState();
  const tripPrice = [];

  useEffect(() => {
    priceDataArray();
  }, []);

  const priceDataArray = async () => {
    allPackagesData = await getAllApiData().then((res) => {
      return res;
    });

    allPackagesData?.map((data, index) => {
      tripPrice.push(data.price);
    });
    maxPrice = 0;
    minPrice = tripPrice[0];
    tripPrice.map((data, index) => {
      if (data > maxPrice) {
        maxPrice = data;
      }
      if (data < minPrice) {
        minPrice = data;
      }
    });
    setMax(maxPrice);
    setMin(minPrice);
  };

  const onChangeEventTriggered = (newValue) => {
    console.log(`${newValue}`);
    setFilterSliderValue(newValue);
  };
  return (
    <div className="flex flex-col gap-5 lg:w-1/4 xl:w-full">
      <h4>Price</h4>
      <Slider
        value={filterSliderValue}
        step={1000}
        min={min}
        max={max}
        onChange={onChangeEventTriggered}
      />
      <div className="flex justify-between">
        <span>{min}</span>
        <span>{max}</span>
      </div>
    </div>
  );
}
