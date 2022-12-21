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
        </div>
        <div className="col-12 col-sm-12 portfolioContainer">
          <Carousel />
        </div>
        {props.home && <a href="/portfolio">See all projects →</a>}
    </div>
  );
}

export default Portfolio;
