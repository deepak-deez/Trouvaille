import React from "react";
import Router from "./Routes";
import Navbar from "./components/tripDetails/navbar/Child";
import Footer from "./components/tripDetails/footer/Child";
import Header from "./components/tripDetails/header/Child";
import JourneyPlanning from "./components/tripDetails/journeyPlanning/Child";

const App = () => {
  return (
    <>
      <Navbar />
      <Header />
      <JourneyPlanning />
      <Footer />
    </>
  );
};

export default App;
