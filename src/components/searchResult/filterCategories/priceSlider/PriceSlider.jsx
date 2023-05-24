import React from "react";
import { useState, useEffect } from "react";
import Slider from "rc-slider";

export default function PriceSlider() {
  const [filterSliderValue, setFilterSliderValue] = useState(0);

  const onChangeEventTriggered = (newValue) => {
    console.log(`${newValue}`);
    setFilterSliderValue(newValue);
  };

  return (
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
  );
}
