import React, { useEffect, useState } from 'react';
import { renderToStaticMarkup } from "react-dom/server";
import styled from 'styled-components';
// import { toJson } from 'unsplash-js';
// import { unsplash } from '../../api/unsplash';
import RoundedSvg from "../atoms/Icons/RoundedSvg";

const svgString = encodeURIComponent(renderToStaticMarkup(<RoundedSvg />));

interface Props {
  bg?: string,
  pageTitle?: string
}

const TitleContainer = styled.div`
  z-index: inherit;
  font-size: 28px;
  font-weight: 700;
  color: white;
`;

const HeroContainer = styled("div")`
  overflow: hidden;
  position: relative;
  z-index: 1;
  height: 181px;
  background-image: url('https://firebasestorage.googleapis.com/v0/b/car-assist-278209.appspot.com/o/hero.jpeg?alt=media&token=663a0f97-e897-4d65-b13a-fb310e40798f');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid #f7f7f7;
`;

const ElipsedBorder = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  transform: translate(-8%, 1px);
  z-index: 2;
  height: 100%;
  width: 120%;
  background-size: contain;
  background-image: url("data:image/svg+xml,${svgString}");
  background-repeat: no-repeat;
  background-position: bottom;
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
      <ElipsedBorder />
    </HeroContainer>
  );
};

export default Hero;
