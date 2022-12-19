import React from "react";
import './style.css';

import Header from "../../components/header";
import OurServices from '../../components/ourservices'
import TakeALook from '../../components/takeALook'
import ControlledCarousel from "../../components/carousel";
import Footer from "../../components/footer";
import Accordion from "../../components/q&a";
import { accordionData } from '../../components/q&aContent';
import GetInContact from "../../components/getInContact";
import Brands from "../../components/brands";

function App() {
  const home = true;

  return (
    <>
    
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

      <Brands />

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

      <GetInContact />
      <Footer />

    </>
  );
}

export default App;
