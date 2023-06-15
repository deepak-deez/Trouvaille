import React, { useState } from "react";
import dropdownIcon from "../../../../assets/images/searchResult/tripCategory/drop-drown-icon.svg";
import Checkbox from "@mui/material/Checkbox";
import "./style.scss";
import { set } from "date-fns";

export default function FilterSubCategories({
  title,
  data,
  name,
  setFilterRequirements,
  filterRequirements,
}) {
  const [filterToggle, setFilterToggle] = useState(false);
  const [closingAnimation, setClosingAnimation] = useState(false);

  const handleStateChange = () => {
    if (filterToggle) {
      setClosingAnimation(true);
      setTimeout(() => {
        setFilterToggle(!filterToggle);
      }, 500);
    } else {
      setFilterToggle(!filterToggle);
      setClosingAnimation(false);
    }
  };

  const handleCheckboxChange = (e) => {
    let currentSelections;
    const checkboxValue = e.target.name;
    const { checked, value } = e.target; //destructuring the event target
    if (checked) {
      console.log(checkboxValue);
      const setFilterRequirementsCopy = { ...filterRequirements }; //Spreading the state object
      currentSelections = setFilterRequirementsCopy[title]; //Getting the array of the current filter category
      console.log(currentSelections); //Logging the array
      currentSelections.push(checkboxValue); //Pushing the checkbox value to the array
      console.log(setFilterRequirementsCopy[title]);
      setFilterRequirements(setFilterRequirementsCopy); //Setting the state with the new array
    }
    if (!checked) {
      const setFilterRequirementsCopy = { ...filterRequirements }; //Spreading the state object
      currentSelections = setFilterRequirementsCopy[title]; //Getting the array of the current filter category`
      console.log(currentSelections); //Logging the array
      const index = currentSelections.indexOf(checkboxValue); //Getting the index of the checkbox value
      if (index > -1) {
        //Checking if the checkbox value is present in the array
        currentSelections.splice(index, 1); //Removing the checkbox value from the array
      }
      console.log(setFilterRequirementsCopy[title]);
      setFilterRequirements(setFilterRequirementsCopy); //Setting the state with the new array
    }
  };

  return (
    <div className="lg:w-[12rem] xl:w-[auto]">
      <div className="flex justify-between ">
        <h4>{name}</h4>
        <button
          className={filterToggle ? " rotate-180 " : ""}
          onClick={handleStateChange}
        >
          <img src={dropdownIcon} alt="dropdownIcon" />
        </button>
      </div>

      <ul
        className={
          "flex flex-col gap-5 xl:gap-[1.8rem] xl:text-[20px] mt-[1rem] simple-openning-animation-y " +
          (!filterToggle ? " hidden " : "") +
          (closingAnimation ? " simple-closing-animation-y" : "")
        }
      >
        {data?.map((data, index) => {
          return (
            <li className="flex gap-5 " key={index}>
              <Checkbox
                type="checkbox"
                className="filter-checkboxes bg-transparent border border-white text-white"
                id={"filter_" + data.title}
                onChange={handleCheckboxChange}
                name={data.title}
              />
              <label className="my-auto" htmlFor={"filter_" + data.title}>
                {data.title}
              </label>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
