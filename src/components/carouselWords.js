import React from "react";
import { CCarousel, CCarouselItem } from '@coreui/react'

import "./styles/carouselWords.css"

const CarouselWords = () => {

    return (
        <>
            <CCarousel controls={false} indicators={false} interval={1000}>
                <CCarouselItem className="carouselText">
                    <span>GOOD TO</span>
                </CCarouselItem>
                <CCarouselItem className="carouselText">
                    <span>WHAT TO</span>
                </CCarouselItem>
                <CCarouselItem className="carouselText">
                    <span>YOU SHOULD</span>
                </CCarouselItem>
            </CCarousel>
        </>
    );
};

export default CarouselWords;
