import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import "./styles/sliders.css"

function CarouselNewEngland() {

  return (
    <>
      <div className='carouselProjects'>
        <div className='projectsTitle'>
          <h3>New England</h3>
        </div>
        <Carousel>
          <Carousel.Item>
            <img src='/assets/img/sliders/NEWENGLAND1.webp' alt="slide-1"/>
          </Carousel.Item>
          <Carousel.Item>
            <img src='/assets/img/sliders/NEWENGLAND2.webp' alt="slide-2"/>
          </Carousel.Item>
          <Carousel.Item>
            <img src='/assets/img/sliders/NEWENGLAND3.webp' alt="slide-3"/>
          </Carousel.Item>
          <Carousel.Item>
            <img src='/assets/img/sliders/NEWENGLAND4.webp' alt="slide-4"/>
          </Carousel.Item>
          <Carousel.Item>
            <img src='/assets/img/sliders/NEWENGLAND5.webp' alt="slide-5"/>
          </Carousel.Item>
        </Carousel>
      </div>
  </>
  );
}

export default CarouselNewEngland;
