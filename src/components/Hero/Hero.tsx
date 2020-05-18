import React, { useEffect, useState } from 'react';
import { Container, Image } from 'react-bootstrap';
import styled from 'styled-components';
import { toJson } from 'unsplash-js';
import { unsplash } from '../../api/unsplash';

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
        <TitleContainer>{pageTitle}</TitleContainer>
      </HeroContainer>
    );
};

export default Hero;
