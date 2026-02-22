import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "../features/theme/themeSlice";
import paginationReducer from "../features/paginationSlice";
import cartSlice from "../features/cartSlice";
import filterSlice from "../features/filterSlice";

const store = configureStore({
  reducer: {
    theme: themeReducer,
    pagination: paginationReducer,
    cart: cartSlice,
    filter: filterSlice,
  },
});

export default store;
