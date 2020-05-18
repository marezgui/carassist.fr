import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
// import { toJson } from 'unsplash-js';
// import { unsplash } from '../../api/unsplash';

interface Props {
  bg?: string,
  pageTitle?: string
}

const TitleContainer = styled.div`
  z-index: inherit;
  font-size: 32px;
  font-weight: 900;
  color: white;
`;

const HeroContainer = styled("div")`
  position: relative;
  z-index: 1;
  height: 20%;
  background-image: linear-gradient(63deg, #0028a2, #7640a1);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Overlay = styled.div`
  position: absolute;
  z-index: 0;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(9, 17, 41, 0.5);
`;

// const ImgContainer = styled.div`
//   position: absolute;
//   z-index: -1;
//   top: 0px;
//   left: 0px;
//   bottom: 0px;
//   right: 0px;
//   -webkit-mask-image: -webkit-radial-gradient(center, white, rgb(0, 0, 0));
//   background-color: rgba(37, 59, 86, 0.8);
//   border-radius: inherit;
//   overflow: hidden;
// `;

const Hero = (props: Props) => {
    const { pageTitle } = props;
    // const [randomPic, setRandomPic] = useState('');

    // useEffect(() => {
    //   unsplash.search
    //     .photos("cars", 1, 1)
    //     .then(toJson)
    //     .then((json) => {
    //       setRandomPic(json.results[0].urls.regular);
    //     });
    // });

    return (
      <HeroContainer>
        <Overlay />
        {/* <ImgContainer>
          <img
            src="https://source.unsplash.com/AHnhdjyTNGM/1600x900"
            height="100%"
            width="100%"
          />
        </ImgContainer> */}
        <TitleContainer>{pageTitle}</TitleContainer>
      </HeroContainer>
    );
};

export default Hero;
