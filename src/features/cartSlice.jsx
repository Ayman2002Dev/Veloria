import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: JSON.parse(localStorage.getItem("cartItems")) || [],
    totalPrice: localStorage.getItem("cartItems")
      ? JSON.parse(localStorage.getItem("cartItems")).reduce(
          (acc, item) => acc + item.totalPrice,
          0,
        )
      : 0,
    couponCode: null,
    discount: 0,
  },
  reducers: {
    addToCart: (state, action) => {
      const product = action.payload;
      const existingItem = state.items.find((item) => item?.id === product.id);
      if (existingItem) {
        return state;
      } else {
        const itemToAdd = {
          ...product,
          quantity: 1,
          totalPrice: product.price,
        };
        state.items.push(itemToAdd);
        localStorage.setItem("cartItems", JSON.stringify(state.items));
        state.totalPrice = state.items.reduce(
          (total, item) => total + item.price,
          0,
        );
      }
    },
    updateTotalPrice: (state, action) => {
      state.totalPrice = action.payload;
    },
    increaseQuantity: (state, action) => {
      const item = action.payload;
      const existingItem = state.items.find((i) => i.id === item.id);
      if (existingItem) {
        existingItem.quantity += 1;
        existingItem.totalPrice = existingItem.quantity * existingItem.price;
        state.totalPrice = state.items.reduce(
          (acc, item) => acc + item.totalPrice,
          0,
        );
        localStorage.setItem("cartItems", JSON.stringify(state.items));
      } else {
        state.items.push({ ...item, quantity: 1 });
      }
    },
    decreaseQuantity: (state, action) => {
      const item = action.payload;
      const existingItem = state.items.find((i) => i.id === item.id);
      if (existingItem) {
        existingItem.quantity -= 1;
        existingItem.totalPrice = existingItem.quantity * existingItem.price;
        state.totalPrice = state.items.reduce(
          (acc, item) => acc + item.totalPrice,
          0,
        );
        localStorage.setItem("cartItems", JSON.stringify(state.items));
      } else {
        state.items.push({ ...item, quantity: 1 });
      }
    },
    removeFromCart: (state, action) => {
      const item = action.payload;
      state.items = state.items.filter((i) => i.id !== item.id);
      state.totalPrice = state.items.reduce(
        (acc, item) => acc + item.totalPrice,
        0,
      );
      localStorage.setItem("cartItems", JSON.stringify(state.items));
    },

    addCoupon: (state, action) => {
      state.couponCode = action.payload.code;
      state.discount = action.payload.discount;
    },
  },
});

export const {
  addToCart,
  updateTotalPrice,
  increaseQuantity,
  decreaseQuantity,
  removeFromCart,
  addCoupon,
} = cartSlice.actions;
export default cartSlice.reducer;
