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



function Riboli() {
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
            <SinglePortfolioHeader titleImg="/assets/img/portfolio/projects/riboli/Riboli.svg" title="riboli" />
            <SinglePortfolioBanner banner_image="/assets/img/portfolio/projects/riboli/riboli-banner.png" title="riboli" />
            <SinglePortfolioChallenges text="Riboli Family Wines, famous for their Stella brand, was looking to refresh their internal communications presentation. We utilized the brands colors and essence to create a sophisticated and timeless deck they could use for years to come." />
            <SinglePortfolioIndstryAndTools industries={{industries}} tools={{tools}}/>


            <div className="col-12 col-sm-6 portfolioDetails">
              <h3>Before</h3>
              <Spacer height={20} />
              <SinglePortfolioImg image_url="/assets/img/portfolio/projects/riboli/riboli-before.png" title="riboli" />
            </div>
            <div className="col-12 col-sm-6 portfolioDetails">
              <h3>After</h3>
              <Spacer height={20} />
              <SinglePortfolioImg image_url="/assets/img/portfolio/projects/riboli/riboli-after.png" title="riboli" />
            </div>

            <div className="col-12 col-sm-12 portfolioDetails">
              <SinglePortfolioImg image_url="/assets/img/portfolio/projects/riboli/diagonal.png" title="riboli" />
              <SinglePortfolioImg image_url="/assets/img/portfolio/projects/riboli/straight.png" title="riboli" />
              <SinglePortfolioImg image_url="/assets/img/portfolio/projects/riboli/hero-right.png" title="riboli" />
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

export default Riboli;
