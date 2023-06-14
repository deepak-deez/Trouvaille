import React, { useEffect, useState, useRef } from "react";

import "./style.scss";
import Header from "../../components/tripsPage/header/Header";
import TripCategory from "../../components/searchResult/tripCategory/TripCategory";

export default function Trips() {
  const [checkinDate, setCheckinDate] = useState("");
  const [checkoutDate, setCheckoutDate] = useState("");
  const [dateCheckinUndefined, setCheckinDateUnfined] = useState(0);
  const [dateCheckoutUndefined, setCheckoutDateUnfined] = useState(0);
  const [tripFilterClicked, setTripFilterClicked] = useState();

  return (
    <section className="trips pb-[35rem] sm:pb-[20rem]">
      <Header
        tripFilterClicked={tripFilterClicked}
        setTripFilterClicked={setTripFilterClicked}
        dateCheckinUndefined={dateCheckinUndefined}
        dateCheckoutUndefined={dateCheckoutUndefined}
        setCheckinDateUnfined={setCheckinDateUnfined}
        setCheckoutDateUnfined={setCheckoutDateUnfined}
        setCheckInDate={setCheckinDate}
        setCheckOutDate={setCheckoutDate}
      />
      <TripCategory
        tripFilterClicked={tripFilterClicked}
        dateCheckinUndefined={dateCheckinUndefined}
        dateCheckoutUndefined={dateCheckoutUndefined}
        checkinDate={checkinDate}
        checkOutDate={checkoutDate}
      />
    </section>
  );
}
