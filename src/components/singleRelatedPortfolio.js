
import ReactSwipe from 'react-swipe';
import Spacer from './spacer';

import { useCallback, useEffect, useState } from "react";



const ITEMS_LOAD = 2;

const SingleRelatedPortfolio = (props) => {
  let reactSwipeEl;
 
  const inputArray = props.portfolioItems

  const slides = inputArray.reduce((resultArray, item, index) => { 
  const chunkIndex = Math.floor(index/ITEMS_LOAD)

  if(!resultArray[chunkIndex]) {
    resultArray[chunkIndex] = [] // start a new chunk
  }

  resultArray[chunkIndex].push(item)

  return resultArray
  }, [])

  let slideCount = 1;
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
                
                {slides.map((value,key) =>
                  <div className='carouselSlide' data-index={key+1}>
                    <div className='slides'>
                      <img className='slidesIMG' src={value[0]} alt="slide-1"  />
                      <img className='slidesIMG' src={value[1]} alt="slide-1" />
                    </div>
                  </div>
                )}
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
