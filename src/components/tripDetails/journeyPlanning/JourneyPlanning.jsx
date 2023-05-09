import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./style.scss";
import divingIcon from "../../../assets/images/tripsDetailsPage/journeyPlanning/diving-icon.svg";
import waveIcon from "../../../assets/images/tripsDetailsPage/journeyPlanning/wave-icon.svg";
import warningIcon from "../../../assets/images/tripsDetailsPage/journeyPlanning/warning-icon.svg";
import coupleFriendlyIcon from "../../../assets/images/tripsDetailsPage/journeyPlanning/coupleFriendlyIcon.svg";
import candleIcon from "../../../assets/images/tripsDetailsPage/journeyPlanning/candle-icon.svg";
import beachIcon from "../../../assets/images/tripsDetailsPage/journeyPlanning/beachIcon.svg";
import coffeeLoveIcon from "../../../assets/images/tripsDetailsPage/journeyPlanning/coffeeLoveIcon.svg";
import hikingIcon from "../../../assets/images/tripsDetailsPage/journeyPlanning/hikingIcon.svg";
import businessIcon from "../../../assets/images/tripsDetailsPage/journeyPlanning/businessIcon.svg";
import bedIcon from "../../../assets/images/tripsDetailsPage/journeyPlanning/bedIcon.svg";
import coupleIcon from "../../../assets/images/tripsDetailsPage/journeyPlanning/coupleIcon.svg";
import independentIcon from "../../../assets/images/tripsDetailsPage/journeyPlanning/independentIcon.svg";
import bedroomIcon from "../../../assets/images/tripsDetailsPage/journeyPlanning/bedroomIcon.svg";
import airConditionIcon from "../../../assets/images/tripsDetailsPage/journeyPlanning/airConditionerIcon.svg";
import safetyIcon from "../../../assets/images/tripsDetailsPage/journeyPlanning/safetyIcon.svg";
import waveIcon2 from "../../../assets/images/tripsDetailsPage/journeyPlanning/waveIcon2.svg";
import telivisionIcon from "../../../assets/images/tripsDetailsPage/journeyPlanning/televisionIcon.svg";
import sunFacingIcon from "../../../assets/images/tripsDetailsPage/journeyPlanning/sunIcon.svg";
import dropdownIcon from "../../../assets/images/tripsDetailsPage/journeyPlanning/dropdownIcon.svg";

