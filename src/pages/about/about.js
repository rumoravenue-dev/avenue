import React from 'react';
import { HelmetProvider } from 'react-helmet-async';
import Header from '../../components/header';
import Footer from '../../components/footer';
import './style.css'

function About() {
  return (
    <div className='containerAbout'>  
      <div className='wrapper'>
        <HelmetProvider>
          <title> About - 5pm </title>
          <meta property="twitter:title" content="About - 5pm"/>
          <meta property="og:title" content="About - 5pm"/>
        </HelmetProvider>
      </div>

      <Header />

      <section className="mainAbout container-fluid">
        <div className="row">
          <div className="col-12 col-sm-12 col-xl-12 col-lg-12 col-md-12 mainSomewhereText">
            <img className="sunsetImg" src="/assets/img/contact/Sunset.svg" alt="sunset" />
            <h1>It's 5pm somewhere</h1> 
          </div>
        </div>
      </section>

      <section className="weAreTextContainer container-fluid">
        <div className="row">
          <div className="col-12 col-sm-12 col-xl-12 col-lg-12 col-md-12 weAreText">
            <h1> We are a boutique presentation agency that was born out of protest against bad presentations. We believe that presentations are either effective or they better not exist. Bad presentations are a waste of time. They can ruin days, months or even years of good work. Effective presentations can win market share, promotions and people’s hearts and minds. </h1>
          </div>
        </div>
      </section>

      {/* <section className='weFocus container-fluid'>
        <div className='row'>
          <div className='col-12 col-sm-12 col-xl-12 col-lg-12 col-md-12 focusText'>
            <div className='col-12 col-sm-4 col-xl-4 col-lg-4 col-md-12 divWine'>
              <img className='wineImage' src="/assets/img/about/Slide01.webp" alt="wine"/>
            </div>
            <div>
              <h1>We focus on presentations exclusively,</h1>
              <h4>that’s the reason we are so good at all their aspects – storytelling, design, delivery and tools. No matter the challenge – from quarterly result presentations to a game-changing IPO, we can help you achieve your goal.</h4>
              <h2>WE COME THROUGH FOR YOU</h2>
            </div>
          </div>
        </div>
      </section> */}

      {/* <Footer /> */}
    </ div>
  )
}

export default About;
