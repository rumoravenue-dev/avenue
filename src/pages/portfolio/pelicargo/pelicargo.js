import React, { useState } from "react";
import { Helmet } from "react-helmet";
import Header from "../../../components/header";
import Spacer from "../../../components/spacer";
import GetInContact from "../../../components/getInContact";
import Footer from "../../../components/footer";
import ReactSwipe from 'react-swipe';

// import Modal from 'react-modal';
import "./../single-portfolio.css";

function Pelicargo() {
  const portfolio = true;
  let reactSwipeEl;
  // Modal.setAppElement('#portfolio');

  return (
    <>
      <Helmet>
        <title> Portfolio - OnlyFivePM </title>
      </Helmet>
      <Header />
      <section className="singlePortfolio">
        <div className="container-wide">
          <Spacer height={120} />
          <div className="row titleContainer">
            <div className="col-12 col-sm-12 portifolioContent">
              <h4>
                <img
                  className="portfolio-back"
                  src="/assets/img/portfolio/chevron-left.svg"
                  alt="back"
                />
                BACK
              </h4>
              <Spacer height={50} />
              <img
                className="portfolio-single-title"
                src="/assets/img/portfolio/projects/pelicargo/Pelicargo.svg"
                alt="Pelicargo"
              />
            </div>
            <Spacer height={80} />
            <div className="col-12 col-sm-12 portifolioHeader">
              <img
                className="portfolio-single-banner"
                src="/assets/img/portfolio/projects/pelicargo/pelicargo-header.jpg"
                alt="Pelicargo"
              /> 
            </div>
            <Spacer height={80} />
            <div className="col-12 col-sm-12 portfolioDetails">
              <h3>Challenges</h3>
              <Spacer height={20} />
              <p>Develop a product demonstration pitch deck that highlights the simplicity and user-friendliness of the cargo quoting process, while also establishing clear brand guidelines that will facilitate organic growth of the brand.</p>
            </div>
            <Spacer height={50} />
            <div className="col-12 col-sm-8 portfolioDetails industry">
              <h3>Industry</h3>
              <Spacer height={20} />
              <p><span>Transportation</span></p>
            </div>
            <div className="col-12 col-sm-4 portfolioDetails">
              <h3>Tools Used</h3>
              <Spacer height={20} />
              <ul className="tech-stack">
                <li>
                  <img
                      src="/assets/img/portfolio/projects/tools/photoshop.svg"
                      alt="photoshop"
                  />
                </li>
                <li>
                  <img
                      src="/assets/img/portfolio/projects/tools/illustrator.svg"
                      alt="illustrator"
                  />
                </li>
                <li>
                  <img
                      src="/assets/img/portfolio/projects/tools/indesign.svg"
                      alt="indesign"
                  />
                </li>
                <li>
                  <img
                      src="/assets/img/portfolio/projects/tools/canva.svg"
                      alt="canva"
                  />
                </li>
              </ul>
            </div>

            <Spacer height={120} />
            <div className="col-12 col-sm-12 portfolioDetails">
               <img
                  className="portfolio-single-image"
                  src="/assets/img/portfolio/projects/pelicargo/diagonal.png"
                  alt="Pelicargo"
                />
                <Spacer height={120} />
               <img
                  className="portfolio-single-image"
                  src="/assets/img/portfolio/projects/pelicargo/straight.png"
                  alt="Pelicargo"
                />
                <Spacer height={120} />
               <img
                  className="portfolio-single-image"
                  src="/assets/img/portfolio/projects/pelicargo/hero-right.png"
                  alt="Pelicargo"
                />
            </div>

          </div>
          <Spacer height={130} />
        </div>
      </section>

        <section className="mainPortfolio relatedProject">
          <div className="container-wide">
            <Spacer height={120} />
            <div className="col-12 col-sm-12 relatedProjectContainer">
              <h2>Related Projects</h2>
            </div>
            <Spacer height={48} />
            <div className="col-12  portfolioContainer">
              <ReactSwipe
                className="carouselPortfolio"
                swipeOptions={{ continuous: true }}
                ref={el => (reactSwipeEl = el)}
                widthOfSiblingSlidePreview={950}
              >

                <div className='carouselSlide'>
                  <div className='slides'>
                    <img className='slidesIMG' src='/assets/img/sliders/TMRW1.webp' alt="slide-1"  />
                    <img className='slidesIMG' src='/assets/img/portfolio/projects/lildan/LILDAN1.webp' alt="slide-1" />
                  </div>
                </div>
                <div className='carouselSlide'>
                  <div className='slides'>
                    <img className='slidesIMG' src='/assets/img/sliders/NEWENGLAND1.webp' alt="slide-1"/>
                    <img className='slidesIMG' src='/assets/img/sliders/HENNESSY1.webp' alt="slide-1"/>
                  </div>
                </div>
                <div className='carouselSlide'>
                  
                    <img className='slidesIMG' src='/assets/img/sliders/INPREMISSE1.webp' alt="slide-2" />
                  
                </div>
              </ReactSwipe>

              <div className='controls'>
                <div className='controlsPortfolio'>
                  <a className='buttonPrev' onClick={() => reactSwipeEl.prev()}>
                    <img src="/assets/img/home/carousel/Arrowleft.webp" alt="left" />
                  </a>
                  <a className='buttonNext' onClick={() => reactSwipeEl.next()}>
                    <img src="/assets/img/home/carousel/Arrowright.webp" alt="right" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section> 
        <GetInContact portfolio={portfolio} />
      <Footer />
    </>
  );
}

export default Pelicargo;
