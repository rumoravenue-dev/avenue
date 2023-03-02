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



function Omit() {
  const portfolio = true;
  let reactSwipeEl;
  // Modal.setAppElement('#portfolio');

  const industries = ['E-Sports'];
  const tools = ['photoshop','keynote'];
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
            <SinglePortfolioHeader titleImg="/assets/img/portfolio/projects/omit/OMIT.svg" title="Omit" />
            <SinglePortfolioBanner banner_image="/assets/img/portfolio/projects/omit/omit-banner.png" title="Omit" />
            <SinglePortfolioChallenges text="A new emerging e-sports team engaged us to create their pitch deck. By using some existing brand assets and expanding on their identity, we built a small yet mighty presentation that has left a lasting impression on their potential clients." />
            <SinglePortfolioIndstryAndTools industries={{industries}} tools={{tools}}/>
            <div className="col-12 col-sm-12 portfolioDetails">
              <SinglePortfolioImg image_url="/assets/img/portfolio/projects/omit/diagonal.png" title="Omit" />
              <SinglePortfolioImg image_url="/assets/img/portfolio/projects/omit/straight.png" title="Omit" />
              <SinglePortfolioImg image_url="/assets/img/portfolio/projects/omit/hero-right.png" title="Omit" />
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

export default Omit;
