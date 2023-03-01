import React from "react";
import "./style.css";
import Header from "../../components/header";
import OurServices from "../../components/ourservices";
import TakeALook from "../../components/takeALook";
import ControlledCarousel from "../../components/carousel";
import Footer from "../../components/footer";
import Accordion from "../../components/q&a";
import { accordionData } from "../../components/q&aContent";
import GetInContact from "../../components/getInContact";
import Brands from "../../components/brands";
import Spacer from "../../components/spacer";

function App() {
  const home = true;

  return (
    <>
      <Header />
      <section className="homeMain" id="homeMain">
        <div className="container-wide">
          <div className="max-content">
            <h1 className="the-title alt">
              Around the clock presentation design at your service.
            </h1>
            {/* <p>5pm is your outsourced in-house presentation team</p> */}
            <a href="#homePresentations">
              <img src="assets/img/home/main/Vector 11.svg" alt="arrow down" />
            </a>
          </div>
        </div>
      </section>

      <section className="homePresentations" id="homePresentations">
        <div className="container-wide">
          <div className="max-content center">
            <h3>
            We're dedicated to helping <strong>agencies, corporations, and startups</strong> create <strong>visually stunning presentations</strong> that captivate audiences and drive results.
            </h3>
            <h5>
            Our team provides pixel-perfect designs that reflect your message while keeping your viewers engaged.
            </h5>
          </div>
          <div className="chomeCarousel">
            <ControlledCarousel />
          </div>
        </div>
      </section>

      <Brands />
      <Spacer height={120} />

      <OurServices />

      <TakeALook enableLazyBehaviour={false} />

      <Spacer height={180} />

      <div className="container-wide">
        <section className="homeQuestions">
          <div className="row">
            <div className="col-12 col-sm-12">
              <hr />
              <h1>QUESTIONS?</h1>
              <p>Feel free to reach out or take a look at our FAQs.</p>
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
