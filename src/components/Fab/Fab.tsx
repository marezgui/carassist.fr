import React from "react";
import { Button } from 'react-bootstrap';
import CallIcon from "@material-ui/icons/Call";

const Fab = () => {
  const classes = [
    "position-fixed",
    "fixed-bottom",
    "d-flex",
    "justify-content-start",
  ];

  const buttonClasses = [
    'ml-md-4', 'mb-md-4', 'ml-3', 'mb-3',
    'd-flex', 'justify-content-center', 'align-items-center', 
    'shadow'
  ];

  return (
    <div className={classes.join(' ')}>
      <Button
        as="a"
        href="tel:+33766485866"
        className={buttonClasses.join(' ')}
        style={{ height: "50px", width: "50px", borderRadius: "50%", backgroundImage: 'linear-gradient(72deg,#0033cc 0%,#005bff 100%)', border: '2px solid white' }}
      >
        <CallIcon />
      </Button>
    </div>
  );
}

export default Fab;
