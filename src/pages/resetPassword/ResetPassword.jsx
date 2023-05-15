import React, { useEffect } from "react";
import "./style.scss";
import NavBar from "../../components/landingPage/navBar/Navbar.jsx";
import ResetPassword from "../../components/landingPage/resetPassword/ResetPassword.jsx";
import Footer from "../../components/landingPage/footer/Footer.jsx";
import { useLocation, useParams } from "react-router-dom";
import axios from "axios";

const ResetPasswordPage = () => {
  const url =useLocation();
console.log(url.pathname);

  const validation= async() =>{
    const response = await axios.get(`http://localhost:7000${url.pathname}`)
   console.log(response);
  } 

  useEffect(()=>{
    validation()
  },[])
  return (
    <header className="landing-page reset-password-page flex flex-col">
      <NavBar />
      <ResetPassword />
      <Footer />
    </header>
  );
};

export default ResetPasswordPage;
