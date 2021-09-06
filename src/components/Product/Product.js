import React from "react";
import classes from "./Product.module.css";

const Product = ({ name, price, imageURL }) => {
  return (
    <div className={classes.Product}>
      <div className={classes.ImageContainer}>
        <img alt="Product" src={imageURL} />
      </div>
      <p className={classes.ProductName}>{name}</p>
      <p className={classes.ProductPrice}>&#8377; {price}</p>
    </div>
  );
};

export default Product;
