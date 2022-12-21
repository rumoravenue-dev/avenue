import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import "./styles/sliders.css"

function CarouselHennessy() {

  return (
    <>
      <div className='carouselProjects'>
        <div className='projectsTitle'>
          <h3>Hennessy</h3>
        </div>
        <Carousel>
          <Carousel.Item>
            <img src='/assets/img/sliders/HENNESSY1.webp' alt="slide-1"/>
          </Carousel.Item>
          <Carousel.Item>
            <img src='/assets/img/sliders/HENNESSY2.webp' alt="slide-2"/>
          </Carousel.Item>
          <Carousel.Item>
            <img src='/assets/img/sliders/HENNESSY3.webp' alt="slide-3"/>
          </Carousel.Item>
          <Carousel.Item>
            <img src='/assets/img/sliders/HENNESSY4.webp' alt="slide-4"/>
          </Carousel.Item>
        </Carousel>
      </div>
    </>
  );
}

export default CarouselHennessy;
