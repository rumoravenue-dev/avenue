import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import ImageSlider from 'react-image-comparison-slider';

import './styles/carousel.css';

function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect} className="carouselMain" nextIcon prevIcon>
      <Carousel.Item className='carouselItem'>
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
      </Carousel.Item>
      <Carousel.Item>
        ...
      </Carousel.Item>
    </Carousel>
  );
}

export default ControlledCarousel;