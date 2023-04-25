import React from "react";
import "./resetPassword.scss";
import NavBar from "../../components/landingPage/navBar/navbar.jsx";
import ResetPassword from "../../components/landingPage/resetPassword/Child.jsx"
import Footer from "../../components/landingPage/footer/footer.jsx"

const resetPassword=()=> {
    return (<header className="reset-password-page" > 
        <NavBar /> 
        <ResetPassword /> 
        <Footer /> 
    </header>);
}

;

export default resetPassword;