import React from "react";
import Router from "./Routes";
import Footer from "./components/footer/Child";
import Navbar from "./components/navbar/Child";
import TripCategory from "./components/trip-category/Child";


const App = () => {
  return (
    <>
      <Navbar />
      <TripCategory />
      <Footer />;
    </>
  );
};

export default App;
