import React from 'react';
import ImageSlider from 'react-image-comparison-slider';
import ReactSwipe from 'react-swipe';

import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";


import './styles/carousel.css';

function ControlledCarousel() {


  let reactSwipeEl;

  return (
    <div className='carouselHome'>
      <div className='carouselControls'>
        <a className='buttonPrev' onClick={() => reactSwipeEl.prev()}><h1><AiOutlineLeft color="white"/></h1></a>
        <a className='buttonNext' onClick={() => reactSwipeEl.next()}><h1><AiOutlineRight color="white"/></h1></a>
      </div>

      <ReactSwipe
        className="carousel"
        swipeOptions={{ continuous: true, disableScroll: true,widthOfSiblingSlidePreview: 2 }}
        ref={el => (reactSwipeEl = el)}
        widthOfSiblingSlidePreview={950}
        
      >

        <div className="carouselContent">
          <ImageSlider
            image1="assets/img/portfolio/projects/atria/Atria2.webp"
            image2="assets/img/portfolio/projects/atria/Atria1.webp"
            onSlide={() => {
              console.log("sliding");
            }}
            sliderColor="transparent"
          />
        </div>

      </ReactSwipe>
    </div>
  );
}

export default ControlledCarousel;