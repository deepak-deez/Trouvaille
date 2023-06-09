import React, { useState } from "react";
import dropdownIcon from "../../../../assets/images/searchResult/tripCategory/drop-drown-icon.svg";

export default function FilterSubCategories({ title, data }) {
  const [filterToggle, setFilterToggle] = useState(false);

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
                <input type="checkbox" />
                <label htmlFor="">{data.title}</label>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
