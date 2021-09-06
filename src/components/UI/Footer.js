import React from "react";
import classes from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={classes.Container}>
      <div className={classes.Content}>
        <p>Terms & Conditions | Privacy Policy</p>
      </div>
    </footer>
  );
};

export default Footer;
