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
    id: 6,
    src: "/assets/img/sliders/HENNESSY1.webp",
    DetailUrl: '/portfolio/hennessy',
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

            <div className="col-12 col-sm-6 portfolioDetails">
              <h3>Before</h3>
              <Spacer height={20} />
              <SinglePortfolioImg image_url="/assets/img/portfolio/projects/newenglandwhalers/newengland-before.png" title="New England Whalers" />
            </div>
            <div className="col-12 col-sm-6 portfolioDetails">
              <h3>After</h3>
              <Spacer height={20} />
              <SinglePortfolioImg image_url="/assets/img/portfolio/projects/newenglandwhalers/newengland-after.png" title="New England Whalers" />
            </div>


            <div className="col-12 col-sm-12 portfolioDetails">
              <SinglePortfolioImg image_url="/assets/img/portfolio/projects/newenglandwhalers/diagonal.png" title="New England Whalers" />
              <SinglePortfolioImg image_url="/assets/img/portfolio/projects/newenglandwhalers/straight.png" title="New England Whalers" />
              <SinglePortfolioImg image_url="/assets/img/portfolio/projects/newenglandwhalers/hero-right.png" title="New England Whalers" />
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

export default NewEnglandWhalers;
