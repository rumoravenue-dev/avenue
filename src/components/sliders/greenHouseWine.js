import React from 'react';
import { CloseButton } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import "./styles/sliders.css"

function CarouselGreenHouseWine({ onClose = (props) => { } }) {

  return (
    <>
      <div className='carouselProjects'>
        <div className='row d-flex justify-content-between projectsTitle'>
          <h3 className='p-0 m-0 col col-md-4'>Greenhouse Wine</h3>
          <CloseButton variant="white" onClick={onClose} />
        </div>
        <Carousel>
          <Carousel.Item>
            <img src='/assets/img/sliders/GREENHOUSEWINE1.webp' alt="slide-1"/>
          </Carousel.Item>
          <Carousel.Item>
            <img src='/assets/img/sliders/GREENHOUSEWINE2.webp' alt="slide-2"/>
          </Carousel.Item>
          <Carousel.Item>
            <img src='/assets/img/sliders/GREENHOUSEWINE3.webp' alt="slide-3"/>
          </Carousel.Item>
          <Carousel.Item>
            <img src='/assets/img/sliders/GREENHOUSEWINE4.webp' alt="slide-4"/>
          </Carousel.Item>
        </Carousel>
      </div>
    </>
  );
}

export default CarouselGreenHouseWine;