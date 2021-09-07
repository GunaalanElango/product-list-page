import React from "react";
import classes from "./Product.module.css";

const Product = ({ name, price, imageURL }) => {
  let formattedCurrency = new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
  }).format(price);

  return (
    <div className={classes.Product}>
      <div className={classes.ImageContainer}>
        <img alt="Product" src={imageURL} />
      </div>
      <p className={classes.ProductName}>{name}</p>
      <p className={classes.ProductPrice}>{formattedCurrency}</p>
    </div>
  );
};

export default Product;
