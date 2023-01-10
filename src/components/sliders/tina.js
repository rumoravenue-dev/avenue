import React from 'react';
import { CloseButton } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import "./styles/sliders.css"

function CarouselTina({ onClose = (props) => { } }) {

  return (
    <>
      <div className='carouselProjects'>
        <div className='row d-flex justify-content-between projectsTitle'>
          <h3 className='p-0 m-0 col col-md-4'>Tina</h3>
          <CloseButton variant="white" onClick={onClose} />
        </div>
        <Carousel>
          <Carousel.Item>
            <img src='/assets/img/sliders/TINA1.webp' alt="slide-1"/>
          </Carousel.Item>
          <Carousel.Item>
            <img src='/assets/img/sliders/TINA2.webp' alt="slide-2"/>
          </Carousel.Item>
          <Carousel.Item>
            <img src='/assets/img/sliders/TINA3.webp' alt="slide-3"/>
          </Carousel.Item>
          <Carousel.Item>
            <img src='/assets/img/sliders/TINA4.webp' alt="slide-4"/>
          </Carousel.Item>
          <Carousel.Item>
            <img src='/assets/img/sliders/TINA5.webp' alt="slide-5"/>
          </Carousel.Item>
          <Carousel.Item>
            <img src='/assets/img/sliders/TINA6.webp' alt="slide-6"/>
          </Carousel.Item>
        </Carousel>
      </div>
    </>
  );
}

export default CarouselTina;
