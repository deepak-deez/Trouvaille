import React, { useEffect } from "react";
import "./style.scss";
import TripCategory from "../../components/searchResult/tripCategory/TripCategory";
import Header from "../../components/searchResult/header/Header";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function SearchResult() {
  const { userDetails, error,loading } = useSelector((state) => state.user);
  const navigate = useNavigate()
  useEffect(()=>{
    if(!userDetails)
    navigate("/")
  })

  return (
    <section className="search-result pb-[35rem] sm:pb-[20rem]">
      <Header />
      <TripCategory />
    </section>
  );
}
