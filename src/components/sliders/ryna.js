import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import "./styles/sliders.css"

function CarouselRyna() {

  return (
    <>
      <div className='carouselProjects'>
        <div className='projectsTitle'>
          <h3>Ryna</h3>
        </div>
        <Carousel variant='dark'>
          <Carousel.Item>
            <img src='/assets/img/portfolio/projects/ryna/Ryna1.webp' alt="slide-1"/>
          </Carousel.Item>
          <Carousel.Item>
            <img src='/assets/img/portfolio/projects/ryna/Ryna2.webp' alt="slide-2"/>
          </Carousel.Item>
          <Carousel.Item>
            <img src='/assets/img/portfolio/projects/ryna/Ryna3.webp' alt="slide-3"/>
          </Carousel.Item>
          <Carousel.Item>
            <img src='/assets/img/portfolio/projects/ryna/Ryna4.webp' alt="slide-4"/>
          </Carousel.Item>
          <Carousel.Item>
            <img src='/assets/img/portfolio/projects/ryna/Ryna5.webp' alt="slide-5"/>
          </Carousel.Item>
        </Carousel>
      </div>
    </>
  );
}

export default CarouselRyna;