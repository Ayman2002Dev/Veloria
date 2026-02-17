import { Box, Container, Grid, Pagination, Paper } from "@mui/material";
import ProductCard from "../components/ProductCard";
import {
  Outlet,
  useLoaderData,
  useLocation,
  useMatch,
  useNavigation,
  useSearchParams,
} from "react-router";
import { useEffect, useState } from "react";
import ProductSkeleton from "../components/ProductSkeleton";
import { useDispatch } from "react-redux";
import { setCurrentPage } from "../features/paginationSlice";

function Products() {
  const products = useLoaderData();
  const [searchParams, setSearchParams] = useSearchParams();
  const initialPage = Number(searchParams.get("page") || 1);
  const [page, setPage] = useState(initialPage);

  const productsMatch = useMatch("/products");
  const navigation = useNavigation();
  const productsLoading =
    navigation.state === "loading" && productsMatch ? true : false;
  console.log(productsLoading);

  const handlePage = (event, value) => {
    setPage(value);
  };

  const dispatch = useDispatch();

  useEffect(() => {
    const urlPage = Number(searchParams.get("page")) || 1;
    if (urlPage !== page) {
      setSearchParams({ page });
      dispatch(setCurrentPage(page));
    }
  }, [page, searchParams, setSearchParams]);

  useEffect(() => {
    document.title = `Veloria | Products`;
  }, []);

  return (
    <Container maxWidth="xl" sx={{ mt: 5 }} component="section">
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
          gap: 3,
        }}
      >
        {productsLoading ? (
          <ProductSkeleton boxesLength={20} /> // 20 is limit of products display
        ) : (
          products.products.map((product) => (
            <ProductCard
              key={product.id}
              id={product.id}
              title={product.title}
              description={product.description}
              category={product.category}
              price={product.price}
              discountPercentage={product.discountPercentage}
              rating={product.rating}
              stock={product.stock}
              createdAt={product.meta.createdAt}
              images={product.images}
              thumbnail={product.thumbnail}
            />
          ))
        )}
      </Box>
      <Box
        sx={{
          my: 7,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Pagination
          count={Math.ceil(194 / 20)}
          page={page}
          variant="outlined"
          onChange={handlePage}
        />
      </Box>
    </Container>
  );
}

export default Products;
