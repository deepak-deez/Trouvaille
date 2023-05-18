import React from "react";
import { Link } from "react-router-dom";

export default function PageNotAvailable() {
  return (
    <div className="text-center pt-[10rem] px-2 pb-[35rem] sm:pt-[10rem] sm:pb-[20rem] lg:px-[10rem]">
      <h1 className="text-[4rem] ">
        <span className="text-red-700">Oops </span>the Page You're Looking For
        is Not <span className="text-red-800">Available!</span>
      </h1>
      <Link
        to="/searchResult"
        className="block mt-10 p-5 rounded-xl border border-green-900 cursor-pointer hover:bg-green-700 hover:text-white transition-colors duration-500"
      >
        Take Me Back ?
      </Link>
    </div>
  );
}
