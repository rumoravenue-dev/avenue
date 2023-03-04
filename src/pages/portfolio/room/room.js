import React, { useState } from "react";
import { Helmet } from "react-helmet";
import Header from "../../../components/header";
import Spacer from "../../../components/spacer";
import GetInContact from "../../../components/getInContact";
import SinglePortfolioHeader from "../../../components/singlePortfolioHeader";
import SinglePortfolioBanner from "../../../components/singlePortfolioBanner";
import SinglePortfolioChallenges from "../../../components/singlePortfolioChallenges";
import SinglePortfolioIndstryAndTools from "../../../components/singlePortfolioIndustryAndTools";
import SinglePortfolioImg from "../../../components/singlePortfolioImg";
import SingleRelatedPortfolio from "../../../components/singleRelatedPortfolio";
import Footer from "../../../components/footer";


// import Modal from 'react-modal';
import "./../single-portfolio.css";


const portfolioItems =  ['/assets/img/sliders/TMRW1.webp', '/assets/img/portfolio/projects/lildan/LILDAN1.webp', '/assets/img/sliders/NEWENGLAND1.webp', '/assets/img/sliders/HENNESSY1.webp'];



function room() {
  const portfolio = true;
  let reactSwipeEl;
  // Modal.setAppElement('#portfolio');

  const industries = ['Real Estate'];
  const tools = ['photoshop','illustrator','indesign','canva'];
  return (
    <>
      <Helmet>
        <title> Portfolio - OnlyFivePM </title>
      </Helmet>
      <Header />

      <section className="singlePortfolio">
        <div className="container-wide">
          <Spacer height={218} />
          <div className="row titleContainer">
            <SinglePortfolioHeader titleImg="/assets/img/portfolio/projects/room/room.svg" title="room" />
            <SinglePortfolioBanner banner_image="/assets/img/portfolio/projects/room/room-banner.png" title="room" />
            <SinglePortfolioChallenges text="Develop a simple and concise pitch deck that demonstrates the potential of Room and their solution, business model, demand, and projections. Room streamlines the process of renting a new place." />
            <SinglePortfolioIndstryAndTools industries={{industries}} tools={{tools}}/>
            <div className="col-12 col-sm-12 portfolioDetails">
              <SinglePortfolioImg image_url="/assets/img/portfolio/projects/room/diagonal.png" title="room" />
            </div>
          </div>
        </div>
      </section>
      <SingleRelatedPortfolio portfolioItems={portfolioItems} />
      <GetInContact portfolio={portfolio} />
      <Footer />
    </>
  );
}

export default room;