export default function Child() {
  const [profilePicFaqs, setprofilePicFaqs] = useState(true);
  const [gmailFaqs, setgmailFaqs] = useState(true);
  const [passwordFaqs, setpasswordFaqs] = useState(true);

  return (
    <>
      <section className="md:mx-10 xl:mx-28 2xl:mx-44 min-[1920px]:mx-[20rem]">
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
              <img src={coupleFriendlyIcon} alt="diving-icon" />
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
              <p className="pt-[1rem]">Family Vaccation</p>
            </div>
            <div>
              <img src={coffeeLoveIcon} alt="coffee-icon" />
              <p className="pt-[1rem]">Romantic getaway</p>
            </div>
            <div>
              <img src={hikingIcon} alt="hiking-icon" />
              <p className="pt-[1rem]">Adventure</p>
            </div>
            <div>
              <img src={businessIcon} alt="business-icon" />
              <p className="pt-[1rem] mt-2">Business</p>
            </div>
            <div>
              <img src={bedIcon} alt="bed-icon" />
              <p className="pt-[1rem] mt-[11px]">Honeymoon</p>
            </div>
          </div>
        </div>
        <div className="mt-[5rem]">
          <h2 className="mb-[3rem]">Travel Type</h2>
          <div className="flex gap-10 xl:gap-[5rem]">
            <div>
              <img src={coupleIcon} alt="couple-icon" />
              <p className="mt-[1.35rem]">Escorted Tour</p>
            </div>
            <div>
              <img src={independentIcon} alt="couple-icon" />
              <p className="">Independent Tour</p>
            </div>
          </div>
        </div>
        <div className="payment-details-container flex flex-col lg:flex-row lg:gap-20">
          <div className="lg:w-1/2 lg:my-auto">
            <h2 className="text-[#9D9DAA] text-[4rem]">
              <span className="text-[#2EC8B9]">tico</span>com
            </h2>
            <p className="mb-[3rem]">Hosting partner</p>
            <p>
              A fantastic tower dated back to 1400, one of the most important
              historical buildings in Umbria, set in a magical place, close to a
              small town located in an Apennine valley at the confluence between
              Fosso del Colle and Fosso della Valle di Collelungo. Inside the
              fortress there are remains of other structures, including a guard
              tower and a chapel. The whole complex is dominated by an
              impressive pentagonal stone tower Guelph battlemented for 32
              meters of height.
            </p>
            <h2 className="text-[20px]">Show More</h2>
          </div>
          <div className="lg:w-1/2 mt-10 lg:mt-0">
            <div>
              <h4 className="text-[#B4BBC1] mb-[3rem]">Price Details:</h4>
              <div className="bg-[#ffffff0d] p-10 lg:p-[3.7rem] backdrop-blur-3xl border border-gray-700 flex flex-col gap-10">
                <div className="bg-slate-600 p-10 rounded-2xl">
                  <h4 className="mb-5">Guests</h4>
                  <select name="select-customer" id="" className="w-full">
                    <option value="">1</option>
                    <option value="">2</option>
                    <option value="">3</option>
                    <option value="">4</option>
                  </select>
                </div>
                <h2 className="text-[#DAE0E5]">
                  <span className="line-through font-[400]">₹36,576 </span>
                  ₹29,261 /night
                </h2>
                <Link to="/bookingForm">
                  <button className="w-[100%]">Reserve</button>
                </Link>
                <p className="text-center">You won't be charged yet</p>
              </div>
            </div>
          </div>
        </div>
        <h2 className="font-[400] mt-20 lg:mt-40 mb-[3.5rem]">
          Ammenities (<span>12</span>)
        </h2>
        <div className="flex flex-wrap 2xl:justify-start gap-10 mt-20 lg:mt-[9rem] justify-center lg:justify-start ammenities-container">
          <div className="flex flex-col items-center">
            <img
              src={bedroomIcon}
              alt="ammenities-icon"
              className="px-8 py-10"
            />
            <p>Bedroom</p>
          </div>
          <div className="flex flex-col items-center">
            <img
              src={airConditionIcon}
              alt="ammenities-icon"
              className="px-10 py-[30.4px]"
            />
            <p>Air Condition</p>
          </div>
          <div className="flex flex-col items-center">
            <img
              src={safetyIcon}
              alt="ammenities-icon"
              className="px-11 py-[28.8px]"
            />
            <p>Safety</p>
          </div>
          <div className="flex flex-col items-center">
            <img
              src={waveIcon2}
              alt="ammenities-icon"
              className="px-10 py-[40.8px]"
            />
            <p>Waves</p>
          </div>
          <div className="flex flex-col items-center">
            <img
              src={telivisionIcon}
              alt="ammenities-icon"
              className="px-8 py-[30.4px]"
            />
            <p>Television</p>
          </div>
          <div className="flex flex-col items-center">
            <img
              src={sunFacingIcon}
              alt="ammenities-icon"
              className="px-10 py-[30.4px]"
            />
            <p>Sun facing</p>
          </div>
        </div>
        <h2 className="mt-20 lg:mt-[9rem] mb-10">FAQs</h2>
        <ul className="faqs-container flex flex-col gap-10">
          <li className="flex flex-col gap-5">
            <div className="flex justify-between faqs-heading">
              <div className="flex gap-2">
                <i className="fa fa-circle my-auto text-[6px]"></i>
                <h4>How can I change my profile photo?</h4>
              </div>
              <button
                onClick={() => {
                  setprofilePicFaqs(!profilePicFaqs);
                }}
                className={profilePicFaqs ? "" : "rotate-90"}
              >
                <img src={dropdownIcon} alt="dropdownicon" />
              </button>
            </div>
            <p className={profilePicFaqs ? "hidden" : "block"}>
              Lorem Ipsum has been the industry's standard dummy text ever since
              the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book. Lorem Ipsum has been
              the industry's standard dummy text ever since the 1500s, when an
              unknown printer took a galley of type and scrambled it to make a
              type specimen book. Lorem Ipsum has been the industry's standard
              dummy text ever since the 1500s, when an unknown printer took a
              galley of type and scrambled it to make a type specimen book.
            </p>
          </li>
          <li className="flex flex-col gap-5">
            <div className="flex justify-between faqs-heading">
              <div className="flex gap-2">
                <i className="fa fa-circle my-auto text-[6px]"></i>
                <h4>Is it safe to connect my Gmail account to Wanderlog?</h4>
              </div>
              <button
                onClick={() => {
                  setgmailFaqs(!gmailFaqs);
                }}
                className={gmailFaqs ? "" : "rotate-90"}
              >
                <img src={dropdownIcon} alt="dropdownicon" />
              </button>
            </div>
            <p className={gmailFaqs ? "hidden" : "block"}>
              Lorem Ipsum has been the industry's standard dummy text ever since
              the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book. Lorem Ipsum has been
              the industry's standard dummy text ever since the 1500s, when an
              unknown printer took a galley of type and scrambled it to make a
              type specimen book. Lorem Ipsum has been the industry's standard
              dummy text ever since the 1500s, when an unknown printer took a
              galley of type and scrambled it to make a type specimen book.
            </p>
          </li>
          <li className="flex flex-col gap-5">
            <div className="flex justify-between faqs-heading">
              <div className="flex gap-2">
                <i className="fa fa-circle my-auto text-[6px]"></i>
                <h4>How can I change my password?</h4>
              </div>
              <button
                onClick={() => {
                  setpasswordFaqs(!passwordFaqs);
                }}
                className={passwordFaqs ? "" : "rotate-90"}
              >
                <img src={dropdownIcon} alt="dropdownicon" />
              </button>
            </div>
            <p className={passwordFaqs ? "hidden" : "block"}>
              Lorem Ipsum has been the industry's standard dummy text ever since
              the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book. Lorem Ipsum has been
              the industry's standard dummy text ever since the 1500s, when an
              unknown printer took a galley of type and scrambled it to make a
              type specimen book. Lorem Ipsum has been the industry's standard
              dummy text ever since the 1500s, when an unknown printer took a
              galley of type and scrambled it to make a type specimen book.
            </p>
          </li>
        </ul>
      </section>
    </>
  );
}
