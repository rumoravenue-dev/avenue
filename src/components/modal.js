import React from "react";
import Carousel from 'react-bootstrap/Carousel';

function Modal({ closeModal }) {

  return (
    <div className="modal-content">
      <p>Name</p>
      <button onClick={closeModal}>X</button>
      <div className="carousel-container">
        <Carousel>
          <Carousel.Item>
            <img src='/assets/img/portfolio/Rectangle1.webp' alt="portfolio-1"/>
          </Carousel.Item>
          <Carousel.Item>
            <img src='/assets/img/portfolio/Rectangle1.webp' alt="portfolio-1"/>
          </Carousel.Item>
          <Carousel.Item>
            <img src='/assets/img/portfolio/Rectangle1.webp' alt="portfolio-1"/>
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
}

export default Modal;
