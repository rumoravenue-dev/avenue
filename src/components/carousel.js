import React from "react";
import ImageSlider from "react-image-comparison-slider";
import ReactSwipe from "react-swipe";


import "./styles/carousel.css";

const CustomHandle = () => (
  <>
  <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="60"
      fill="none"
      viewBox="0 0 20 60"
      preserveAspectRatio="xMinYMax slice"
    >
      <g clipPath="url(#clip0_602_3393)">
        <path className="custom-handle--inner" stroke="#000" strokeWidth="3" d="M3.5 0v42.88L24.936 64"></path>
        <text
          fill="#fff"
          fontFamily="Inter"
          fontSize="0.8"
          letterSpacing=".3em"
          opacity="0.7"
          transform="rotate(-90 17.152 14.34)"
          style={{ whiteSpace: "pre" }}
        >
          <tspan x="3.947" y="1.1">
            CLICK TO DRAG
          </tspan>
        </text>
      </g>
      <defs>
        <clipPath id="clip0_602_3393">
          <path fill="#fff" d="M0 0H20V60H0z"></path>
        </clipPath>
      </defs>
    </svg>
  </>
)

function ControlledCarousel() {
  let reactSwipeEl;

  return (
    <div className="carouselHome">
      <div className="controllerDescription">
        <div className="carouselControls">
          <a className="buttonPrev" onClick={() => reactSwipeEl.prev()}>
            <img src="/assets/img/home/carousel/Arrowleft.webp" alt="left" />
          </a>
          <a className="buttonNext" onClick={() => reactSwipeEl.next()}>
            <img src="/assets/img/home/carousel/Arrowright.webp" alt="right" />
          </a>
        </div>
        <div className="carouselDescription">
          <div className="row justify-content-between w-100">
            <div className="col-12 col-md-4 column-before">
              <h6>Before</h6>
            </div>
            <div  className="col-12 col-md-4 column-after">
              <h6>After</h6>
            </div>
          </div>
        </div>
      </div>

      <div className="carousel-wrapper">
        <ReactSwipe
          className="carousel"
          swipeOptions={{ continuous: true, disableScroll: true }}
          ref={(el) => (reactSwipeEl = el)}
          widthOfSiblingSlidePreview={1500}
        >

          <div className="carouselContent">
            <ImageSlider
              customHandle={
                <CustomHandle />
              }
              image1="/assets/img/home/carousel/werx-after.jpg"
              image2="/assets/img/home/carousel/werx-before.jpg"
              onSlide={() => {
                console.log("sliding");
              }}
              sliderColor="transparent"
            />
          </div>

          <div className="carouselContent">
            <ImageSlider
              customHandle={
                <CustomHandle />
              }
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
              customHandle={
                <CustomHandle />
              }
              image1="/assets/img/home/carousel/Canteen_after-01.webp"
              image2="/assets/img/home/carousel/Canteen_before-01.webp"
              onSlide={() => {
                console.log("sliding");
              }}
              sliderColor="transparent"
            />
          </div>
        </ReactSwipe>
      </div>

      <div className="controllerDrag">
        <h6>← CLICK & DRAG →</h6>
      </div>
    </div>
  );
}

export default ControlledCarousel;

