import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import shareIcon from "../../../assets/images/searchResult/tripCard/share-icon.svg";
import readMoreIcon from "../../../assets/images/searchResult/tripCard/more-arrow.svg";
import reviewStarIcon from "../../../assets/images/searchResult/tripCard/review-star-icon.svg";
import "./style.scss";

export default function TripCard(props) {
  const [tripIDRef, setTripIDRef] = useState();

  const handleNavigate = (e) => {
    setTripIDRef(e.target.getAttribute("data-trip-id"));
    console.log(tripIDRef);
  };

  return (
    <div className="filter-results-cards" data-trip-id={props.data._id}>
      <img className="share-icon" src={shareIcon} alt="share-icon" />

      <img
        className="filter-results-card-img"
        src={props.data.image.url}
        alt="trip-category-img"
      />

      <div className="flex gap-5 show-detail-text">
        <button onClick={handleNavigate} data-trip-id={props.data._id}>
          <p>Show detail</p>
        </button>
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
