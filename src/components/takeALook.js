import React from "react";
import Carousel from "./carouselPortfolio";
import Spacer from "./spacer";
import LazyPortfolio from "./LazyPortfolio";
import "./styles/takeALook.css";

function Portfolio({ home, enableLazyBehaviour = true }) {
  return (
    <div className={home ? "homePortfolio" : "mainPortfolio"}>
      <div className="container-wide">
        <Spacer height={120} />
        <div className="row titleContainer">
          <div className="col-12 col-sm-12 portifolioContent">
            <h2 className="heading-2 text-white">OUR WORK</h2>
          </div>
        </div>
        <div className="col-12 col-sm-12 portfolioContainer">
        {!enableLazyBehaviour ? (
            <Carousel />
          ) : (
            <LazyPortfolio
              className="mt-3"
              enableLazyBehaviour={enableLazyBehaviour}
            />
          )}
        </div>
        {!enableLazyBehaviour && (
          <div className="seeAllProjects">
            <a href="/portfolio">See all projects →</a>
          </div>
        )}
        <Spacer height={130} />
      </div>
    </div>
  );
}

export default Portfolio;
