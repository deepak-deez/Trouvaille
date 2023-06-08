import React, { useEffect, useState } from "react";
import "./style.scss";
import Header from "../../components/tripDetails/header/Header";
import Dates from "../../components/tripDetails/dates/Dates";
import TripHighlights from "../../components/tripDetails/packageHighlights/PackageHighlights";
import Ocassions from "../../components/tripDetails/ocassions/Ocassions";
import { dates, traverTypeData, hostingData } from "./data";
import TravelType from "../../components/tripDetails/travelType/TravelType";
import HostingPartner from "../../components/tripDetails/hostingPartner/HostingPartner";
import PricingDetails from "../../components/tripDetails/pricingDetails/PricingDetails";
import Ammenities from "../../components/tripDetails/ammenities/Ammenities";
import Faqs from "../../components/tripDetails/faqs/Faqs";
import getApiDatas, { handleProfileImagetoUrl } from "./logic";
import { Link, useLocation, useParams } from "react-router-dom";
import { useSelector } from "react-redux";

export default function TripDetails(props) {
  const location = useLocation();
  const { userDetails } = useSelector((state) => state.logInUser);
  const [tripDetails, setTripDetails] = useState();
  const [ocassionImgData, setOcassionImgData] = useState();
  const [ammenityImgData, setAmmenityImgData] = useState();
  const [userDatabase, setUserdatabase] = useState();
  const currentTripId = useParams();
  const currentUserId = useSelector((state) => state.logInUser).userDetails.data
    .userDetails._id;
  const tripImage = tripDetails?.data.data[0].image?.url;
  const email = userDetails?.data.userDetails.email;
  const phNumber = userDetails?.data.userDetails.phone;
  const name = userDetails?.data.userDetails.name;
  const backgroundImg = { backgroundImage: `url(${tripImage})` };

  useEffect(() => {
    getApiDatas(
      setTripDetails,
      setAmmenityImgData,
      setOcassionImgData,
      setUserdatabase,
      currentUserId,
      currentTripId.id
    );
  }, []);

  const tripResponseData = tripDetails?.data.data[0];

  const acitivitiesData = tripResponseData?.activities;
  const ammenitiesData = tripResponseData?.amenities;
  const ocassionData = tripResponseData?.occasions;
  const faqData = tripResponseData?.faq;
  const tripHighlightsData = tripResponseData?.tripHighlights;
  const tripCost = tripResponseData?.price;
  const discountedPrice = tripResponseData?.discountedPrice;
  const locationName = tripResponseData?.title;
  const explorePlaces = tripResponseData?.placeNumber;

  const bookingFormData = {
    email,
    phNumber,
    name,
    locationName,
    currentTripId,
    currentUserId,
    tripImage,
  };

  console.log(tripResponseData);

  if (tripDetails?.data?.success) {
    return (
      <section className="trip-details" style={backgroundImg}>
        <Header location={locationName} />
        <section className="md:mx-10 xl:mx-28 2xl:mx-44 min-[1920px]:mx-[20rem] trip-fetched-details pb-[20rem]">
          <h1 className="pt-[5rem] text-center lg:text-start">Itinerary</h1>
          <ul className="flex flex-wrap justify-center lg:justify-start sm:flex-row gap-5 text-[#838597] my-[3rem] text-[22px]">
            <li>Maximum guests 12</li>
            <li>Explore {explorePlaces} PLaces </li>
            <li>Available for 6 guests</li>
          </ul>
          <h4 className="mb-[2rem] text-2xl">Dates</h4>
          <ul className="flex flex-wrap justify-center gap-5 xl:justify-between available-dates overflow-x-scroll">
            {dates.map((data, index) => {
              return <Dates day={data?.day} month={data?.month} key={index} />;
            })}
          </ul>
          <p className="my-[3rem] text-[#B4BBC1] text-[22px]">
            Till now 4 suits empty for this day, hurry up!
          </p>
          <div className="trip-highlights-container my-5">
            <h2>Highlights of the package</h2>
            <div className="flex flex-wrap gap-10">
              {tripHighlightsData.map((data, index) => {
                return (
                  <TripHighlights
                    title={data?.title}
                    content={data?.name}
                    imgSrc={data?.icon?.url}
                    key={index}
                  />
                );
              })}
            </div>
          </div>
          <div className="mt-[5rem]">
            <h2 className="mb-[3rem]">Occassions Related</h2>
            <div className="flex flex-wrap justify-center lg:justify-start gap-10 xl:gap-[4rem] occassions-cards">
              {ocassionData.map((data, index) => {
                return <Ocassions type={data} key={index} />;
              })}
            </div>
          </div>
          <div className="mt-[5rem]">
            <h2 className="mb-[3rem]">Travel Type</h2>
            <div className="flex gap-10 xl:gap-[5rem]">
              {traverTypeData.map((data, index) => {
                return <TravelType title={data?.title} key={index} />;
              })}
            </div>
          </div>
          <div className="mt-[5rem] payment-details-container flex flex-col lg:flex-row lg:gap-20">
            {hostingData.map((data, index) => {
              return <HostingPartner key={index} content={data?.content} />;
            })}

            <PricingDetails
              bookingFormData={bookingFormData}
              maxGuests={tripResponseData.maximumGuests}
              originalPrice={discountedPrice}
              discountedPrice={tripCost}
            />
          </div>
          <div className="mt-20 lg:mt-[9rem] ammenities-container">
            <h2 className="font-[400] mt-20 lg:mt-40 mb-[3.5rem]">
              Ammenities (<span>{ammenitiesData?.length}</span>)
            </h2>
            <div className="flex flex-wrap 2xl:justify-start gap-10  justify-center lg:justify-start ammenities-container">
              {ammenitiesData.map((data, index) => {
                return <Ammenities key={index} title={data} />;
              })}
            </div>
          </div>
          <div>
            <h2 className="mt-20 lg:mt-[9rem] mb-10">FAQs</h2>
            <ul className="faqs-container flex flex-col gap-10">
              {faqData.map((data, index) => {
                return (
                  <Faqs
                    key={index}
                    question={data?.question}
                    answer={data?.answer}
                  />
                );
              })}
            </ul>
          </div>
        </section>
      </section>
    );
  } else {
    return (
      <div className="py-[20rem] text-center">
        <h1 className="text-red-900 text-5xl">Err, No Response!</h1>
        <Link
          to={"/searchResult"}
          className="block px-5 py-2 text-2xl border border-green-500 w-[20rem] mx-auto my-10"
        >
          Take Me Back?
        </Link>
      </div>
    );
  }
}
