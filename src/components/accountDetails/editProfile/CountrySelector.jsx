import React, { useState, useMemo, useEffect } from "react";
import Select from "react-select";
import countryList from "react-select-country-list";

function CountrySelector({ selectedValue, placeRef }) {
  const [value, setValue] = useState();
  const options = useMemo(() => countryList().getData(), []);
  useEffect(() => {
    if (selectedValue && selectedValue !== undefined) {
      setValue(selectedValue);
    }
  }, [selectedValue]);

  const changeHandler = (e) => {
    setValue(e.label);
    placeRef.current.value = e.label;
  };
  return (
    <Select
      options={options}
      value={value}
      onChange={(e) => changeHandler(e)}
      placeholder={value}
    />
  );
}

export default CountrySelector;
