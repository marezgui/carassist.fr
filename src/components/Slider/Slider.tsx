import React from "react";
import Slider from "react-slick";
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from 'styled-components';

const StyledSlider = styled(Slider)`
    .slick-dots {
        bottom: 0;
    }
    .slick-prev, .slick-next {
        z-index: 1;
    }
    .slick-prev { left: 4px; }
    .slick-next { right: 4px; } 
    .slick-dots li.slick-active button:before {
        color: white;
        opacity: 1;
    }
    .slick-dots li button::before {
        color: white;
        opacity: 0.5;
    }
`;

const MySlider = ({children}: any) => {
    const settings = {
        // lazyLoad: 'ondemand',
        arrows: true,
        dots: true,
        infinite: true,
        speed: 500,
        // fade: true,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    return (
      <StyledSlider {...settings}>
          {children}
      </StyledSlider>
    );
};

export default MySlider;
