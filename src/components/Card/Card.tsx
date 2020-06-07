import React from "react";
import Slider from "../Slider/Slider";
import { Card, StyledRoot, StyledTitle } from "baseui/card";
import { styled } from "baseui";

interface Props {
  images?: object[];
  title?: string;
  description?: string;
}

const StyledCard = styled(Card, ({ $theme }) => ({
  maxWidth: '312px',
  width: '312px',
  height: "100%"
}));

const MuiCard = ({ images, title }: Props) => {
  return (
    <Card
      overrides={{
        Root: {
          style: {
            width: "312px",
            height: "100%",
          },
        },
        Contents: {
          style: {
            margin: 0,
            border: "2px solid",
          },
        },
        Body: {
          style: {
            border: "2px solid red",
          },
        },
        Title: {
          style: {
            border: "2px solid red",
          },
        },
      }}
    >
      <Slider>
        {images?.map((image: any) => {
          const { src, alt } = image;

          return <img key={alt} src={src} alt={alt} />;
        })}
      </Slider>
      <StyledTitle>{title}</StyledTitle>
    </Card>
  );
};

export default MuiCard;
