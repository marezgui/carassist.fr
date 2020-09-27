import React from "react";
import classes from "./TextGarage.module.css";

const textGarage = (props) => {
    return (
        <p className={classes.TextGarage}
            style={{
                "font-weight": props.fontWeight,
                "font-size": props.fontSize
            }}>
                {props.children}
        </p>
    );
};

export default textGarage;
