import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Signin from "./pages/signIn/SignIn.jsx";
import SetPassword from "./pages/setPassword/SetPassword.jsx";
import ResetPassword from "./pages/resetPassword/ResetPassword.jsx";
import Signup from "./pages/signUp/SignUp.jsx";
import SearchResult from "./pages/searchResult/SearchResult.jsx";
import TripsPage from "./pages/trips/Trips.jsx";
import TripDetails from "./pages/tripDetails/TripDetails.jsx";
import BookingForm from "./pages/bookingForm/BookingForm.jsx";
import AccountDetails from "./pages/viewAccountDetails/ViewAccountDetails.jsx";
import EditAccountDetails from "./pages/editAccountDetails/EditAccountDetails.jsx";
import Profile from "./pages/profileSettings/ProfileSettings.jsx";
import EditProfile from "./pages/editProfile/EditProfile.jsx";
import BookingDetails from "./pages/bookingDetails/BookingDetails.jsx";

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
        <Route path="/bookingDetails" element={<BookingDetails />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
