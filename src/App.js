import React, { Fragment, useEffect, useState } from "react";
import Header from "./components/UI/Header";
import Products from "./components/Product/Products";
import axios from "axios";
import Spinner from "./components/UI/Spinner";
import Filter from "./components/Product/Filter";
import Footer from "./components/UI/Footer";
import classes from "./App.module.css";

function App() {
  const [productList, setProductList] = useState([]);
  const [showProducts, setShowProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [ascending, setAcending] = useState(false);
  const [descending, setDescending] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        setIsLoading(true);
        const response = await axios.get("http://localhost:8000/products");
        setIsLoading(false);
        setProductList(response.data);
        setShowProducts(response.data);
      } catch (err) {
        setIsLoading(false);
        alert(err);
      }
    })();
  }, []);

  const searchProductHandler = async (query) => {
    setAcending(false);
    setDescending(false);
    let queryString = query.trim().toLowerCase();
    let queryStrings = [];

    if (queryString.length === 0) {
      setShowProducts(productList);
      return;
    } else {
      queryStrings = queryString.split(" ");
    }

    let prodList = [];
    prodList = productList.filter((product) => {
      let results = [];
      for (const string of queryStrings) {
        results.push(product.name.toLowerCase().includes(string));
      }
      return results.every((result) => result === true);
    });
    let prodList2 = [];

    prodList2 = productList.filter((product) => {
      let result = false;
      for (const string of queryStrings) {
        if (product.name.toLowerCase().includes(string)) {
          result = true;
          break;
        }
      }
      return result;
    });

    for (const product of prodList2) {
      let isFound = prodList.find((prod) => prod.id === product.id);
      if (!isFound) {
        prodList.push(product);
      }
    }
    setShowProducts(prodList);
  };

  const sortProductHandler = (ascending) => {
    setAcending(false);
    setDescending(false);
    const prodList = [...showProducts];

    prodList.sort((a, b) => a.price - b.price);
    if (ascending) {
      setAcending(true);
    } else {
      prodList.reverse();
      setDescending(true);
    }
    setShowProducts(prodList);
  };

  return (
    <Fragment>
      <Header
        title="Products List Page"
        searchFunction={searchProductHandler}
      />
      <div className={classes.Wrapper}>
        <Filter
          ascending={ascending}
          descending={descending}
          sortClicked={sortProductHandler}
        />
        {!isLoading ? <Products list={showProducts} /> : <Spinner />}
      </div>
      <Footer />
    </Fragment>
  );
}

export default App;
