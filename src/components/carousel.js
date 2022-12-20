import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import ImageSlider from 'react-image-comparison-slider';
import ReactSwipe from 'react-swipe';

import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";


import './styles/carousel.css';

function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  let reactSwipeEl;

  return (
    <div className='teste'>
      <div className='carouselConreols'>
        <a className='bPrev' onClick={() => reactSwipeEl.prev()}><AiOutlineLeft color="white"/></a>
        <a className='bNext' onClick={() => reactSwipeEl.next()}><AiOutlineRight color="white"/></a>
      </div>

      <ReactSwipe
        className="carouselteste"
        swipeOptions={{ continuous: true }}
        ref={el => (reactSwipeEl = el)}
      >
        <div className="carouselContent">
          <ImageSlider
            image1="assets/img/home/carousel/Atria-Ventures-LP-Presentation.webp"
            image2="assets/img/home/carousel/Atria-Ventures-v6.webp"
            onSlide={() => {
              console.log("sliding");
            }}
            sliderColor="transparent"
          />
        </div>
        

        <div className="carouselContent">
          <ImageSlider
            image1="assets/img/home/carousel/Atria-Ventures-LP-Presentation.webp"
            image2="assets/img/home/carousel/Atria-Ventures-v6.webp"
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



{/**

<div className="carouselContent">
            <ImageSlider
              image1="assets/img/home/carousel/Atria-Ventures-LP-Presentation.webp"
              image2="assets/img/home/carousel/Atria-Ventures-v6.webp"
              onSlide={() => {
                console.log("sliding");
              }}
              sliderColor="transparent"
            />
          </div>

*/}