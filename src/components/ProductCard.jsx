import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Tooltip,
  Typography,
  useTheme,
} from "@mui/material";
import React from "react";
import { Link } from "react-router";
import AddToCartButton from "./AddToCartButton";

function ProductCard({ product }) {
  const theme = useTheme();
  return (
    <Card sx={{ height: "100%", display: "flex", flexDirection: "column" }}>
      <Box position="relative" className="parent">
        <Typography
          sx={{
            position: "absolute",
            top: "10px",
            left: "10px",
            backgroundColor: (theme) =>
              theme.palette.mode === "light" ? "#fff" : "primary.main",
            fontSize: "12px",
            p: "3px 5px",
            borderRadius: "3px",
            zIndex: 90,
          }}
        >
          {product?.discountPercentage}% off
        </Typography>
        <CardActionArea component={Link} to={`/products/${product?.id}`}>
          <CardMedia
            component="img"
            image={product?.images?.[0]}
            alt={product?.title}
            sx={{
              height: 300,
              objectFit: "contain",
              backgroundColor: "#fafafa",
            }}
          />
        </CardActionArea>
        <AddToCartButton product={product} />
      </Box>

      <CardContent sx={{ flexGrow: 1 }}>
        <Tooltip title={product?.title}>
          <Typography variant="h6" sx={{ fontSize: "18px" }}>
            {product?.title}
          </Typography>
        </Tooltip>

        <Typography
          variant="body2"
          color="text.secondary"
          sx={{ mb: 1, color: (theme) => theme.palette.mainText }}
        >
          {product?.description}
        </Typography>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            mt: "5px",
          }}
        >
          <Typography
            variant="h6"
            color="primary"
            sx={{
              mr: "30px",
              fontSize: "16px",
              color: "mainText.main",
            }}
          >
            {product?.price}
          </Typography>

          <Typography
            variant="h6"
            color="primary"
            component="del"
            sx={{ fontSize: "14px", color: "#aaacb1" }}
          >
            $
            {product?.price &&
              (
                product.price -
                (product.price * product.discountPercentage) / 100
              ).toFixed(2)}
          </Typography>
        </Box>
        <Typography variant="body2">Category: {product.category}</Typography>
        <Typography variant="body2" color="mainText.main" sx={{ mt: "5px" }}>
          Available: {product.stock}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default React.memo(ProductCard);
