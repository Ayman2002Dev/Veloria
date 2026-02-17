import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Skeleton,
  Tooltip,
  Typography,
  useTheme,
  Button,
} from "@mui/material";
import React from "react";
import { Link } from "react-router";
import AddToCartButton from "./AddToCartButton";

function ProductCard({
  id,
  title,
  description,
  category,
  discountPercentage,
  rating,
  price,
  stock,
  createdAt,
  images,
  thumbnail,
}) {
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
          {discountPercentage}% off
        </Typography>
        <CardActionArea component={Link} to={`/products/${id}`}>
          <CardMedia
            component="img"
            image={images[0]}
            alt={title}
            sx={{
              height: 300,
              objectFit: "contain",
              backgroundColor: "#fafafa",
            }}
          />
        </CardActionArea>
        <AddToCartButton />
      </Box>

      <CardContent sx={{ flexGrow: 1 }}>
        <Tooltip title={title}>
          <Typography variant="h6" sx={{ fontSize: "18px" }}>
            {title}
          </Typography>
        </Tooltip>

        <Typography
          variant="body2"
          color="text.secondary"
          sx={{ mb: 1, color: (theme) => theme.palette.mainText }}
        >
          {description}
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
            {price}
          </Typography>

          <Typography
            variant="h6"
            color="primary"
            component="del"
            sx={{ fontSize: "14px", color: "#aaacb1" }}
          >
            ${price && (price - (price * discountPercentage) / 100).toFixed(2)}
          </Typography>
        </Box>
        <Typography variant="body2">Category: {category}</Typography>
        <Typography variant="body2" color="mainText.main" sx={{ mt: "5px" }}>
          Available: {stock}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default React.memo(ProductCard);
