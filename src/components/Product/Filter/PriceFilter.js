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
    let minimum = min >= 100 && min <= 5000 ? min : 100;
    let maximum = max <= 5000 && max >= 100 ? max : 5000;

    setMax(maximum);
    setMin(minimum);
    priceFilter(minimum, maximum);
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
