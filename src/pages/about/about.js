import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/header';
import EyeOpening from '../../components/eyeOpening';
import Brands from '../../components/brands';
import GetInContact from '../../components/getInContact';
import Footer from '../../components/footer';
import './style.css'
import Spacer from '../../components/spacer';

function About() {
  const contact = true;

  return (
    <div className='containerAbout'>
      <Helmet>
        <title> About - OnlyFivePM </title>
      </Helmet>

      <Header contact={contact} />

      <section className="mainAbout container-fluid">
        <div className="row">
          <div className="col-12 col-sm-12 col-xl-12 col-lg-12 col-md-12 mainSomewhereText">
            <img className="sunsetImg" src="/assets/img/contact/Sunset.svg" alt="sunset" />
            <h1>IT'S ONLY FIVEPM, LET'S GET TO WORK.</h1>
          </div>
        </div>
      </section>

      <section className="weAreTextContainer container-fluid">
        <div className='container-wide'>
          <Spacer height={150} />
          <div className="row">
            <div className="col-12 col-sm-12 col-xl-12 col-lg-12 col-md-12 weAreText">
              <h1> Our presentation agency was created to fight against ineffective presentations. Good presentations can bring success, while bad ones can waste time and effort. We believe in the power of effective presentations to impact market share, promotions and people's opinions. </h1>
            </div>
          </div>
          <Spacer height={150} />
        </div>
      </section>

      <section className='weFocus container-fluid'>
        <div className='container-wide'>
          <Spacer height={120} />
          <div className='row'>
            <div className='col-12 col-sm-12 col-xl-12 col-lg-12 col-md-12 focusText'>
              <h1>We focus <span className="yellow">on <br /> presentations</span><br /> exclusively,</h1>
              <h4>that's the reason we're so good at all aspects – <span className='black'> storytelling, design, delivery and tools </span>. No matter the challenge – from quarterly result presentations to a game-changing IPO, <span className='black'> we can help you achieve your goal</span>.</h4>
              <h2>WE <span className="yellow">COME THROUGH</span> FOR YOU</h2>
            </div>
          </div>
          <Spacer height={150} />
        </div>
      </section>
      <EyeOpening />

      <Brands />

      <GetInContact />
      
      <Footer />
    </div>
  )
}

export default About;


