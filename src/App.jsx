import React from "react";
import Router from "./Routes";
import Navbar from "./components/navbar/Navbar";
import TripCategory from "./components/trip-category/TripCategory";

const App = () => {
  return (
    <>
      <Navbar />
      <TripCategory />
    </>
  );
};

export default App;
