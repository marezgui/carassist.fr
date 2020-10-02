import React from "react";

import SliderSlick from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


import CardService from '../CardService/CardService';

import styled from 'styled-components';

const tires = 'https://firebasestorage.googleapis.com/v0/b/car-assist-278209.appspot.com/o/garage%2Ftires.jpg?alt=media&token=82676d4f-f0e2-42e6-89f2-273f025e1173';
const parallelism = 'https://firebasestorage.googleapis.com/v0/b/car-assist-278209.appspot.com/o/garage%2Fparallelism.jpg?alt=media&token=83a82b98-e14c-43d4-a339-f2586752e3c9';
const brake = 'https://firebasestorage.googleapis.com/v0/b/car-assist-278209.appspot.com/o/garage%2Ffrein.jpg?alt=media&token=d23218d2-9edf-4d3b-82f9-c7470e55fe4c';
const emptying = 'https://firebasestorage.googleapis.com/v0/b/car-assist-278209.appspot.com/o/garage%2Fvidange.jpg?alt=media&token=dfa2575b-ef99-45c2-987f-9650af6026ec';

const Slider = styled(SliderSlick)`
    .slick-prev:before, .slick-next:before {
        color: red;
    }
    .slick-dots li button:before {
        color: red;
      }
    .slick-prev {
        z-index: 1;
        position: absolute;
        left: 3px;
        
    }
    .slick-next {
        z-index: 1;
        position: absolute;
        right: 3px;
    }
`;

const cardServiceSlider = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 0,
        responsive: [
          {
            breakpoint: 1259,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
            }
          },
          {
            breakpoint: 949,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
            }
          },
          {
            breakpoint: 639,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };

    return (
        <div style={{ width: "100%", margin: "auto", position: "relative"}}>
        <Slider {...settings}>
            <CardService
                srcPhoto={tires}
                service="Pneumatique"
                description="Montage et Equilibrage des Pneus"
                price="10" />

            <CardService
                srcPhoto={parallelism}
                service="Parallélisme"
                description="Contrôle et Parallélisme Avant"
                price="40" />
            
            <CardService
                srcPhoto={brake}
                service="Montage Freins"
                description="Disques et Plaquettes avants ou arrières"
                price="50" />
            
            <CardService
                srcPhoto={emptying}
                service="Vidange"
                description="Main d'oeuvre"
                price="30" />
        </Slider>
        </div>
    );
};

export default cardServiceSlider;
