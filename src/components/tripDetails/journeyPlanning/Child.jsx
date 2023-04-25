import React from "react";
import "./child.scss";
import divingIcon from "../../../assets/images/journeyPlanning/diving-icon.svg";
import waveIcon from "../../../assets/images/journeyPlanning/wave-icon.svg";
import warningIcon from "../../../assets/images/journeyPlanning/warning-icon.svg";
import coupleIcon from "../../../assets/images/journeyPlanning/couple-icon.svg";
import candleIcon from "../../../assets/images/journeyPlanning/candle-icon.svg";
import beachIcon from "../../../assets/images/journeyPlanning/beach-icon.svg";
import coffeeLoveIcon from "../../../assets/images/journeyPlanning/coffeeLoveIcon.svg";
import hikingIcon from "../../../assets/images/journeyPlanning/hikingIcon.svg";
import businessIcon from "../../../assets/images/journeyPlanning/businessIcon.svg";
import bedIcon from "../../../assets/images/journeyPlanning/bedIcon.svg";

export default function Child() {
  let date = "";
  return (
    <>
      <section className="md:px-10 xl:mx-28 2xl:mx-44 min-[1920px]:mx-[20rem]">
        <h1 className="mt-[5rem] text-center lg:text-start">Itinerary</h1>
        <ul className="flex flex-wrap justify-center lg:justify-start sm:flex-row gap-5 text-[#838597] my-[3rem]">
          <li>Maximum guests 12</li>
          <li>Explore 5 places</li>
          <li>Available for 6 guests</li>
        </ul>
        <h4 className="mb-[2rem] text-2xl">Dates</h4>
        <ul className="available-dates flex justify-center items-center lg:justify-between flex-wrap gap-4 lg:gap-5">
          <li className="">
            <h4>22</h4>
            <p>July</p>
          </li>
          <li className="">
            <h4>23</h4>
            <p>July</p>
          </li>
          <li className="">
            <h4>24</h4>
            <p>July</p>
          </li>
          <li className="">
            <h4>25</h4>
            <p>July</p>
          </li>
          <li className="">
            <h4>26</h4>
            <p>July</p>
          </li>
          <li className="">
            <h4>27</h4>
            <p>July</p>
          </li>
          <li className="">
            <h4>28</h4>
            <p>July</p>
          </li>
          <li className="">
            <h4>29</h4>
            <p>July</p>
          </li>
        </ul>
        <p className="my-[3rem]">
          Till now 4 suits empty for this day, hurry up!
        </p>
        <div className="trip-highlights-container my-5">
          <h2>Highlights of the package</h2>
          <div className="flex flex-wrap gap-10">
            <div className="flex gap-7">
              <img src={divingIcon} alt="diving-icon" />
              <div className="text-[#B4BBC1]">
                <h4 className=" pt-10 text-[#B4BBC1]">Dive right in</h4>
                <p className="mt-[2rem]">
                  This is one of the few places in the area with a pool.
                </p>
              </div>
            </div>
            <div className="flex gap-7">
              <img src={waveIcon} alt="diving-icon" />
              <div className="text-[#B4BBC1]">
                <h4 className=" pt-10 text-[#B4BBC1]">
                  Sea Cuisines available
                </h4>
                <p className="mt-[2rem]">
                  This is one of the few places in the area with a pool.
                </p>
              </div>
            </div>
            <div className="flex gap-7">
              <img src={coupleIcon} alt="diving-icon" />
              <div className="text-[#B4BBC1]">
                <h4 className=" pt-10 text-[#B4BBC1]">Couple Friendly</h4>
                <p className="mt-[2rem]">
                  This is one of the few places in the area with a pool.
                </p>
              </div>
            </div>
            <div className="flex gap-7">
              <img src={candleIcon} alt="diving-icon" />
              <div className="text-[#B4BBC1]">
                <h4 className=" pt-10 text-[#B4BBC1]">Candle light Dinning</h4>
                <p className="mt-[2rem]">
                  This is one of the few places in the area with a pool.
                </p>
              </div>
            </div>
            <div className="flex gap-7">
              <img src={warningIcon} alt="diving-icon" />
              <div className="text-[#B4BBC1]">
                <h4 className=" pt-10 text-[#B4BBC1]">Top Notch Security</h4>
                <p className="mt-[2rem]">
                  This is one of the few places in the area with a pool.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="occassions-container mt-[3rem]">
          <h2 className="mb-[3rem]">Occassions Related</h2>
          <div className="flex flex-wrap justify-center lg:justify-start gap-10 xl:gap-[4rem] occassions-cards">
            <div>
              <img src={beachIcon} alt="beach-icon" />
              <p>Family Vaccation</p>
            </div>
            <div>
              <img src={coffeeLoveIcon} alt="coffee-icon" />
              <p>Romantic getaway</p>
            </div>
            <div>
              <img src={hikingIcon} alt="hiking-icon" />
              <p>Adventure</p>
            </div>
            <div>
              <img src={businessIcon} alt="business-icon" />
              <p className="mt-2">Business</p>
            </div>
            <div>
              <img src={bedIcon} alt="bed-icon" />
              <p className="mt-[11px]">Honeymoon</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
