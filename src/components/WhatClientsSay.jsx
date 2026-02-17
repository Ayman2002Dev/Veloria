import {
  Avatar,
  Box,
  IconButton,
  Paper,
  Rating,
  Typography,
} from "@mui/material";
import { A11y, Autoplay, Pagination, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import ArrowBackIosNewOutlinedIcon from "@mui/icons-material/ArrowBackIosNewOutlined";
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";
import "swiper/css/a11y";

const reviews = [
  {
    client: { name: "John Doe", jobTitle: "Marketing Specialist" },
    review: {
      rating: 5,
      title: "Unbeatable Quality and Service",
      content:
        "I bought headphones from Woodstock electronics and was thoroughly impressed. The sound is top-notch and their customer service is exceptional. Highly recommended for tech enthusiasts",
    },
  },
  {
    client: { name: "Sarah Lee", jobTitle: "Software Engineer" },
    review: {
      rating: 4,
      title: "Great Product, Fast Delivery",
      content:
        "The laptop I purchased arrived earlier than expected and works flawlessly. The build quality is solid and performance is smooth. Very satisfied with the purchase!",
    },
  },
  {
    client: { name: "Michael Brown", jobTitle: "Graphic Designer" },
    review: {
      rating: 5,
      title: "Exceptional Customer Support",
      content:
        "I had a few questions about the tablet and the support team answered promptly and clearly. The product itself is amazing and makes my work much easier.",
    },
  },
  {
    client: { name: "Emily Davis", jobTitle: "Content Writer" },
    review: {
      rating: 4,
      title: "Stylish and Reliable",
      content:
        "The smartwatch I bought looks sleek and functions perfectly. Battery life is impressive and the interface is user-friendly. Definitely worth the price.",
    },
  },
  {
    client: { name: "David Wilson", jobTitle: "Entrepreneur" },
    review: {
      rating: 5,
      title: "High Quality and Value",
      content:
        "Woodstock electronics never disappoints! The speaker system I purchased delivers crystal-clear sound and strong bass. Excellent value for money.",
    },
  },
];

function WhatClientsSay() {
  return (
    <Paper
      elevation={0}
      component="section"
      sx={{
        mt: 9,
      }}
    >
      <Box
        className="section-header"
        sx={{
          mb: 3,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography
          variant="h4"
          sx={{
            fontWeight: "bold",
            color: "mainText.main",
            fontSize: { xs: "1.5rem", sm: "2rem" },
          }}
        >
          What Clients Say
        </Typography>
        <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
          <IconButton className="custom-prev">
            <ArrowBackIosNewOutlinedIcon sx={{ color: "mainText.main" }} />
          </IconButton>

          <IconButton className="custom-next">
            <ArrowForwardIosOutlinedIcon sx={{ color: "mainText.main" }} />
          </IconButton>
        </Box>
      </Box>
      <Swiper
        modules={[A11y, Autoplay, Pagination, Navigation]}
        slidesPerView={1}
        centeredSlides={false}
        spaceBetween={10}
        speed={1000}
        navigation={{
          nextEl: ".custom-next",
          prevEl: ".custom-prev",
        }}
      >
        {reviews.map((review, index) => (
          <SwiperSlide key={index}>
            <Box
              className="reviews-container"
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: { xs: "column", md: "row" },
              }}
            >
              <Box
                className="client-info"
                sx={{
                  display: "flex",
                  justifyContent: "flex-start",
                  alignItems: "center",
                  flexDirection: "column",
                  minWidth: "220px",
                  backgroundColor: "#fff",
                  transform: { xs: "translateY(40px)", md: "translateX(40px)" },
                  py: 4,
                  borderRadius: "20px",
                }}
              >
                <Avatar sx={{ width: "80px", height: "80px", mb: 2 }} />
                <Box textAlign="center">
                  <Typography
                    variant="body1"
                    fontWeight="bold"
                    sx={{ color: "#1f2937" }}
                  >
                    {review.client.name}
                  </Typography>
                  <Typography
                    variant="subtitle2"
                    fontWeight="bold"
                    sx={{ color: "#4b5563" }}
                  >
                    {review.client.jobTitle}
                  </Typography>
                </Box>
              </Box>
              <Box
                className="review-content"
                sx={{
                  bgcolor: "secondary.main",
                  py: { xs: 3, md: 10 },
                  pl: { xs: 3, md: 10 },
                  pr: { xs: 2, md: 3 },
                  borderRadius: "20px",
                }}
              >
                <Rating value={review.review.rating} size="medium" readOnly />
                <Typography
                  variant="h6"
                  fontWeight="bold"
                  sx={{ my: 1, color: "mainText.main" }}
                >
                  {review.review.title}
                </Typography>
                <Typography variant="subtitle1" color="mainText.main">
                  {review.review.content}
                </Typography>
              </Box>
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>
    </Paper>
  );
}

export default WhatClientsSay;
