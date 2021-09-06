import React from "react";
import classes from "./Header.module.css";
import Search from "../Product/Search";

const Header = ({ title, searchFunction }) => {
  return (
    <header className={classes.Header}>
      <h1>{title}</h1>
      <Search searchFunction={searchFunction} />
    </header>
  );
};

export default Header;
