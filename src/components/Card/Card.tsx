import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@material-ui/core";
import Slider from '../Slider/Slider';

interface Props {
  images?: object[],
  title?: string,
  description?: string
}

const useStyles = makeStyles({
  root: {
    maxWidth: 312,
    width: 312,
    height: '100%',
    borderRadius: 12
  },
  media: {
  },
});

const MuiCard = ({ images, title, description }: Props) => {
    const classes = useStyles();
    
    return (
      <Card className={classes.root}>
        <CardMedia className={classes.media}>
          <Slider>
            {images?.map((image: any) => {
              const { src, alt } = image;

              return <img key={alt} src={src} alt={alt} />;
            })}
          </Slider>
        </CardMedia>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {title}
          </Typography>
          {/* <Typography variant="body1" color="textSecondary" component="p">
              {description}
            </Typography> */}
        </CardContent>
        {/* <CardActions>
          <Button size="small" color="primary">
            Share
          </Button>
          <Button size="small" color="primary">
            Learn More
          </Button>
        </CardActions> */}
      </Card>
    );
};

export default MuiCard;
