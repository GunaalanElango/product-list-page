import React, { Fragment, useEffect, useState } from "react";
import Header from "./components/UI/Header";
import Products from "./components/Product/Products";
import axios from "axios";
import Spinner from "./components/UI/Spinner";
import Filter from "./components/Product/Filter/Filter";
import Footer from "./components/UI/Footer";
import classes from "./App.module.css";

function App() {
  const [productList, setProductList] = useState([]);
  const [showProducts, setShowProducts] = useState([]);
  // const [brands, setBrands] = useState([]);
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

  // const brandFilterHandler = useCallback(
  //   (brands) => {
  //     if (brands.length === 0) {
  //       if (ascending) {
  //         productList.sort((a, b) => a.price - b.price);
  //       } else if (descending) {
  //         productList.sort((a, b) => a.price - b.price);
  //         productList.reverse();
  //       }
  //       setShowProducts(productList);
  //       return;
  //     }
  //     let filteredProd = [];
  //     for (const brand of brands) {
  //       let result = [];
  //       result = productList.filter((prod) => prod.brand === brand);
  //       filteredProd = [...filteredProd, ...result];
  //     }

  //     if (ascending) {
  //       filteredProd.sort((a, b) => a.price - b.price);
  //     } else if (descending) {
  //       filteredProd.sort((a, b) => a.price - b.price);
  //       filteredProd.reverse();
  //     }
  //     setShowProducts(filteredProd);
  //   },
  //   [productList, ascending, descending]
  // );

  const priceFilterHandler = (min, max) => {
    let filteredProd = productList.filter(
      (prod) => prod.productPrice >= min && prod.productPrice <= max
    );

    if (ascending) {
      filteredProd.sort((a, b) => a.productPrice - b.productPrice);
    } else if (descending) {
      filteredProd.sort((a, b) => a.productPrice - b.productPrice);
      filteredProd.reverse();
    }
    setShowProducts(filteredProd);
  };

  const searchProductHandler = async (query) => {
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
        results.push(product.productName.toLowerCase().includes(string));
      }
      return results.every((result) => result === true);
    });
    let prodList2 = [];

    prodList2 = productList.filter((product) => {
      let result = false;
      for (const string of queryStrings) {
        if (product.productName.toLowerCase().includes(string)) {
          result = true;
          break;
        }
      }
      return result;
    });

    for (const product of prodList2) {
      let isFound = prodList.find(
        (prod) => prod.productId === product.productId
      );
      if (!isFound) {
        prodList.push(product);
      }
    }

    if (ascending) {
      prodList.sort((a, b) => a.productPrice - b.productPrice);
    } else {
      prodList.sort((a, b) => a.productPrice - b.productPrice);
      prodList.reverse();
    }
    setShowProducts(prodList);
  };

  const sortProductHandler = (ascending) => {
    setAcending(false);
    setDescending(false);
    const prodList = [...showProducts];

    prodList.sort((a, b) => a.productPrice - b.productPrice);
    if (ascending) {
      setAcending(true);
    } else {
      prodList.reverse();
      setDescending(true);
    }
    setShowProducts(prodList);
  };

  // useEffect(() => {
  //   let brandList = [];
  //   for (const prod of productList) {
  //     if (!brandList.includes(prod.brand)) {
  //       brandList.push(prod.brand);
  //     }
  //   }
  //   setBrands(brandList);
  // }, [productList]);

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
          // brands={brands}
          // brandFilter={brandFilterHandler}
          priceFilter={priceFilterHandler}
        />
        {!isLoading ? <Products list={showProducts} /> : <Spinner />}
      </div>
      <Footer />
    </Fragment>
  );
}

export default App;
