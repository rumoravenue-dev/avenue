import React, { useState } from "react";
import TakeALook from "./images/takealook.svg";
import arrowRight from "./images/Arrowright.svg";
import arrowLeft from "./images/Arrowleft.svg"
import Carousel from "../../components/carouselPortfolio";
import Header from "../../components/header";
import Footer from "../../components/footer";
import "./portfolio.css";

function Portfolio() {
  const home = true;

  return (
    <div className="main-portfolio">
      <Header />
      <div className="row title-container">
        <div className="col-12 col-sm-12">
          <h4>portfolio</h4>
          <img src={TakeALook} alt=""/>
        </div>
        <div className="col-12 col-sm-12 arrow-container" activeIndex={index} onSelect={handleSelect}>
          <img src={arrowLeft} alt="arrow-left"/>
          <img src={arrowRight} alt="arrow-right"/>
        </div>
      </div>
      <div className="col-12 col-sm-12 portfolio-container">
        <Carousel />
      </div>
      <Footer />
    </div>
  );
}

export default Portfolio;
