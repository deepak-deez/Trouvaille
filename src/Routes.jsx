import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Signin from "./pages/signIn/SignIn.jsx";
import SetPassword from "./pages/setPassword/SetPassword.jsx";
import ResetPassword from "./pages/resetPassword/ResetPassword.jsx";
import Signup from "./pages/signUp/SignUp.jsx";
import SearchResult from "./pages/searchResult/Child.jsx";
import TripsPage from "./pages/trips/Child.jsx";
import TripDetails from "./pages/tripDetails/TripDetails.jsx";
import BookingForm from "./pages/bookingForm/BookingForm.jsx";
import AccountDetails from "./pages/viewAccountDetails/Child.jsx";
import EditAccountDetails from "./pages/editAccountDetails/Child.jsx";
import Profile from "./pages/profileSettings/Child.jsx";
import EditProfile from "./pages/editProfile/Child.jsx";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Signin />} exact />
        <Route path="/setPassword" element={<SetPassword />} />
        <Route path="/resetPassword" element={<ResetPassword />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/searchResult" element={<SearchResult />} />
        <Route path="/trips" element={<TripsPage />} />
        <Route path="/tripDetails" element={<TripDetails />} />
        <Route path="/bookingForm" element={<BookingForm />} />
        <Route path="/accountDetails" element={<AccountDetails />} />
        <Route path="/editAccDetails" element={<EditAccountDetails />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/editProfile" element={<EditProfile />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
