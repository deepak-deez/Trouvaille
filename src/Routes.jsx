
import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Signin from "./pages/signIn/signin.jsx";
import SetPassword from "./pages/setPassword/setPassword.jsx";
import ResetPassword from "./pages/resetPassword/resetPassword.jsx"
import Signup from "./pages/signUp/signup.jsx"

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