import { Box, Paper, Typography } from "@mui/material";
import ProductCard from "./ProductCard";
import ProductSkeleton from "./ProductSkeleton";

function DescriptionSection({ product, tenProducts }) {
  return (
    <Paper elevation={0}>
      <Box>
        <Typography
          variant="h5"
          sx={{ fontSize: "20px", fontWeight: 600, mb: 2 }}
        >
          Specefications:
        </Typography>
        <Box sx={{ "& span": { ml: 0.5 } }}>
          <Typography variant="subtitle1" component="p" fontWeight={500}>
            Warranty:
            <Typography component="span">
              {product.warrantyInformation}
            </Typography>
          </Typography>
          <Typography variant="subtitle1" component="p" fontWeight={500}>
            Shipping:
            <Typography component="span">
              {product.shippingInformation}
            </Typography>
          </Typography>
          <Typography variant="subtitle1" component="p" fontWeight={500}>
            Return Policy:
            <Typography component="span">{product.returnPolicy}</Typography>
          </Typography>
          <Typography variant="subtitle1" component="p" fontWeight={500}>
            CreatedAt:
            <Typography component="span">
              {new Date(product.meta.createdAt).toLocaleDateString() +
                " " +
                new Date(product.meta.createdAt).toLocaleTimeString()}
            </Typography>
          </Typography>
          <Typography variant="subtitle1" component="p" fontWeight={500}>
            UpdatedAt:
            <Typography component="span">
              {new Date(product.meta.updatedAt).toLocaleDateString() +
                " " +
                new Date(product.meta.updatedAt).toLocaleTimeString()}
            </Typography>
          </Typography>
          <Typography variant="subtitle1" component="p" fontWeight={500}>
            Status:
            <Typography component="span">
              {product.availabilityStatus}
            </Typography>
          </Typography>
        </Box>
      </Box>
      <Box mt={15}>
        <Typography
          variant="h5"
          sx={{ fontSize: "20px", fontWeight: 600, mb: 2 }}
        >
          Related Products
        </Typography>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
            gap: 3,
          }}
        >
          {tenProducts.products.length > 0 ? (
            tenProducts.products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))
          ) : (
            <ProductSkeleton boxesLength={10} />
          )}
        </Box>
      </Box>
    </Paper>
  );
}

export default DescriptionSection;
