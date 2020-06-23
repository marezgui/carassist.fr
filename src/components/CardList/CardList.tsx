import React from 'react';
import Card from '../Card/Card';
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

interface Props {
    data?: object[] 
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      marginTop: "24px",
      margin: 'auto',
      marginLeft: '-8px'
    }
  })
);

const isNotEmpty = (data: object[]) => {
    let obj = data[0];
    return Object.keys(obj).length !== 0;
};

const CardList = (props: Props) => {
    const { data } = props;
    const classes = useStyles();

    return (
        <div style={{ overflowX: 'hidden' }}>
          <Grid className={classes.root} container justify="center" spacing={2}>
            {data && isNotEmpty(data) && data?.map((vehicule: any) => {
                const { id, title, description, images } = vehicule;

                return (
                  <Grid key={id} item>
                    <Card 
                      key={id}
                      images={images}
                      title={title}
                      description={description}
                    />
                  </Grid>
                );
            })}
        </Grid>
        </div>
    );
};

export default CardList;
