import React from "react";
import "./child.scss";
import NavBar from "../../components/landingPage/navBar/Child.jsx";
import ResetPassword from "../../components/landingPage/resetPassword/Child.jsx"
import Footer from "../../components/landingPage/footer/Child.jsx"

const resetPassword=()=> {
    return (<header className="reset-password-page" > 
        <NavBar /> 
        <ResetPassword /> 
        <Footer /> 
    </header>);
}

;

export default resetPassword;