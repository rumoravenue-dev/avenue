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
import Spacer from '../../components/spacer';

function App() {
  const home = true;

  return (
    <>
      <Header/> 
      <section className="homeMain" id="homeMain">
        <div className="container-wide">
          <div className="max-content">
            <h1 className="the-title">Presentation design by your favorite workaholics</h1>
            {/* <p>5pm is your outsourced in-house presentation team</p> */}
            <a href="#homePresentations">
            <img src="assets/img/home/main/Vector 11.svg" alt="arrow down"/>
            </a>
          </div>
        </div>
      </section>

      <section className="homePresentations" id="homePresentations">
        <div className="container-wide">
          <div className="max-content center">
            <h3>We strategically partner with <strong>agencies, corporations, and startups</strong> that need <strong>pixel perfect presentation design</strong> to visually communicate with their teams, clients, shareholders, and/or consumers.</h3>
          </div>
          <div className="chomeCarousel">
            <ControlledCarousel />
          </div>
        </div>
      </section>

      <Brands />
      <Spacer height={120} />

      <OurServices />
 
      <TakeALook/> 

      <Spacer height={180} />

      <div className="container-wide">
        <section className="homeQuestions">
          <div className="row">
            <div className="col-12 col-sm-12">
              <hr />
              <h1>DO YOU HAVE ANY QUESTIONS?</h1>
              <p>Feel free to reach out to us or take a look at our FAQs.</p>
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
      </div>
      
      <GetInContact />
      <Footer /> 
    </>
  );
}

export default App;

