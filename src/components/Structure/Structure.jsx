import React from "react";
import classes from "./Structure.module.css";

const Structure = (props) => {
  return (
    <div className={classes.structure}>
      <div className={classes.title}>
        <h1>{props.titleText}</h1>
      </div>
      {props.children}
    </div>
  );
};

export default Structure;
