import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import "./styles/sliders.css"

function CarouselInPremisse() {

  return (
    <>
      <div className='carouselProjects'>
        <div className='projectsTitle'>
          <h3>In Premisse</h3>
        </div>
        <Carousel variant='dark'>
          <Carousel.Item>
            <img src='/assets/img/sliders/INPREMISSE1.webp' alt="slide-1"/>
          </Carousel.Item>
          <Carousel.Item>
            <img src='/assets/img/sliders/INPREMISSE2.webp' alt="slide-2"/>
          </Carousel.Item>
          <Carousel.Item>
            <img src='/assets/img/sliders/INPREMISSE3.webp' alt="slide-3"/>
          </Carousel.Item>
          <Carousel.Item>
            <img src='/assets/img/sliders/INPREMISSE4.webp' alt="slide-4"/>
          </Carousel.Item>
        </Carousel>
      </div>
    </>
  );
}

export default CarouselInPremisse;