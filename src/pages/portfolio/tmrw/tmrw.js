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



function Tmrw() {
  const portfolio = true;
  let reactSwipeEl;
  // Modal.setAppElement('#portfolio');

  const industries = ['Film' , 'EXPERIMENTAL'];
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
            <SinglePortfolioHeader titleImg="/assets/img/portfolio/projects/tmrw/TMRW.svg" title="tmrw" />
            <SinglePortfolioBanner banner_image="/assets/img/portfolio/projects/tmrw/tmrw-banner.png" title="tmrw" />
            <SinglePortfolioChallenges text="The New York Latin Film Festival needed to pitch a new concept for culturally relevant events to HBO in light of the release of HBO Max and the proposed “Pa’lante” movement. We helped paint that picture through vivid visuals and a futuristic feel." />
            <SinglePortfolioIndstryAndTools industries={{industries}} tools={{tools}}/>
            <div className="col-12 col-sm-12 portfolioDetails">
              <SinglePortfolioImg image_url="/assets/img/portfolio/projects/tmrw/diagonal.png" title="tmrw" />
              <SinglePortfolioImg image_url="/assets/img/portfolio/projects/tmrw/straight.png" title="tmrw" />
              <SinglePortfolioImg image_url="/assets/img/portfolio/projects/tmrw/hero-bottom.png" title="tmrw" />
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

export default Tmrw;
