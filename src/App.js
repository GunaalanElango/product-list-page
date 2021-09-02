import React, { Fragment, useEffect, useState } from "react";
import Header from "./components/UI/Header";
import Products from "./components/Product/Products";
import axios from "axios";
import Spinner from "./components/UI/Spinner";
import Filter from "./components/Product/Filter";
import classes from "./App.module.css";

function App() {
  const [productList, setProductList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [ascending, setAcending] = useState(false);
  const [descending, setDescending] = useState(false);

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

  useEffect(() => {
    (async () => {
      try {
        setIsLoading(true);

        const response = await axios.get("http://localhost:8000/products");
        setIsLoading(false);
        setProductList(response.data);
      } catch (err) {
        setIsLoading(false);
        alert(err);
      }
    })();
  }, []);

  return (
    <Fragment>
      <Header title="Products" />
      <div className={classes.Wrapper}>
        <Filter
          ascending={ascending}
          descending={descending}
          sortClicked={sortProductHandler}
        />
        {!isLoading ? <Products list={productList} /> : <Spinner />}
      </div>
    </Fragment>
  );
}

export default App;
