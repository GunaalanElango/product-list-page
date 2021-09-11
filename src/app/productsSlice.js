import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const productsSlice = createSlice({
  name: "products",
  initialState: {
    products: [],
    showProducts: [],
  },
  reducers: {
    setProductsData(state, action) {
      state.products = action.payload;
    },
    setShowProductsData(state, action) {
      state.showProducts = action.payload;
    },
  },
});

export const fetchProductsData = () => {
  return async (dispatch) => {
    const response = await axios.get("http://localhost:8000/products");

    const products = response.data.map((product) => {
      return {
        id: product.productId,
        name: product.productName,
        description: product.productDesc,
        imageUrl: product.imageUrl,
        price: product.productPrice,
        currencyType: product.priceCurrency,
        brand: product.brand,
      };
    });

    dispatch(productsActions.setProductsData(products));
    dispatch(productsActions.setShowProductsData(products));
  };
};

export const productsActions = productsSlice.actions;

export default productsSlice;
