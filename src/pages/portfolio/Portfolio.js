import React from "react";
import TakeALook from "./images/takealook.svg";
import arrowRight from "./images/Arrowright.svg";
import arrowLeft from "./images/Arrowleft.svg"
import Photo1 from "./images/Rectangle1.webp";
import Photo2 from "./images/Rectangle2.webp";
import Photo3 from "./images/Rectangle3.webp";
import Photo4 from "./images/Rectangle4.webp";
import "./portfolio.css";

function Portfolio() {
  return (
    <div className="main-portfolio">
      <div className="title-container">
          <h4>portfolio</h4>
          <img src={TakeALook} alt=""/>
        <div className="arrow-container">
          <img src={arrowLeft} alt="arrow-left"/>
          <img src={arrowRight} alt="arrow-right"/>
        </div>
      </div>
      <div className="portfolio-container">
        <img src={Photo1} alt="portfolio-1"/>
        <img src={Photo2} alt="portfolio-2"/>
        <img src={Photo3} alt="portfolio-3"/>
        <img src={Photo4} alt="portfolio-4"/>
      </div>
    </div>
  );
}

export default Portfolio;
