// import { format } from "path";
import React, { useEffect, useState } from "react";
import { Calendar } from "react-date-range";
import { format } from "date-fns";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import "./style.scss";

export default function DatePicker({ type }) {
  const [date, setDate] = useState();
  const [showDatePicker, setShowDatePicker] = useState(false);

  const handleChange = (date) => {
    setDate(format(date, "dd/MM/yyyy"));
    setShowDatePicker(false);
  };

  useEffect(() => {
    setDate(format(new Date(), "dd/MM/yyyy"));
  }, []);

  return (
    <div className="xl:w-[400px] date-container flex flex-col gap-2 lg:border-l-[2px] border-black lg:pl-5">
      <h4>{type}</h4>
      <input
        className="bg-transparent"
        type="text"
        value={date}
        onClick={() => {
          setShowDatePicker(!showDatePicker);
        }}
        readOnly
      />
      {showDatePicker && (
        <Calendar className="date" date={new Date()} onChange={handleChange} />
      )}
    </div>
  );
}
