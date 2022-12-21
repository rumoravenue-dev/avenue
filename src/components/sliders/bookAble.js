import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import "./styles/sliders.css"

function CarouselBookAble() {

  return (
    <>
      <div className='carouselProjects'>
        <div className='projectsTitle'>
          <h3>Book Able</h3>
        </div>
        <Carousel>
          <Carousel.Item>
            <img src='/assets/img/portfolio/projects/bookable/Artboard 1.webp' alt="slide-1"/>
          </Carousel.Item>
          <Carousel.Item>
            <img src='/assets/img/portfolio/projects/bookable/Artboard 2.webp' alt="slide-2"/>
          </Carousel.Item>
          <Carousel.Item>
            <img src='/assets/img/portfolio/projects/bookable/artboard-3.webp' alt="slide-3"/>
          </Carousel.Item>
          <Carousel.Item>
            <img src='/assets/img/portfolio/projects/bookable/artboard-4.webp' alt="slide-4"/>
          </Carousel.Item>
          <Carousel.Item>
            <img src='/assets/img/portfolio/projects/bookable/artboard-5.webp' alt="slide-5"/>
          </Carousel.Item>
        </Carousel>
      </div>
    </>
  );
}

export default CarouselBookAble;