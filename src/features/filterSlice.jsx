import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const api = import.meta.env.VITE_API_PRODUCTS;
export const getProducts = createAsyncThunk(
  "filter/getProducts",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(api, {
        params: { limit: 10 },
      });

      const { products } = response.data;

      return { products };
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  },
);

const filterSlice = createSlice({
  name: "filter",
  initialState: {
    products: [],
    loading: false,
    error: null,
  },
  reducers: {},

  extraReducers: (builder) => {
    builder.addCase(getProducts.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(getProducts.fulfilled, (state, action) => {
      state.products = action.payload;
      state.loading = false;
    });
    builder.addCase(getProducts.rejected, (state, action) => {
      state.products = [];
      state.loading = false;
      state.error = action.payload;
    });
  },
});

export default filterSlice.reducer;
