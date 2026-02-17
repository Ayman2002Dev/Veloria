import { A11y, Autoplay } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Paper, Box, Typography, Tooltip } from "@mui/material";
import AddToCartButton from "./AddToCartButton";
import { Link } from "react-router";

function SwiperSection({ products, header }) {
  return (
    <Paper elevation={0} component="section" sx={{ mt: 9 }}>
      <Typography
        variant="h4"
        sx={{
          mb: 3,
          fontWeight: "bold",
          color: "mainText.main",
          fontSize: { xs: "1.5rem", sm: "2rem" },
        }}
      >
        {header}
      </Typography>
      <Swiper
        modules={[A11y, Autoplay]}
        spaceBetween={20}
        slidesPerView={3}
        loop
        speed={800}
        centeredSlides={false}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          0: { slidesPerView: 1 },
          600: { slidesPerView: 2 },
          900: { slidesPerView: 3 },
          1200: { slidesPerView: 4 },
        }}
      >
        {products.map((product) => (
          <SwiperSlide key={product.id}>
            <Box
              position="relative"
              sx={{
                height: "100%",
                borderRadius: 3,
                bgcolor: "secondary.main",
                fontSize: 22,
                fontWeight: "bold",
                overflow: "hidden",
                cursor: "pointer",
              }}
            >
              <Box
                className="parent"
                position="relative"
                height="100%"
                sx={{
                  bgcolor: "secondary.main",
                }}
              >
                <Typography
                  sx={{
                    position: "absolute",
                    top: "10px",
                    left: "10px",
                    bgcolor: "secondary.main",
                    fontSize: "12px",
                    p: "3px 5px",
                    borderRadius: "3px",
                    zIndex: 90,
                  }}
                >
                  {product.discountPercentage}% off
                </Typography>
                <AddToCartButton />
                <Box
                  component="img"
                  src={product.images[0]}
                  alt={product.title}
                  sx={{
                    width: "100%",
                    height: "100%",
                    bgcolor: "#fafafa",
                    overflow: "hidden",
                  }}
                />
              </Box>
              <Tooltip title={product.title}>
                <Box
                  textAlign="center"
                  sx={{
                    bgcolor: "secondary.main",
                    px: "16px",
                    py: "24px",
                  }}
                >
                  <Typography
                    variant="caption"
                    sx={{
                      color: "#9ca3af",
                      textTransform: "uppercase",
                      mb: "6px",
                    }}
                  >
                    {product.category}
                  </Typography>
                  <Typography
                    component={Link}
                    to={`/products/${product.id}`}
                    className="title"
                    variant="subtitle1"
                    color="mainText.main"
                    sx={{
                      whiteSpace: "nowrap",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      transitionDuration: "0.3s",
                      display: "block",
                      textDecoration: "none",
                      mb: "8px",
                      "&:hover": {
                        textDecoration: "underline",
                        textUnderlineOffset: "2px",
                      },
                    }}
                  >
                    {product.title}
                  </Typography>
                  <Box
                    className="price-container"
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      gap: "20px",
                    }}
                  >
                    <Typography variant="subtitle1">
                      ${product.price}
                    </Typography>
                    <Typography
                      variant="subtitle2"
                      component="del"
                      color="#9ca3af"
                    >
                      $
                      {(
                        product.price -
                        (product.price * product.discountPercentage) / 100
                      ).toFixed(2)}
                    </Typography>
                  </Box>
                </Box>
              </Tooltip>
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>
    </Paper>
  );
}

export default SwiperSection;
