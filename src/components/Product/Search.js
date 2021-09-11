import React, { useState } from "react";
import classes from "./Search.module.css";
import { useSelector, useDispatch } from "react-redux";
import { productsActions } from "../../app/productsSlice";

const Search = () => {
  const products = useSelector((state) => state.products);
  const dispatch = useDispatch();

  const [searchValue, setSearchValue] = useState("");

  const searchValueChangeHandler = (e) => {
    setSearchValue(e.target.value);
  };

  const enterKeySubmitHandler = (e) => {
    e.preventDefault();
    if (e.key === "Enter") {
      searchProductHandler(searchValue);
    } else {
      return;
    }
  };

  const clickSubmitHandler = () => {
    searchProductHandler(searchValue);
  };

  const searchProductHandler = async (query) => {
    let queryString = query.trim().toLowerCase();
    let queryStrings = [];

    if (queryString.length === 0) {
      dispatch(productsActions.setShowProductsData(products));
      return;
    } else {
      queryStrings = queryString.split(" ");
    }

    let prodList = [];
    prodList = products.filter((product) => {
      let results = [];
      for (const string of queryStrings) {
        results.push(product.name.toLowerCase().includes(string));
      }
      return results.every((result) => result === true);
    });

    let prodList2 = [];
    prodList2 = products.filter((product) => {
      let results = [];
      for (const string of queryStrings) {
        results.push(product.name.toLowerCase().includes(string));
      }
      return results.includes(true);
    });

    for (const product of prodList2) {
      let isFound = prodList.find((prod) => prod.id === product.id);
      if (!isFound) {
        prodList.push(product);
      }
    }

    dispatch(productsActions.setShowProductsData(prodList));
  };

  return (
    <div className={classes.Search}>
      <input
        placeholder="Search for products"
        className={classes.Input}
        type="text"
        value={searchValue}
        onChange={searchValueChangeHandler}
        onKeyUp={enterKeySubmitHandler}
      />
      <button className={classes.Button} onClick={clickSubmitHandler}>
        <svg
          id="search-icon"
          className="search-icon"
          viewBox="0 0 24 24"
          fill="#137450"
        >
          <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
          <path d="M0 0h24v24H0z" fill="none" />
        </svg>
      </button>
    </div>
  );
};

export default Search;
