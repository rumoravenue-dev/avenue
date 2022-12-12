import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';

function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img src='assets/img/home/presentations/Frame 214.webp' alt="slide-1" />
      </Carousel.Item>
      <Carousel.Item>
        <img src="assets/img/home/presentations/Frame 214.webp" alt="Second slide"/>
      </Carousel.Item>
      <Carousel.Item>
        <img src="assets/img/home/presentations/Frame 214.webp" alt="Third slide" />
      </Carousel.Item>
    </Carousel>
  );
}

export default ControlledCarousel;