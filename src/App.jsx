import React from "react";
import Router from "./Routes";
import Navbar from "./components/navbar/Child";
import Header from "./components/header/Child";
import TripCategory from "./components/trip-category/Child";
import Footer from "./components/footer/Child";

const App = () => {
  return (
    <>
      <Navbar />
      <Header />
      <TripCategory />
      <Footer />
    </>
  );
};

export default App;
