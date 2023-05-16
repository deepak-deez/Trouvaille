import React from "react";
import "./style.scss";
import Header from "../../components/accountDetails/viewAccountDetails/ViewAccountDetails";

const viewAccDetails = () => {
  return (
    <section className="account-details pt-[10rem] pb-[35rem] sm:pb-[20rem]">
      <Header />
    </section>
  );
};

export default viewAccDetails;
