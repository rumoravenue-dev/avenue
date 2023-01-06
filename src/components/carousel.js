import React from "react";
import ImageSlider from "react-image-comparison-slider";
import ReactSwipe from "react-swipe";

import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

import "./styles/carousel.css";

function ControlledCarousel() {
  let reactSwipeEl;

  return (
    <div className="carouselHome">
      <div className="controllerDescription">
        <div className="carouselControls">
          <a className="buttonPrev" onClick={() => reactSwipeEl.prev()}>
            <h1>
              <AiOutlineLeft color="white" />
            </h1>
          </a>
          <a className="buttonNext" onClick={() => reactSwipeEl.next()}>
            <h1>
              <AiOutlineRight color="white" />
            </h1>
          </a>
        </div>
        <div className="carouselDescription">
          <div className="row justify-content-between">
            <div className="col-12 col-md-4 column-before">
              <h6>Before</h6>
            </div>
            <div  className="col-12 col-md-4 column-after">
              <h6>After</h6>
            </div>
          </div>
        </div>
      </div>

      <ReactSwipe
        className="carousel"
        swipeOptions={{ continuous: true, disableScroll: true }}
        ref={(el) => (reactSwipeEl = el)}
        widthOfSiblingSlidePreview={1500}
      >

        <div className="carouselContent">
          <ImageSlider
            image1="/assets/img/home/carousel/AB-Sampling-Deck-_after_.webp"
            image2="/assets/img/home/carousel/AB-Sampling-Deck-_before_-1.webp"
            onSlide={() => {
              console.log("sliding");
            }}
            sliderColor="transparent"
          />
        </div>

        <div className="carouselContent">
          <ImageSlider
            image1="/assets/img/home/carousel/Gaylord_after.webp"
            image2="/assets/img/home/carousel/Gaylord-_before__Page_2.webp"
            onSlide={() => {
              console.log("sliding");
            }}
            sliderColor="transparent"
          />
        </div>

        <div className="carouselContent">
          <ImageSlider
            image1="/assets/img/home/carousel/Canteen_after-01.webp"
            image2="/assets/img/home/carousel/Canteen_before-01.webp"
            onSlide={() => {
              console.log("sliding");
            }}
            sliderColor="transparent"
          />
        </div>
      </ReactSwipe>

      <div className="controllerDrag">
        <h6>← CLICK & DRAG →</h6>
      </div>
    </div>
  );
}

export default ControlledCarousel;
