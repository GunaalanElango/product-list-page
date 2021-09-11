import React, { Fragment, useEffect } from "react";
import Header from "./components/UI/Header";
import Products from "./components/Product/Products";
import Filter from "./components/Product/Filter/Filter";
import Footer from "./components/UI/Footer";
import classes from "./App.module.css";
import { useSelector, useDispatch } from "react-redux";
import { fetchProductsData } from "./app/productsSlice";

function App() {
  const showProducts = useSelector((state) => state.showProducts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProductsData());
  }, [dispatch]);

  return (
    <Fragment>
      <Header title="Products List Page" />
      <div className={classes.Wrapper}>
        <Filter />
        <Products list={showProducts} />
      </div>
      <Footer />
    </Fragment>
  );
}

export default App;
