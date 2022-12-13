import React from "react";

import "../styles/takeALook.css";

function Portfolio(props) {
  return (
    <div className="main-portfolio">
      <div className="title-container">
          <h4>portfolio</h4>
          <img src="/assets/img/portfolio/takealook.svg" alt="take-a-look"/>
        <div className="arrow-container">
          <img src="/assets/img/portfolio/Arrowleft.svg" alt="arrow-left"/>
          <img src="/assets/img/portfolio/Arrowright.svg" alt="arrow-right"/>
        </div>
      </div>
      <div className="portfolio-container">
        <img src="/assets/img/portfolio/Rectangle1.webp" alt="portfolio-1"/>
        <img src="/assets/img/portfolio/Rectangle2.webp" alt="portfolio-2"/>
        <img src="/assets/img/portfolio/Rectangle3.webp" alt="portfolio-3"/>
        <img src="/assets/img/portfolio/Rectangle4.webp" alt="portfolio-4"/>
      </div>
      { props.home && <a>See all projects →</a> }
    </div>
  );
}

export default Portfolio;
