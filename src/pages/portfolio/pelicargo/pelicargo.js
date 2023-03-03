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



function Pelicargo() {
  const portfolio = true;
  let reactSwipeEl;
  // Modal.setAppElement('#portfolio');

  const industries = ['Transportation','Softwares'];
  const tools = ['photoshop','illustrator','indesign','canva'];
  const portfolioItems =  ['http://localhost:3000/assets/img/sliders/NEWENGLAND1.webp', '/assets/img/portfolio/projects/lildan/LILDAN1.webp', '/assets/img/sliders/NEWENGLAND1.webp', '/assets/img/sliders/HENNESSY1.webp', 'http://localhost:3000/assets/img/sliders/NEWENGLAND1.webp', '/assets/img/portfolio/projects/lildan/LILDAN1.webp', '/assets/img/sliders/NEWENGLAND1.webp', '/assets/img/sliders/HENNESSY1.webp'];


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
            <SinglePortfolioHeader titleImg="/assets/img/portfolio/projects/pelicargo/Pelicargo.svg" title="Pelicargo" />
            <SinglePortfolioBanner banner_image="/assets/img/portfolio/projects/pelicargo/pelicargo-banner.png" title="Pelicargo" />
            <SinglePortfolioChallenges text="Develop a product demonstration pitch deck that highlights the simplicity and user-friendliness of the cargo quoting process, while also establishing clear brand guidelines that will facilitate organic growth of the brand." />
            <SinglePortfolioIndstryAndTools industries={{industries}} tools={{tools}}/>
            <div className="col-12 col-sm-12 portfolioDetails">
              <SinglePortfolioImg image_url="/assets/img/portfolio/projects/pelicargo/diagonal.png" title="Pelicargo" />
              <SinglePortfolioImg image_url="/assets/img/portfolio/projects/pelicargo/straight.png" title="Pelicargo" />
              <SinglePortfolioImg image_url="/assets/img/portfolio/projects/pelicargo/hero-right.png" title="Pelicargo" />
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

export default Pelicargo;
