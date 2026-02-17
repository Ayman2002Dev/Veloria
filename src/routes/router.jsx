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

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayouts />,
    children: [
      { element: <Home />, index: true, loader: homeLoader },
      {
        path: "/products",
        element: <ProductsLayout />,
        children: [
          { index: true, element: <Products />, loader: productsLoader },
          {
            path: ":productId",
            element: <ProductDetails />,
            loader: productDetailsLoader,
          },
          {
            path: "categories/:category",
            element: <Category />,
            loader: categoryLoader,
          },
        ],
      },
    ],
  },
]);

export default router;
