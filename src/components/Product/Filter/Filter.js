import React, { useState } from "react";
import classes from "./Filter.module.css";
import PriceFilter from "./PriceFilter";
import { useSelector, useDispatch } from "react-redux";
import { productsActions } from "../../../app/productsSlice";

const Filter = () => {
  const showProducts = useSelector((state) => state.showProducts);
  const dispatch = useDispatch();

  const [isAscending, setIsAscending] = useState(false);
  const [isDescending, setIsDescending] = useState(false);

  const sortClickHandler = (e) => {
    let products = [...showProducts];
    products.sort((a, b) => a.price - b.price);

    if (e.target.id === "ascending") {
      dispatch(productsActions.setShowProductsData(products));

      setIsDescending(false);
      setIsAscending(true);
    } else if (e.target.id === "descending") {
      products.reverse();
      dispatch(productsActions.setShowProductsData(products));

      setIsAscending(false);
      setIsDescending(true);
    }
  };

  let activeClassName = classes.SortOpt + " " + classes.Active;

  return (
    <div className={classes.Filter}>
      <h4>Filter</h4>
      <section className={classes.FilterSection}>
        <p>By Price</p>
        <PriceFilter />
      </section>
      <h4>Sort</h4>
      <div className={classes.SortOptContainer}>
        <p
          id="ascending"
          onClick={sortClickHandler}
          className={isAscending ? activeClassName : classes.SortOpt}
        >
          Price - low to high
        </p>
        <p
          id="descending"
          onClick={sortClickHandler}
          className={isDescending ? activeClassName : classes.SortOpt}
        >
          Price - high to low
        </p>
      </div>
    </div>
  );
};

export default Filter;
