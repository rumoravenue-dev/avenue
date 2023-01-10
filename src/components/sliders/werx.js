import React from 'react';
import { CloseButton } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import "./styles/sliders.css"

function CarouselWerx({ onClose = (props) => { } }) {

  return (
    <>
      <div className='carouselProjects'>
        <div className='row d-flex justify-content-between projectsTitle'>
          <h3 className='p-0 m-0 col col-md-4'>Werx</h3>
          <CloseButton variant="white" onClick={onClose} />
        </div>
        <Carousel>
          <Carousel.Item>
            <img src='/assets/img/portfolio/projects/werx/werx1.webp' alt="slide-1" />
          </Carousel.Item>
          <Carousel.Item>
            <img src='/assets/img/portfolio/projects/werx/werx2.webp' alt="slide-2" />
          </Carousel.Item>
          <Carousel.Item>
            <img src='/assets/img/portfolio/projects/werx/werx3.webp' alt="slide-3" />
          </Carousel.Item>
          <Carousel.Item>
            <img src='/assets/img/portfolio/projects/werx/werx4.webp' alt="slide-4" />
          </Carousel.Item>
          <Carousel.Item>
            <img src='/assets/img/portfolio/projects/werx/werx5.webp' alt="slide-5" />
          </Carousel.Item>
          <Carousel.Item>
            <img src='/assets/img/portfolio/projects/werx/werx6.webp' alt="slide-6" />
          </Carousel.Item>
          <Carousel.Item>
            <img src='/assets/img/portfolio/projects/werx/werx7.webp' alt="slide-7" />
          </Carousel.Item>
          <Carousel.Item>
            <img src='/assets/img/portfolio/projects/werx/werx8.webp' alt="slide-8" />
          </Carousel.Item>
          <Carousel.Item>
            <img src='/assets/img/portfolio/projects/werx/werx9.webp' alt="slide-9" />
          </Carousel.Item>
          <Carousel.Item>
            <img src='/assets/img/portfolio/projects/werx/werx10.webp' alt="slide-10" />
          </Carousel.Item>
        </Carousel>
      </div>
    </>
  );
}

export default CarouselWerx;