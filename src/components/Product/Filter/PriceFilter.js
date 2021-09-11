import React, { useState } from "react";
import classes from "./PriceFilter.module.css";
import { useSelector, useDispatch } from "react-redux";
import { productsActions } from "../../../app/productsSlice";

const PriceFilter = () => {
  const [min, setMin] = useState(100);
  const [max, setMax] = useState(1000);

  const products = useSelector((state) => state.products);
  const dispatch = useDispatch();

  const rangeChangeHandler = (e) => {
    let { name, value } = e.target;
    if (name === "min") setMin(value);
    else if (name === "max") setMax(value);
  };

  const submitHandler = () => {
    let filteredProd = products.filter(
      (prod) => prod.price >= min && prod.price <= max
    );

    dispatch(productsActions.setShowProductsData(filteredProd));
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
      <button disabled={min > max ? true : false} onClick={submitHandler}>
        Go
      </button>
    </div>
  );
};

export default PriceFilter;
