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



function NewEnglandWhalers() {
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
          <Spacer height={218} />
          <div className="row titleContainer">
            <SinglePortfolioHeader titleImg="/assets/img/portfolio/projects/newenglandwhalers/New-England-Whalers.svg" title="New England Whalers" />
            <SinglePortfolioBanner banner_image="/assets/img/portfolio/projects/newenglandwhalers/newengland-banner.png" title="New England Whalers" />
            <SinglePortfolioChallenges text="There is no doubt the e-gaming industry has been on the rise over the last few years, and the New England Whalers were looking for the right partnerships to join the revolution. We were tasked with taking the brands logo and developing an engaging and captivating deck that would tell their story." />
            <SinglePortfolioIndstryAndTools industries={{industries}} tools={{tools}}/>
            <div className="col-12 col-sm-12 portfolioDetails">
              <SinglePortfolioImg image_url="/assets/img/portfolio/projects/newenglandwhalers/diagonal.png" title="New England Whalers" />
              <SinglePortfolioImg image_url="/assets/img/portfolio/projects/newenglandwhalers/straight.png" title="New England Whalers" />
              <SinglePortfolioImg image_url="/assets/img/portfolio/projects/newenglandwhalers/hero-right.png" title="New England Whalers" />
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

export default NewEnglandWhalers;
