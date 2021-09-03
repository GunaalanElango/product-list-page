import React from "react";
import classes from "./Product.module.css";

const Product = ({ name, price, imageURL }) => {
  return (
    <div className={classes.Product}>
      <div className={classes.ImageContainer}>
        <img alt="Product" src={imageURL} />
      </div>
      <h2>{name}</h2>
      <h4>&#8377; {price}</h4>
    </div>
  );
};

export default Product;
