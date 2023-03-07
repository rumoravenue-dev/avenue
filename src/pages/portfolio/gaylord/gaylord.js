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
import portfolioItems from '../../../common/portfolioItems';


// import Modal from 'react-modal';
import "./../single-portfolio.css";




function Gaylord() {
  const portfolio = true;
  let reactSwipeEl;
  // Modal.setAppElement('#portfolio');

  const industries = ['HOSPITALITY'];
  const tools = ['photoshop','indesign'];
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
            <SinglePortfolioHeader titleImg="/assets/img/portfolio/projects/gaylord/Gaylord-Hotels.svg" title="Gaylord" />
            <SinglePortfolioBanner banner_image="/assets/img/portfolio/projects/gaylord/gaylord-banner.png" title="Gaylord" />
            <SinglePortfolioChallenges text="We developed and redesigned the gaylord Hotels Brand Positioning Presentation, creating a more modern look and feel that is clean, comprehensive and compliments the current Gaylord Hotels brand." />
            <SinglePortfolioIndstryAndTools industries={{industries}} tools={{tools}}/>
            <div className="col-12 col-sm-12 portfolioDetails">
              <SinglePortfolioImg image_url="/assets/img/portfolio/projects/gaylord/diagonal.png" title="Gaylord" />
              <SinglePortfolioImg image_url="/assets/img/portfolio/projects/gaylord/straight.png" title="Gaylord" />
              <SinglePortfolioImg image_url="/assets/img/portfolio/projects/gaylord/hero-right.png" title="Gaylord" />
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

export default Gaylord;