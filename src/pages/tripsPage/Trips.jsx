import React, { useEffect, useState, useRef } from "react";

import "./style.scss";
import Header from "../../components/tripsPage/header/Header";
import TripCategory from "../../components/searchResult/tripCategory/TripCategory";

export default function Trips() {
  const [checkinDate, setCheckinDate] = useState();
  const [checkoutDate, setCheckoutDate] = useState();
  const [dateCheckinUndefined, setCheckinDateUnfined] = useState(false);
  const [dateCheckoutUndefined, setCheckoutDateUnfined] = useState(false);

  return (
    <section className="trips pb-[35rem] sm:pb-[20rem]">
      <Header
        setCheckinDateUnfined={setCheckinDateUnfined}
        setCheckoutDateUnfined={setCheckoutDateUnfined}
        setCheckInDate={setCheckinDate}
        setCheckOutDate={setCheckoutDate}
      />
      <TripCategory
        dateCheckinUndefined={dateCheckinUndefined}
        dateCheckoutUndefined={dateCheckoutUndefined}
        checkinDate={checkinDate}
        checkOutDate={checkoutDate}
      />
    </section>
  );
}
