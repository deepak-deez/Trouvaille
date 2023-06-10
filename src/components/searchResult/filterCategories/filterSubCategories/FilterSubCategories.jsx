import React, { useState } from "react";
import dropdownIcon from "../../../../assets/images/searchResult/tripCategory/drop-drown-icon.svg";

export default function FilterSubCategories({
  title,
  data,
  setFilterRequirements,
  filterRequirements,
}) {
  const [filterToggle, setFilterToggle] = useState(false);

  const handleCheckboxChange = (e) => {
    let currentSelections;
    const checkboxValue = e.target.getAttribute("data-filter-name");
    const { checked, value } = e.target; //destructuring the event target
    if (checked) {
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
        <h4>{title}</h4>
        <button className={filterToggle ? " rotate-180 " : ""}>
          <img
            src={dropdownIcon}
            onClick={() => {
              setFilterToggle(!filterToggle);
            }}
            alt="dropdownIcon"
          />
        </button>
      </div>
      {filterToggle && (
        <ul className="flex flex-col gap-5 xl:gap-[1.8rem] xl:text-[20px] mt-[1rem]">
          {data.map((data, index) => {
            return (
              <li className="flex justify-between" key={index}>
                <input
                  type="checkbox"
                  id={"filter_" + data.title}
                  data-filter-name={data.title}
                  onChange={handleCheckboxChange}
                />
                <label htmlFor={"filter_" + data.title}>{data.title}</label>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
