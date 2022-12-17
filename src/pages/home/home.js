import React from "react";
import './style.css';

import Header from "../../components/header";
import OurServices from '../../components/ourservices'
import TakeALook from '../../components/takeALook'
import ControlledCarousel from "../../components/carousel";
import Footer from "../../components/footer";
import Accordion from "../../components/q&a";
import { accordionData } from '../../components/q&aContent';

function App() {
  const home = true;

  return (
    <div className="App">

      <section className="homeMain" id="homeMain">
      <Header/>
        <div className="row">
          <div className="col-12 col-sm-12 homeText">
            <h1>We help people and companies achieve their goals by creating presentations that work</h1>
            <p>5pm is your outsourced in-house presentation team</p>
            <a href="#homePresentations">
            <img src="assets/img/home/main/Vector 11.svg" alt="arrow down"/>
            </a>
          </div>
        </div>
      </section>

      <section className="homePresentations" id="homePresentations">
        <div className="row">
          <div className="col-12 col-sm-12">
            <h3>We strategically partner with <strong>agencies, corporations, and startups</strong> that need <strong>pixel perfect presentation design</strong> to visually communicate with their teams, clients, shareholders, and/or consumers.</h3>
            <div className="col-12 col-sm-12 homeCarousel">
              <ControlledCarousel />
            </div>
          </div>
        </div>
      </section>

      <section className="homePartnerships">
        <div className="row homePartnershipsRow">
          <div className="col-12 col-sm-12 col-sm-12 partnershipsTitle">
            <h2>We've build long lasting partnerships with the most ambitious brands across the globe </h2>
          </div>
          <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 partnershipsImages">
            <div className="row">
              <div className="col-12 col-sm-4 col-md-4 col-lg-4 col-xl-3 partnershipsImage">
                <img src='/assets/img/home/Partnerships/AnheuserBusch.webp' alt="" />
              </div>
              <div className="col-12 col-sm-4 col-md-4 col-lg-4 col-xl-3 partnershipsImage">
                <img src='/assets/img/home/Partnerships/Marriott.webp' alt="" />
              </div>
              <div className="col-12 col-sm-4 col-md-4 col-lg-4 col-xl-2 partnershipsImage">
                <img src='/assets/img/home/Partnerships/Ciroc.webp' alt="" />
              </div>
              <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-2 partnershipsImage">
                <img src='/assets/img/home/Partnerships/Rumor.webp' alt="" />
              </div>
              <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-2 partnershipsImage">
                <img src='/assets/img/home/Partnerships/GH-Logo-Green.webp' alt="" />
              </div>
              <div className="col-12 col-sm-4 col-md-4 col-lg-4 col-xl-2 partnershipsImage">
                <img src='/assets/img/home/Partnerships/Appcore.webp' alt="" />
              </div>
              <div className="col-12 col-sm-4 col-md-4 col-lg-4 col-xl-3 partnershipsImage">
                <img src='/assets/img/home/Partnerships/Hennessy-VSOP.webp' alt="" />
              </div>
              <div className="col-12 col-sm-4 col-md-4 col-lg-4 col-xl-2 partnershipsImage">
                <img src='/assets/img/home/Partnerships/Pelicargo.webp' alt="" />
              </div>
              <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-3 partnershipsImage">
                <img src='/assets/img/home/Partnerships/Moet-Hennessy-USA.webp' alt="" />
              </div>
              <div className="ccol-12 col-sm-6 col-md-6 col-lg-6 col-xl-2 partnershipsImage">
                <img src='/assets/img/home/Partnerships/Balance-Bunny.webp' alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <OurServices />

      <TakeALook home={home}/>

      <section className="homeQuestions">
        <div className="row">
          <div className="col-12 col-sm-12">
            <hr />
            <h1>DO YOU HAVE ANY QUESTION?</h1>
            <p>Fell free to reach us out or take a look to our FAQ</p>
            <hr />
            <hr />
            <div className="accordion">
              {accordionData.map(({ title, content }) => (
                <Accordion title={title} content={content} />
              ))}
            </div>
          </div>
        </div>
      </section>

    <Footer />
    </div>
  );
}

export default App;
