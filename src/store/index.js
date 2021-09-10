import { createSlice, configureStore } from "@reduxjs/toolkit";

const productsSlice = createSlice({
  name: "products",
  initialState: { products: [] },
  reducers: {
    setProductsData(state, action) {
      state.products = action.payload;
    },
  },
});

const store = configureStore({
  reducer: productsSlice.reducer,
});

export const productsActions = productsSlice.actions;

export default store;
