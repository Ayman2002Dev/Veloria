import { Box, Container, Pagination } from "@mui/material";
import { useLoaderData, useNavigation, useSearchParams } from "react-router";
import ProductSkeleton from "../components/ProductSkeleton";
import ProductCard from "../components/ProductCard";

function Category() {
  const category = useLoaderData();
  const [searchParams, setSearchParams] = useSearchParams();
  const navigation = useNavigation();
  const loading = navigation.state === "loading";
  const page = Number(searchParams.get("page") || 1);

  const handlePage = (event, value) => {
    if (value === page) return;
    setSearchParams((prev) => {
      const next = new URLSearchParams(prev);
      next.set("page", String(value));
      return next;
    });
  };

  return (
    <Container maxWidth="xl" sx={{ mt: 5 }} component="section">
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
          gap: 3,
        }}
      >
        {loading ? (
          <ProductSkeleton boxesLength={category.total} />
        ) : (
          category.products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        )}
      </Box>
      {category.total > 20 && (
        <Box
          sx={{
            my: 7,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Pagination
            count={Math.ceil(category.total / 20)}
            page={page}
            variant="outlined"
            onChange={handlePage}
          />
        </Box>
      )}
    </Container>
  );
}

export default Category;
