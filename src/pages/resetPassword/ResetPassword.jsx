import React, { useEffect } from "react";
import "./style.scss";
import ResetPassword from "../../components/landingPage/resetPassword/ResetPassword.jsx";
import { useLocation, useParams } from "react-router-dom";
import axios from "axios";

const ResetPasswordPage = () => {
  const url = useLocation();

  const validation = async () => {
    const response = await axios.get(`http://localhost:7000${url.pathname}`);
  };

  useEffect(() => {
    validation();
  }, []);

  return (
    <header className="landing-page reset-password-page flex flex-col h-screen">
      <ResetPassword />
    </header>
  );
};

export default ResetPasswordPage;
