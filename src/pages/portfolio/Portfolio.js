import React from "react";
import TakeALook from "../../components/takeALook";
import Header from "../../components/header";
import GetInContact from "../../components/getInContact/getInContact";
import Footer from "../../components/footer";
import "./portfolio.css";

function Portfolio() {
  const portfolio = true;
  return (
    <>
      <Header />
      <TakeALook />
      <GetInContact portfolio={portfolio}/>
      <Footer />
    </>
  );
}

export default Portfolio;
