import React, { useState } from "react";
import classes from "./PriceFilter.module.css";

const PriceFilter = ({ priceFilter }) => {
  const [min, setMin] = useState(300);
  const [max, setMax] = useState(1000);

  const rangeChangeHandler = (event) => {
    let { name, value } = event.target;
    if (name === "min") setMin(value);
    else if (name === "max") setMax(value);
  };

  const submitHandler = () => {
    if (min > max) {
      priceFilter(300, 1000);
      setMin(300);
      setMax(1000);
      return;
    }
    priceFilter(min, max);
  };

  return (
    <div className={classes.Wrapper}>
      <input
        type="number"
        value={min}
        name="min"
        onChange={rangeChangeHandler}
      />
      <input
        type="number"
        value={max}
        name="max"
        onChange={rangeChangeHandler}
      />
      <button onClick={submitHandler}>Go</button>
    </div>
  );
};

export default PriceFilter;
