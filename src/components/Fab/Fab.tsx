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

  return (
    <div className={classes.join(" ")}>
      <Button
        as="a"
        href="tel:+33766485866"
        className="ml-md-4 mb-md-4 ml-3 mb-3 d-flex justify-content-center align-items-center"
        style={{ height: "50px", width: "50px", borderRadius: "50%" }}
      >
        <CallIcon />
      </Button>
    </div>
  );
}

export default Fab;
