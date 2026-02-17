import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "../features/theme/themeSlice";
import paginationReducer from "../features/paginationSlice";

const store = configureStore({
  reducer: {
    theme: themeReducer,
    pagination: paginationReducer,
  },
});

export default store;
