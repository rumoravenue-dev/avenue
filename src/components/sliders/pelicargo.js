import React from 'react';
import { CloseButton } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import "./styles/sliders.css"

function CarouselPelicargo({ onClose = (props) => { } }) {

  return (
    <>
      <div className='carouselProjects'>
        <div className='row d-flex justify-content-between projectsTitle'>
          <h3 className='p-0 m-0 col col-md-4'>Pelicargo</h3>
          <CloseButton variant="white" onClick={onClose} />
        </div>
        <Carousel>
          <Carousel.Item>
            <img src='/assets/img/portfolio/projects/pelicargo/Pelicargo1.webp' alt="slide-1"/>
          </Carousel.Item>
          <Carousel.Item>
            <img src='/assets/img/portfolio/projects/pelicargo/Pelicargo2.webp' alt="slide-2"/>
          </Carousel.Item>
          <Carousel.Item>
            <img src='/assets/img/portfolio/projects/pelicargo/Pelicargo3.webp' alt="slide-3"/>
          </Carousel.Item>
          <Carousel.Item>
            <img src='/assets/img/portfolio/projects/pelicargo/Pelicargo4.webp' alt="slide-4"/>
          </Carousel.Item>
          <Carousel.Item>
            <img src='/assets/img/portfolio/projects/pelicargo/Pelicargo5.webp' alt="slide-5"/>
          </Carousel.Item>
          <Carousel.Item>
            <img src='/assets/img/portfolio/projects/pelicargo/Pelicargo6.webp' alt="slide-6"/>
          </Carousel.Item>
          <Carousel.Item>
            <img src='/assets/img/portfolio/projects/pelicargo/Pelicargo7.webp' alt="slide-7"/>
          </Carousel.Item>
          <Carousel.Item>
            <img src='/assets/img/portfolio/projects/pelicargo/Pelicargo8.webp' alt="slide-8"/>
          </Carousel.Item>
          <Carousel.Item>
            <img src='/assets/img/portfolio/projects/pelicargo/Pelicargo9.webp' alt="slide-9"/>
          </Carousel.Item>
          <Carousel.Item>
            <img src='/assets/img/portfolio/projects/pelicargo/Pelicargo10.webp' alt="slide-10"/>
          </Carousel.Item>
          <Carousel.Item>
            <img src='/assets/img/portfolio/projects/pelicargo/Pelicargo11.webp' alt="slide-11"/>
          </Carousel.Item>
        </Carousel>
      </div>
    </>
  );
}

export default CarouselPelicargo;