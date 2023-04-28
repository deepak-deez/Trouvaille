
import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Signin from "./pages/signIn/Child.jsx";
import SetPassword from "./pages/setPassword/Child.jsx";
import ResetPassword from "./pages/resetPassword/Child.jsx"
import Signup from "./pages/signUp/Child.jsx"

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                    <Route path="/" element={<Signin/>} exact />
                    <Route path="/setPassword"  element={<SetPassword/>} />
                    <Route path="/resetPassword"  element={<ResetPassword/>} />
                    <Route path="/signup"  element={<Signup/>} />
            </Routes>
        </BrowserRouter>
    );
}

export default Router;