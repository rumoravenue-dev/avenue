import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import "./styles/sliders.css"

function CarouselGaylordHotels() {

  return (
    <>
      <div className='carouselProjects'>
        <div className='projectsTitle'>
          <h3>Gaylord Hotels</h3>
        </div>
        <Carousel variant='dark'>
          <Carousel.Item>
            <img src='/assets/img/portfolio/projects/gaylord/Gaylord_01.webp' alt="slide-1" />
          </Carousel.Item>
          <Carousel.Item>
            <img src='/assets/img/portfolio/projects/gaylord/Gaylord_02.webp' alt="slide-2" />
          </Carousel.Item>
          <Carousel.Item>
            <img src='/assets/img/portfolio/projects/gaylord/Gaylord_03.webp' alt="slide-3" />
          </Carousel.Item>
          <Carousel.Item>
            <img src='/assets/img/portfolio/projects/gaylord/Gaylord_04.webp' alt="slide-4" />
          </Carousel.Item>
          <Carousel.Item>
            <img src='/assets/img/portfolio/projects/gaylord/Gaylord_05.webp' alt="slide-5" />
          </Carousel.Item>
        </Carousel>
      </div>
    </>
  );
}

export default CarouselGaylordHotels;