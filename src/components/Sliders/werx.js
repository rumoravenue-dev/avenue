import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import "./styles/sliders.css"

function CarouselWerx() {

  return (
    <>
      <div className='carouselProjects'>
        <div className='projectsTitle'>
          <h3>Werx</h3>
        </div>
        <Carousel variant='dark'>
          <Carousel.Item>
            <img src='/assets/img/portfolio/Rectangle1.webp' alt="portfolio-1"/>
          </Carousel.Item>
          <Carousel.Item>
            <img src='/assets/img/portfolio/Rectangle1.webp' alt="portfolio-1"/>
          </Carousel.Item>
          <Carousel.Item>
            <img src='/assets/img/portfolio/Rectangle1.webp' alt="portfolio-1"/>
          </Carousel.Item>
        </Carousel>
      </div>
    </>
  );
}

export default CarouselWerx;