import React, { Fragment, useEffect, useState } from "react";
import Header from "./components/UI/Header";
import Products from "./components/Product/Products";
import axios from "axios";
import Spinner from "./components/UI/Spinner";
import Filter from "./components/Product/Filter";
import Search from "./components/Product/Search";
import classes from "./App.module.css";

function App() {
  const [productList, setProductList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [ascending, setAcending] = useState(false);
  const [descending, setDescending] = useState(false);

  const fetchProducts = async () => {
    try {
      const response = await axios.get("http://localhost:8000/products");
      return response.data;
    } catch (err) {
      throw err;
    }
  };

  useEffect(() => {
    (async () => {
      try {
        setIsLoading(true);
        const response = await fetchProducts();
        setIsLoading(false);
        setProductList(response);
      } catch (err) {
        setIsLoading(false);
        alert(err);
      }
    })();
  }, []);

  const searchProductHandler = async (query) => {
    try {
      setIsLoading(true);
      const response = await fetchProducts();

      if (query.trim().length === 0) {
        setIsLoading(false);
        setProductList(response);
        return;
      }

      const prodList = response.filter((product) => {
        return product.name.toUpperCase().includes(query.toUpperCase());
      });
      setIsLoading(false);
      setProductList(prodList);
    } catch (error) {
      setIsLoading(false);
      alert(error);
    }
  };

  const sortProductHandler = (ascending) => {
    setIsLoading(true);
    const prodList = [...productList];
    setAcending(false);
    setDescending(false);

    prodList.sort((a, b) => a.price - b.price);
    if (ascending) {
      setAcending(true);
    } else {
      prodList.reverse();
      setDescending(true);
    }
    setIsLoading(false);
    setProductList(prodList);
  };

  return (
    <Fragment>
      <Header title="Products" />
      <div className={classes.Wrapper}>
        <Filter
          ascending={ascending}
          descending={descending}
          sortClicked={sortProductHandler}
        />
        <Search
          length={productList.length}
          searchFunction={searchProductHandler}
        />
        {!isLoading ? <Products list={productList} /> : <Spinner />}
      </div>
    </Fragment>
  );
}

export default App;
