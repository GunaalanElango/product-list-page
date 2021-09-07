import React, { useState } from "react";
import classes from "./Search.module.css";

const Search = ({ searchFunction }) => {
  const [searchValue, setSearchValue] = useState("");

  const searchValueChangeHandler = (event) => {
    setSearchValue(event.target.value);
  };

  const enterKeySubmitHandler = (event) => {
    event.preventDefault();
    if (event.key === "Enter") {
      searchFunction(searchValue);
      setSearchValue("");
    } else {
      return;
    }
  };

  const clickSubmitHandler = () => {
    searchFunction(searchValue);
    setSearchValue("");
  }

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
        <svg id="search-icon" className="search-icon" viewBox="0 0 24 24" fill="#137450">
          <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
          <path d="M0 0h24v24H0z" fill="none" />
        </svg>
      </button>
    </div>
  );
};

export default Search;
