import React, { useState } from "react";
import { Helmet } from "react-helmet";
import TakeALook from "../../components/takeALook";
import Header from "../../components/header";
import GetInContact from "../../components/getInContact";
import Footer from "../../components/footer";
import Modal from "../../components/modal";
// import Modal from 'react-modal';
import "./portfolio.css";

function Portfolio() {
  const portfolio = true;

  // Modal.setAppElement('#portfolio');

  return (
    <>
      <Helmet>
          <title> Portfolio - 5pm </title>
      </Helmet>
      <Header />
      <TakeALook /> 
      <GetInContact portfolio={portfolio}/>
      <Footer /> 
    </>
  );
}

export default Portfolio;


