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



function Stage() {
  const portfolio = true;
  let reactSwipeEl;
  // Modal.setAppElement('#portfolio');

  const industries = ['ALCOHOL BEVERAGE'];
  const tools = ['photoshop','powerpoint'];
  return (
    <>
      <Helmet>
        <title> Portfolio - OnlyFivePM </title>
      </Helmet>
      <Header />

      <section className="singlePortfolio">
        <div className="container-wide">
          <Spacer height={130} />
          <div className="row titleContainer">
            <SinglePortfolioHeader titleImg="/assets/img/portfolio/projects/stage/Stags-Leap.svg" title="Stage Leap" />
            <SinglePortfolioBanner banner_image="/assets/img/portfolio/projects/stage/stage-banner.png" title="Stage Leap" />
            <SinglePortfolioChallenges text="Building off of the current Stags Leap creative, we designed a concept presentation for our agency client to pitch new and immersive consumer experiences. Throughout this presentation we brought the world of Stags leap to life and guided the viewer through a visual journey through the proposed consumer events." />
            <SinglePortfolioIndstryAndTools industries={{industries}} tools={{tools}}/>
            <div className="col-12 col-sm-12 portfolioDetails">
              <SinglePortfolioImg image_url="/assets/img/portfolio/projects/stage/diagonal.png" title="Stage Leap" />
              <SinglePortfolioImg image_url="/assets/img/portfolio/projects/stage/straight.png" title="Stage Leap" />
              <SinglePortfolioImg image_url="/assets/img/portfolio/projects/stage/hero-right.png" title="Stage Leap" />
            </div>
          </div>
        </div>
      </section>
      <SingleRelatedPortfolio portfolio={portfolioItems} />
      <GetInContact portfolio={portfolio} />
      <Footer />
    </>
  );
}

export default Stage;
