import React from "react";
import classes from "./Products.module.css";
import Product from "./Product";

const Products = ({ list }) => {
  let products = [];
  if (list.length !== 0) {
    products = list.map((product) => (
      <Product
        key={product.id}
        name={product.name}
        price={product.price}
        imageURL={product.imageURL}
      />
    ));
  } else {
    products = <h1>Sorry, No results found</h1>;
  }

  return (
    <div className={classes.Main}>
      <div className={classes.Breadcrumbs}>
        <p className={classes.BreadcrumbsNav}>Home / Products / Sports</p>
        {list.length !== 0 ? (
          <p className={classes.NoOfProduct}>
            <span data-testid="length">{list.length}</span> Results
          </p>
        ) : null}
      </div>
      <div className={classes.ProductList}>{products}</div>
    </div>
  );
};

export default Products;
