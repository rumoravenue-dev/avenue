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



function Werx() {
  const portfolio = true;
  let reactSwipeEl;
  // Modal.setAppElement('#portfolio');

  const industries = ['Medicine' , 'Clinical Care', 'Technology', 'AI'];
  const tools = ['photoshop','illustrator','indesign','canva'];
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
            <SinglePortfolioHeader titleImg="/assets/img/portfolio/projects/werx/Werx.svg" title="Werx" />
            <SinglePortfolioBanner banner_image="/assets/img/portfolio/projects/werx/werx-banner.png" title="Werx" />
            <SinglePortfolioChallenges text="Design a sleek and contemporary pitch deck that effectively showcases the unique healthcare AI product features and the significant potential impact of the project." />
            <SinglePortfolioIndstryAndTools industries={{industries}} tools={{tools}}/>
            <div className="col-12 col-sm-12 portfolioDetails">
              <SinglePortfolioImg image_url="/assets/img/portfolio/projects/werx/diagonal.png" title="Werx" />
              <SinglePortfolioImg image_url="/assets/img/portfolio/projects/werx/straight.png" title="Werx" />
              <SinglePortfolioImg image_url="/assets/img/portfolio/projects/werx/hero-bottom.png" title="Werx" />
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

export default Werx;
