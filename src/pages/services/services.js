import LazyLoad from 'react-lazy-load';
import { Swiper, SwiperSlide } from 'swiper/react';
import style from './style.css'
import { Helmet } from 'react-helmet';
import Header from '../../components/header'
import Presentation from '../../components/presentation'
import OurServices from '../../components/ourservices'
import GetInContat from '../../components/getInContact'
import Footer from '../../components/footer'
import { useEffect, useState } from 'react'
import CarouselWords from '../../components/carouselWords';
const Services = () => {
  const [changeText, setChangeText] = useState("GOOD TO")
  useEffect(() => {
      setInterval(() => {
          if(changeText == "GOOD TO") {
              setChangeText("WHAT TO")
          } else if(changeText == "WHAT TO") {
              setChangeText("YOU SHOULD")
          } else if(changeText == "YOU SHOULD") {
              setChangeText("GOOD TO")
          }
      }, 2000);
  }, [changeText])
  return (
      <>
          <Helmet>
              <title> Services - 5pm </title>
          </Helmet>
          <Header />
          <section className="mainServices container-fluid">
              <div className="row d-flex justify-content-center">
                <div className="mainServicesText">
                    <div className="col-12 col-sm-12 col-xl-12 col-lg-12 col-md-12">
                          <h1> We create eye-catching & eye-opening presentations that <span> educate </span>, <span> inspire </span> and <span> influence action </span> </h1>
                      </div>
                  </div>
              </div>
          </section>
          <section className='aproachServices container-fluid'>
              <div className='row rowAproach justify-content-center'>
                  <div className='col-12 col-sm-5 col-xl-5 col-lg-5 col-md-5'>
                      <div className='firstColAproach'>
                          <h2> We do this by following a simple approach: </h2>
                          <h3> <a> SETTING A GOAL </a> </h3>
                          <h3> <a> IDENTIFYING AUDIENCE </a> </h3>
                          <h3> <a> CONTEXT IS KEY </a> </h3>
                      </div>
                  </div>
                  <div className='col-12 col-sm-4 col-xl-4 col-lg-4 col-md-4'>
                      <div className='secondColAproach'>
                          <LazyLoad threshold={1}>
                              <img className='imgModelAproach' src="/assets/img/services/model.webp" alt="model image"/>
                          </LazyLoad>
                      </div>
                  </div>
              </div>
          </section>
          <section className='processServices container-fluid'>
              <div className='row'>
                  <div className='col-12 col-sm-12 col-xl-12 col-lg-12 col-md-12'>
                      <div className='firstColProcess'>
                          <h2> OUR PROCESS </h2>
                          <p> No need to overcomplicate it. We’re here to create phenomenal designs customized for you. </p>
                      </div>
                  </div>
                  <div className='col-12 col-sm-3 col-xl-3 col-lg-3 col-md-3 p-0'>
                      <LazyLoad>
                          <img src="/assets/img/services/Rectangle5981.webp" alt="bottle of wine"/>
                      </LazyLoad>
                  </div>
                  <div className='col-12 col-sm-4 col-xl-4 col-lg-4 col-md-4 secondColProcess topProcess'>
                      <h3> 1. Discovery </h3>
                      <p> We work with you to understand your goals, ask better questions, identify your audience, and build context. </p>
                      <h3> 3. DESIGN </h3>
                      <p> We leverage design to tell your story better. We’ll get people staring — and thinking. Clean, beautiful designs that help your narrative flow. </p>
                      <h3> 5. DELIVERY </h3>
                      <p> Finally, we will carefully collect and prepare all project files to ensure smooth and easy use in the future. </p>
                  </div>
                  <div className='col-12 col-sm-5 col-xl-5 col-lg-5 col-md-5 thirdColProcess topProcess'>
                      <h3> 2. Storytelling </h3>
                      <p> We will develop a foundation of the deck. We’re going to tell a story — build tone, voice, and a foundational structure that will get people thinking. </p>
                      <h3> 4. FEEDBACK </h3>
                      <p> After each phase wraps up, we’ll present our work to collect and implement your feedback if such appears. </p>
                  </div>
              </div>
          </section>
          <section className='goodToKnowServices container-fluid p-0'>
              <div className='row'>
                  <div className='col-12 col-sm-12 col-xl-12 col-lg-12 col-md-12'>
                      <LazyLoad>
                          <img src="/assets/img/services/Rectangle5982.webp" alt="over 100m"/>
                      </LazyLoad>
                  </div>
              </div>
              <div className='goodToKnowText'>
                  <div className='goodknowcarousel'><CarouselWords /></div>
                  <h2> know </h2>
              </div>
          </section>
          <Presentation />
          <OurServices />
          <section className='addonsServices container-fluid'>
              <div className='row'>
                  <div className='col-12 col-sm-12 col-xl-12 col-lg-12 col-md-12'>
                      <h2> ADD-ONS </h2>
                  </div>
              </div>
              <div className='row'>
                  <div className='col-12 col-sm-3 col-xl-3 col-lg-3 col-md-3 firstColIconsAddons'>
                      <img src='/assets/img/services/animations.svg' alt="icon animations"/>
                      <h3> Animations </h3>
                  </div>
                  <div className='col-12 col-sm-3 col-xl-3 col-lg-3 col-md-3'>
                      <img src='/assets/img/services/infographics.svg' alt="icon complex infographics"/>
                      <h3 className='complexInfoAddon'> Complex Infographics </h3>
                  </div>
                  <div className='col-12 col-sm-3 col-xl-3 col-lg-3 col-md-3'>
                      <img src='/assets/img/services/asset.svg' alt="icon asset sourcing"/>
                      <h3> Asset Sourcing <br /> <span> Based on asset </span> </h3>
                  </div>
                  <div className='col-12 col-sm-3 col-xl-3 col-lg-3 col-md-3'>
                      <img src='/assets/img/services/editing.svg' alt="icon photo editing"/>
                      <h3> Photo Editing </h3>
                  </div>
              </div>
              <div className='row secondRowAddons'>
                  <div className='col-12 col-sm-4 col-xl-4 col-lg-4 col-md-3'>
                      <img src='/assets/img/services/custom.svg' alt="icon custom"/>
                      <h3> Custom <br /> <span> White Glove Service </span> </h3>
                  </div>
                  <div className='col-12 col-sm-3 col-xl-3 col-lg-3 col-md-3'>
                      <img src='/assets/img/services/timeblock.svg' alt="icon time block off"/>
                      <h3> Time Block off <br /> <span> hourly </span> </h3>
                  </div>
                  <div className='col-12 col-sm-4 col-xl-4 col-lg-4 col-md-3'>
                      <img src='/assets/img/services/rush.svg' alt="icon rush"/>
                      <h3> Rush <br /> <span> +fee </span> </h3>
                  </div>
              </div>
          </section>
          {/* <GetInContat />
          <Footer /> */}
      </>
  )
}
export default Services;