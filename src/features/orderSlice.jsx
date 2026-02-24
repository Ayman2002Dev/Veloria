import { createSlice } from "@reduxjs/toolkit";

function generateOrderId() {
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

  function randomSegment(length) {
    const array = new Uint8Array(length);
    crypto.getRandomValues(array);
    return Array.from(array)
      .map((x) => chars[x % chars.length])
      .join("");
  }

  return `ORD-${randomSegment(3)}-${randomSegment(3)}-${randomSegment(3)}`;
}

const orderSlice = createSlice({
  name: "order",
  initialState: {
    orders: JSON.parse(localStorage.getItem("orders")) || [],
  },
  reducers: {
    createOrder: (state, action) => {
      const order = action.payload;

      const orderId = generateOrderId();
      const createdAt = new Date().toISOString();

      const newOrder = { ...order, orderId, createdAt, status: "pending" };

      state.orders.push(newOrder);
      localStorage.setItem("orders", JSON.stringify(state.orders));
    },
    confirmOrder: (state, action) => {
      const orderId = action.payload;

      const existingOrder = state.orders.find(
        (order) => String(order.orderId) === String(orderId),
      );

      if (!existingOrder) {
        return;
      }

      existingOrder.status = "complete";
      localStorage.setItem("orders", JSON.stringify(state.orders));
    },
    deleteOrder: (state, action) => {
      const orderId = action.payload;

      const existingOrder = state.orders.find(
        (order) => String(order.orderId) === String(orderId),
      );

      if (!existingOrder) {
        return;
      }

      state.orders = state.orders.filter((order) => order.orderId !== orderId);
      localStorage.setItem("orders", JSON.stringify(state.orders));
    },
    paymentMethod: (state, action) => {
      const { orderId, method } = action.payload;

      const existingOrder = state.orders.find(
        (order) => String(order.orderId) === String(orderId),
      );

      if (!existingOrder) {
        return;
      }

      existingOrder.paymentMethod = method;
      localStorage.setItem("orders", JSON.stringify(state.orders));
    },
  },
});

export default orderSlice.reducer;
export const { createOrder, confirmOrder, deleteOrder, paymentMethod } =
  orderSlice.actions;
