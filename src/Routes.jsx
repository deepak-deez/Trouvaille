
import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
<<<<<<< HEAD
import BookingForm from "./pages/bookingForm/Child.jsx";
=======
import ViewAccDetails from "./pages/viewAccountDetails/Child";
import EditAccDetails from "./pages/editAccountDetails/Child";
import Profile from "./pages/profileSettings/Child";
import EditProfile from "./pages/editProfile/Child"



>>>>>>> TROUV-30-Account-Details

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
<<<<<<< HEAD
                    <Route path="/" element={<BookingForm/>} exact />
=======
                    <Route path="/" element={<ViewAccDetails/>} exact />
                    <Route path="/editAccDetails"  element={<EditAccDetails/>} />
                    <Route path="/profile"  element={<Profile/>} />
                    <Route path="/editProfile"  element={<EditProfile/>} />
>>>>>>> TROUV-30-Account-Details
            </Routes>
        </BrowserRouter>
    );
}

export default Router;