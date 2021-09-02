import React from "react";
import classes from "./Products.module.css";
import Product from "./Product";

const Products = ({ list }) => {
  let products = list.map((product) => (
    <Product
      key={product.id}
      name={product.name}
      price={product.price}
      imageURL={product.imageURL}
    />
  ));
  return <div className={classes.ProductList}>{products}</div>;
};

export default Products;
