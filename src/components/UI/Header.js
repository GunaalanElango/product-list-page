import React from "react";
import classes from "./Header.module.css";
import Search from "../Product/Search";

const Header = ({ title }) => {
  return (
    <header className={classes.Header}>
      <h1>{title}</h1>
      <Search />
    </header>
  );
};

export default Header;
