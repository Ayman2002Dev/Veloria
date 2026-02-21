import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "../features/theme/themeSlice";
import paginationReducer from "../features/paginationSlice";
import cartSlice from "../features/cartSlice";

const store = configureStore({
  reducer: {
    theme: themeReducer,
    pagination: paginationReducer,
    cart: cartSlice,
  },
});

export default store;
