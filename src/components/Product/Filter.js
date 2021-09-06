import React from "react";
import classes from "./Filter.module.css";

const Filter = ({ ascending, descending, sortClicked }) => {
  return (
    <div className={classes.Filter}>
      <h4>Sort by</h4>
      <div className={classes.FilterOptContainer}>
        <p
          onClick={() => sortClicked(true)}
          className={
            ascending
              ? classes.FilterOpt + " " + classes.Active
              : classes.FilterOpt
          }
        >
          Price - low to high
        </p>
        <p
          onClick={() => sortClicked(false)}
          className={
            descending
              ? classes.FilterOpt + " " + classes.Active
              : classes.FilterOpt
          }
        >
          Price - high to low
        </p>
      </div>
    </div>
  );
};

export default Filter;
