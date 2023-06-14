import React, { useEffect, useState, useRef } from "react";

import "./style.scss";
import Header from "../../components/tripsPage/header/Header";
import TripCategory from "../../components/searchResult/tripCategory/TripCategory";

export default function Trips() {
  const [checkinDate, setCheckinDate] = useState("");
  const [checkoutDate, setCheckoutDate] = useState("");
  const [tripFilterClicked, setTripFilterClicked] = useState(0);
  const [filterDestination, setFilterDestination] = useState("");

  return (
    <section className="trips pb-[35rem] sm:pb-[20rem]">
      <Header
        setFilterDestination={setFilterDestination}
        tripFilterClicked={tripFilterClicked}
        setTripFilterClicked={setTripFilterClicked}
        setCheckInDate={setCheckinDate}
        setCheckOutDate={setCheckoutDate}
      />
      <TripCategory
        filterDestination={filterDestination}
        tripFilterClicked={tripFilterClicked}
        checkinDate={checkinDate}
        checkOutDate={checkoutDate}
      />
    </section>
  );
}
