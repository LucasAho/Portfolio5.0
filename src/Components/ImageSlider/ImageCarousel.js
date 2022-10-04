import React from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

import { SliderData } from './SliderData';

const ImageCarousel = () => {
    return (
        <Carousel autoPlay={5000} infiniteLoop showArrows={false} showStatus={false} showIndicators={false} showThumbs={false}>
            {SliderData.map((slide, index) => {
                return (
                    <div key={index}>
                        <img src={slide.image} />
                    </div>
                );
            })}
        </Carousel>
    );
};

export default ImageCarousel;