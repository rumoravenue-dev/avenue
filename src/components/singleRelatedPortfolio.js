
import ReactSwipe from 'react-swipe';
import Spacer from './spacer';

import { useCallback, useEffect, useState } from "react";



const ITEMS_LOAD = 2;

const SingleRelatedPortfolio = (props) => {
  let reactSwipeEl;

  const portfolioItems = props.portfolio;


  return (
    <>
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
    </>
  )
}

export default SingleRelatedPortfolio
