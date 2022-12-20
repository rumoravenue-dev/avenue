import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

function CarouselPort() {
  return (
    <Carousel nextIcon prevIcon>
      <Carousel.Item>
        <img src='/assets/img/portfolio/Rectangle1.webp' alt="portfolio-1"/>
        <img src='/assets/img/portfolio/Rectangle2.webp' alt="portfolio-2"/>
        <img src='/assets/img/portfolio/Rectangle3.webp' alt="portfolio-3"/>
        <img src='/assets/img/portfolio/Rectangle4.webp' alt="portfolio-4"/>
      </Carousel.Item>
      <Carousel.Item>
        <img src='/assets/img/portfolio/Rectangle1.webp' alt="portfolio-1"/>
        <img src='/assets/img/portfolio/Rectangle2.webp' alt="portfolio-2"/>
        <img src='/assets/img/portfolio/Rectangle3.webp' alt="portfolio-3"/>
        <img src='/assets/img/portfolio/Rectangle4.webp' alt="portfolio-4"/>
      </Carousel.Item>
      <Carousel.Item>
        <img src='/assets/img/portfolio/Rectangle1.webp' alt="portfolio-1"/>
        <img src='/assets/img/portfolio/Rectangle2.webp' alt="portfolio-2"/>
        <img src='/assets/img/portfolio/Rectangle3.webp' alt="portfolio-3"/>
        <img src='/assets/img/portfolio/Rectangle4.webp' alt="portfolio-4"/>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselPort;