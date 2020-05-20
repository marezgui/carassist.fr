import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import {
  Card as MCard,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@material-ui/core";

interface Props {
  src?: string,
  title?: string,
  description?: string
}

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

const Card = ({ src, title, description }: Props) => {
    const classes = useStyles();
    
    return (
      <MCard className={classes.root}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={src}
            title={title}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {title}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {description}
            </Typography>
          </CardContent>
        </CardActionArea>
        {/* <CardActions>
          <Button size="small" color="primary">
            Share
          </Button>
          <Button size="small" color="primary">
            Learn More
          </Button>
        </CardActions> */}
      </MCard>
    );
};

export default Card;
