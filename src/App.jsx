import React from "react";
import Router from "./Routes";
import Navbar from "./components/navbar/Child";
import TripCategory from "./components/trip-category/Child";
import Header from "./components/header/Child";

const App = () => {
  return (
    <>
      <Navbar />
      <Header />
      <TripCategory />
    </>
  );
};

export default App;
