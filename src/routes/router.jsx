import MainLayouts from "../layouts/MainLayouts";
import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Products from "../pages/Products";
import productsLoader from "./loader/productsLoader";
import ProductDetails from "../pages/ProductDetails";
import ProductsLayout from "../layouts/ProductsLayout";
import productDetailsLoader from "./loader/productDetailsLoader";
import Category from "../pages/Category";
import categoryLoader from "./loader/categoryLoader";
import homeLoader from "./loader/homeLoader";
import Cart from "../pages/Cart";
import Checkout from "../pages/Checkout";
import CartLayout from "../layouts/CartLayout";
import Payment from "../pages/Payment";
import Filter from "../pages/Filter";
import NotFound from "../pages/NotFound";
import ErrorPage from "../pages/ErrorPage";
import ConfirmOrder from "../pages/ConfirmOrder";
import Orders from "../pages/Orders";
import ViewOrder from "../pages/ViewOrder";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayouts />,
    children: [
      {
        element: <Home />,
        index: true,
        loader: homeLoader,
        errorElement: <ErrorPage />,
      },
      {
        path: "/products",
        element: <ProductsLayout />,
        errorElement: <ErrorPage />,
        children: [
          { index: true, element: <Products />, loader: productsLoader },
          {
            path: ":productId",
            element: <ProductDetails />,
            loader: productDetailsLoader,
            errorElement: <ErrorPage />,
          },
          {
            path: "categories/:category",
            element: <Category />,
            loader: categoryLoader,
            errorElement: <ErrorPage />,
          },
        ],
      },
      {
        path: "/filter",
        element: <Filter />,
        errorElement: <ErrorPage />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/confirm-order",
        element: <ConfirmOrder />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/orders",
        element: <Orders />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/orders/view/:orderId",
        element: <ViewOrder />,
        errorElement: <ErrorPage />,
      },
      {
        element: <CartLayout />,
        children: [
          { path: "/cart", element: <Cart />, errorElement: <ErrorPage /> },
          {
            path: "/checkout",
            element: <Checkout />,
            errorElement: <ErrorPage />,
          },
          {
            path: "/payment",
            element: <Payment />,
            errorElement: <ErrorPage />,
          },
        ],
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
    errorElement: <ErrorPage />,
  },
]);

export default router;
