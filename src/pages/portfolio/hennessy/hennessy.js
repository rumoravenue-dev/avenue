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



const portfolioItems = [
  {
    id: 1,
    src: "/assets/img/sliders/TMRW1.webp",
    DetailUrl: '/portfolio/tmrw',
  },
  {
    id: 2,
    src: "/assets/img/portfolio/projects/lildan/LILDAN1.webp",
    DetailUrl: '/portfolio/lildan',
  },
  {
    id: 3,
    src: "/assets/img/portfolio/projects/room/room1.webp",
    DetailUrl: '/portfolio/room',
  },
  {
    id: 4,
    src: "/assets/img/sliders/RIBOLI1.webp",
    DetailUrl: '/portfolio/riboli',
  },
  {
    id: 5,
    src: "/assets/img/sliders/NEWENGLAND1.webp",
    DetailUrl: '/portfolio/new-england-whalers',
  },
  {
    id: 7,
    src: "/assets/img/sliders/INPREMISSE1.webp",
    DetailUrl: '/portfolio/tmrw',
  },
  {
    id: 8,
    src: "/assets/img/sliders/GREENHOUSEWINE1.webp",
    DetailUrl: '/portfolio/stage-leap',
  },
  {
    id: 9,
    src: "/assets/img/portfolio/projects/omit/Artboard 1 (1).webp",
    DetailUrl: '/portfolio/omit',
  },
  {
    id: 10,
    src: "/assets/img/portfolio/projects/bookable/Artboard 1.webp",
    DetailUrl: '/portfolio/tmrw',
  },
  {
    id: 11,
    src: "/assets/img/portfolio/projects/pelicargo/Pelicargo1.webp",
    DetailUrl: '/portfolio/pelicargo',
  },
  {
    id: 12,
    src: "/assets/img/portfolio/projects/gaylord/Gaylord_01.webp",
    DetailUrl: '/portfolio/gaylord',
  },
  {
    id: 13,
    src: "/assets/img/portfolio/projects/werx/werx1.webp",
    DetailUrl: '/portfolio/werx',
  },
];



function Hennessy() {
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
            <SinglePortfolioHeader titleImg="/assets/img/portfolio/projects/hennessy/Hennessy-Le-Voyage.svg" title="Hennessy Le Voyage" />
            <SinglePortfolioBanner banner_image="/assets/img/portfolio/projects/hennessy/hennessy-banner.png" title="Hennessy Le Voyage" />
            <SinglePortfolioChallenges text="We developed and redesigned the gaylord Hotels Brand Positioning Presentation, creating a more modern look and feel that is clean, comprehensive and compliments the current Gaylord Hotels brand." />
            <SinglePortfolioIndstryAndTools industries={{industries}} tools={{tools}}/>
            <div className="col-12 col-sm-12 portfolioDetails">
              <SinglePortfolioImg image_url="/assets/img/portfolio/projects/hennessy/diagonal.png" title="Hennessy Le Voyage" />
              <SinglePortfolioImg image_url="/assets/img/portfolio/projects/hennessy/straight.png" title="Hennessy Le Voyage" />
              <SinglePortfolioImg image_url="/assets/img/portfolio/projects/hennessy/hero-right.png" title="Hennessy Le Voyage" />
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

export default Hennessy;
