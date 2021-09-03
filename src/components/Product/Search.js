import React, { useState } from "react";
import classes from "./Search.module.css";

const Search = ({ length, searchFunction }) => {
  const [searchValue, setSearchValue] = useState("");

  const searchValueChangeHandler = (event) => {
    setSearchValue(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    searchFunction(searchValue);
  };

  return (
    <div className={classes.Search}>
      <form className={classes.Form} onSubmit={submitHandler}>
        <input
          type="text"
          value={searchValue}
          onChange={searchValueChangeHandler}
        />
        <button type="submit">Search</button>
      </form>
      <h2>
        <span>"{length}"</span>Results
      </h2>
    </div>
  );
};

export default Search;
