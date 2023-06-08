import React, { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import shareIcon from "../../../assets/images/searchResult/tripCard/share-icon.svg";
import readMoreIcon from "../../../assets/images/searchResult/tripCard/more-arrow.svg";
import reviewStarIcon from "../../../assets/images/searchResult/tripCard/review-star-icon.svg";
import "./style.scss";

export default function TripCard(props) {
  let tripIDRef = useRef();
  const navigate = useNavigate();

  // console.log(props.data.image.url);
  const handleNavigate = (e) => {
    tripIDRef = e.target.getAttribute("data-trip-id");
    navigate("/tripDetails/" + props.data._id);
  };

  // console.log(props);
  return (
    <div className="filter-results-cards">
      <img className="share-icon" src={shareIcon} alt="share-icon" />
      {/* Remove the classname Hidden from the classlist */}
      <img
        className="filter-results-card-img cursor-pointer"
        src={props.data.image.url}
        alt="trip-category-img"
        data-trip-id={props.data._id}
        onClick={handleNavigate}
      />
      <div className="gap-5 hidden show-detail-text cursor-pointer">
        <Link to={"/tripDetails/" + props.data._id}>Show detail</Link>
        <img src={readMoreIcon} alt="read-more-icon" />
      </div>
      <div className="flex gap-2 review-stars">
        <img src={reviewStarIcon} alt="review-start-icon" />
        <p>4.2</p>
      </div>
      <div className="result-card-details">
        <p className="location">{props.data.title}</p>
        <p className="trip-date">{props.data.duration} 4 People</p>
        <div className="flex gap-3">
          <p className="trip-cost">{props.data.price}/-</p>
          <p className="per-night">Night</p>
        </div>
      </div>
    </div>
  );
}
