import React from "react";
import Carousel from "./carouselPortfolio";
import "./styles/takeALook.css";

function Portfolio(props) {

  return (
    <div className={props.home ? "homePortfolio": "mainPortfolio"}>
        <div className="row titleContainer">
          <div className="col-12 col-sm-12">
            <h4>portfolio</h4>
            <img className="takeALook" src='/assets/img/portfolio/takealook.svg' alt="takeALook" />
          </div>
          <div className="col-12 col-sm-12 arrowContainer">
            <img src='/assets/img/portfolio/Arrowleft.svg' alt="arrow-left" />
            <img src='/assets/img/portfolio/Arrowright.svg' alt="arrow-right" />
          </div>
        </div>
        <div className="col-12 col-sm-12 portfolioContainer">
          <Carousel />
        </div>
        {props.home && <a href="/portfolio">See all projects →</a>}
    </div>
  );
}

export default Portfolio;
