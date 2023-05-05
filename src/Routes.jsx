import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ViewAccDetails from "./pages/viewAccountDetails/Child";
import EditAccDetails from "./pages/editAccountDetails/Child";
import Profile from "./pages/profileSettings/Child";
import EditProfile from "./pages/editProfile/Child"



import BookingForm from "./pages/bookingForm/Child.jsx";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<BookingForm />} exact />
                    <Route path="/" element={<ViewAccDetails/>} exact />
                    <Route path="/editAccDetails"  element={<EditAccDetails/>} />
                    <Route path="/profile"  element={<Profile/>} />
                    <Route path="/editProfile"  element={<EditProfile/>} />
      </Routes>
    </BrowserRouter>
  );
};


export default Router;
