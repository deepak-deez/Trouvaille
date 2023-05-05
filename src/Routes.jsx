<<<<<<< HEAD
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import BookingForm from "./pages/bookingForm/Child.jsx";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<BookingForm />} exact />
      </Routes>
    </BrowserRouter>
  );
};
=======
import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
            </Routes>
        </BrowserRouter>
    );
}
>>>>>>> TROUV-20-Trips-Page

export default Router;
