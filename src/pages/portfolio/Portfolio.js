import React from "react";
import Carousel from "../../components/carouselPortfolio";
import Header from "../../components/header";
import Footer from "../../components/footer";
import "./portfolio.css";

function Portfolio() {
  const home = true;

  return (
    <>
      {/* <Header /> */}
      <div className="mainPortfolio">
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
        {home && <a href="/">See all projects →</a>}
    </div>
    {/* <Footer /> */}
    </>
  );
}

export default Portfolio;
