import { Box, Button, Container, Grid, Paper, Typography } from "@mui/material";

import image1 from "../assets/banner-1.webp";
import image2 from "../assets/banner-2.webp";
import image3 from "../assets/banner-3.webp";
import image4 from "../assets/banner-4.webp";
import image5 from "../assets/banner-5.webp";
import image6 from "../assets/banner-6.webp";
import image7 from "../assets/banner-7.webp";
import blog1 from "../assets/blog-1.webp";
import blog2 from "../assets/blog-2.webp";
import SwiperSection from "../components/SwiperSection";
import { useLoaderData } from "react-router";
import WhatClientsSay from "../components/WhatClientsSay";
import ArrowRightAltOutlinedIcon from "@mui/icons-material/ArrowRightAltOutlined";
import { useEffect } from "react";

function Home() {
  const products = useLoaderData();

  const imageData = [
    [
      { src: image4, title: "Earbuds", desc: "Smartwatch Is Good For You" },
      {
        src: image2,
        title: "Headphones",
        desc: "The future seems bright. Headphones for the Future.",
      },
    ],
    [{ src: image6, title: "Smartwatch", desc: "Track your health easily" }],
    [
      { src: image1, title: "Earbuds", desc: "Smartwatch Is Good For You" },
      {
        src: image7,
        title: "Headphones",
        desc: "The future seems bright. Headphones for the Future.",
      },
    ],
  ];

  let posts = [
    {
      id: 1,
      img: blog1,
      publishedAt: "15 December, 2025",
      title: "Amazon to Launch Drone Delivery in Select Cities",
      desc: "Quos voluptate pariatur exercitationem quis laboriosam molestiae. Dolorem nihil dignissimos sed veniam officiis voluptatibus. Similique aliquid sunt quos ratione ab nisi temporibus nulla. Voluptatum totam incidunt iste aut.",
    },
    {
      id: 2,
      img: blog2,
      publishedAt: "1 January, 2026",
      title: "Apple Announces New Subscription Based iPhone Program",
      desc: "Commodi facilis in sit quidem est. Nostrum dolorum explicabo officia eligendi itaque. Ullam ipsa animi adipisci doloribus repudiandae aperiam. Inventore.",
    },
  ];

  useEffect(() => {
    document.title = `Veloria | Home`;
  }, []);

  return (
    <Container maxWidth="xl">
      <Paper
        elevation={0}
        square
        component="section"
        className="banar-wraper"
        sx={{
          mt: 3,
          "& > *": {},
        }}
      >
        <Grid
          container
          spacing={2}
          sx={{
            "& > *": {
              cursor: "pointer",
            },
          }}
        >
          <Grid size={{ xs: 12, md: 6 }}>
            <Box
              position="relative"
              sx={{
                borderRadius: "20px",
                height: "350px",
                width: "100%",
                wordBreak: "break-all",
                overflow: "hidden",
                "&:hover .bannar-img": {
                  transform: "scale(1.5)",
                },
              }}
            >
              <Box
                className="banar-details"
                sx={{
                  position: "absolute",
                  top: "50%",
                  left: "30px",
                  transform: "translateY(-50%)",
                  width: { xs: "250px", md: "330px" },
                  overflow: "hidden",
                  zIndex: 200,
                  "& > *": {
                    textWrap: "wrap",
                    wordBreak: "break-word",
                  },
                }}
              >
                <Typography
                  variant="caption"
                  color="textWhite.main"
                  sx={{ bgcolor: "#ffb82a", px: "10px", py: "5px" }}
                >
                  Starting At Only $699
                </Typography>
                <Typography
                  variant="h4"
                  fontSize="32px"
                  color="textWhite.main"
                  sx={{ fontWeight: "bold", mt: 0.5, mb: 1 }}
                >
                  Smart Home Essentials Bundle
                </Typography>
                <Typography color="textWhite.main" variant="body1">
                  Enjoy seamless connectivity, premium sound, and effortless
                  charging.
                </Typography>
                <Button
                  sx={{
                    color: "textWhite.main",
                    mt: { xs: 2.5, md: 3 },
                    textDecoration: "underline",
                    textUnderlineOffset: "3px",
                    textTransform: "capitalize",
                    fontSize: "16px",
                  }}
                >
                  Explore Now
                </Button>
              </Box>
              <Box
                className="bannar-img"
                component="img"
                src={image1}
                sx={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  borderRadius: "20px",
                  transition: "transform 1.5s ease",
                }}
              />
            </Box>
          </Grid>

          <Grid size={{ xs: 12, md: 6 }}>
            <Box
              position="relative"
              sx={{
                borderRadius: "20px",
                height: "350px",
                width: "100%",
                overflow: "hidden",
                "&:hover .bannar-img": {
                  transform: "scale(1.5)",
                },
              }}
            >
              <Box
                className="banar-details"
                sx={{
                  position: "absolute",
                  top: "50%",
                  left: "30px",
                  transform: "translateY(-50%)",
                  width: { xs: "250px", md: "330px" },
                  overflow: "hidden",
                  zIndex: 200,
                  "& > *": {
                    textWrap: "wrap",
                    wordBreak: "break-word",
                  },
                }}
              >
                <Typography
                  variant="caption"
                  color="textWhite.main"
                  sx={{ bgcolor: "#111827", px: "10px", py: "5px" }}
                >
                  Starting At Only $699
                </Typography>
                <Typography
                  variant="h4"
                  fontSize="32px"
                  color="textWhite.main"
                  sx={{ fontWeight: "bold", mt: 0.5, mb: 1 }}
                >
                  JBL Wireless Headphones
                </Typography>
                <Typography color="textWhite.main" variant="body1">
                  Stay connected with Bluetooth technology and enjoy clear
                  sound.
                </Typography>
                <Button
                  sx={{
                    color: "textWhite.main",
                    mt: { xs: 2.5, md: 3 },
                    textDecoration: "underline",
                    textUnderlineOffset: "3px",
                    textTransform: "capitalize",
                    fontSize: "16px",
                  }}
                >
                  Explore Now
                </Button>
              </Box>
              <Box
                component="img"
                className="bannar-img"
                src={image2}
                sx={{
                  width: "100%",
                  height: "100%",
                  borderRadius: "20px",
                  objectFit: "cover",
                  transition: "transform 1.5s ease",
                }}
              />
            </Box>
          </Grid>

          <Grid size={{ xs: 12, md: 3 }}>
            <Box
              position="relative"
              sx={{
                borderRadius: "20px",
                height: "350px",
                width: "100%",
                overflow: "hidden",
                "&:hover .bannar-img": {
                  transform: "scale(1.5)",
                },
              }}
            >
              <Box
                className="banar-details"
                sx={{
                  position: "absolute",
                  bottom: "30px",
                  left: "50%",
                  transform: "translateX(-50%)",
                  width: { xs: "150px", md: "200px" },
                  overflow: "hidden",
                  textAlign: "center",
                  zIndex: 200,
                  "& > *": {
                    textWrap: "wrap",
                    wordBreak: "break-word",
                    color: "textWhite.main",
                  },
                }}
              >
                <Typography className="badge" variant="caption" mb={0.5}>
                  Best Deals
                </Typography>
                <Typography variant="h4" fontSize="32px" fontWeight="bold">
                  Apple Sleek Ultra Thin Laptop
                </Typography>
              </Box>
              <Box
                component="img"
                className="bannar-img"
                src={image3}
                sx={{
                  width: "100%",
                  height: "100%",
                  borderRadius: "20px",
                  objectFit: "cover",
                  transition: "transform 1.5s ease",
                }}
              />
            </Box>
          </Grid>

          <Grid size={{ xs: 12, md: 6 }}>
            <Box
              position="relative"
              sx={{
                borderRadius: "20px",
                height: "350px",
                width: "100%",
                overflow: "hidden",
                "&:hover .bannar-img": {
                  transform: "scale(1.5)",
                },
              }}
            >
              <Box
                className="banar-details"
                sx={{
                  position: "absolute",
                  top: "50%",
                  left: "30px",
                  transform: "translateY(-50%)",
                  width: { xs: "250px", md: "330px" },
                  overflow: "hidden",
                  zIndex: 200,
                  "& > *": {
                    textWrap: "wrap",
                    wordBreak: "break-word",
                  },
                }}
              >
                <Typography
                  variant="caption"
                  color="textWhite.main"
                  sx={{ bgcolor: "#ffb82a", px: "10px", py: "5px" }}
                >
                  Grab 50% Offer!
                </Typography>
                <Typography
                  variant="h4"
                  fontSize="32px"
                  color="textWhite.main"
                  sx={{ fontWeight: "bold", mt: 0.5, mb: 1 }}
                >
                  JBL Live Over Ear Headphone
                </Typography>
                <Typography color="textWhite.main" variant="body1">
                  Wirelesses stream high-quality sound even at lower bit rates
                </Typography>
                <Button
                  sx={{
                    color: "textWhite.main",
                    mt: { xs: 2.5, md: 3 },
                    textDecoration: "underline",
                    textUnderlineOffset: "3px",
                    textTransform: "capitalize",
                    fontSize: "16px",
                  }}
                >
                  Explore Now
                </Button>
              </Box>
              <Box
                component="img"
                className="bannar-img"
                src={image4}
                sx={{
                  width: "100%",
                  height: "100%",
                  borderRadius: "20px",
                  objectFit: "cover",
                  transition: "transform 1.5s ease",
                }}
              />
            </Box>
          </Grid>

          <Grid size={{ xs: 12, md: 3 }}>
            <Box
              position="relative"
              sx={{
                borderRadius: "20px",
                height: "350px",
                width: "100%",
                overflow: "hidden",
                "&:hover .bannar-img": {
                  transform: "scale(1.5)",
                },
              }}
            >
              <Box
                className="banar-details"
                sx={{
                  position: "absolute",
                  bottom: "30px",
                  left: "50%",
                  transform: "translateX(-50%)",
                  width: { xs: "150px", md: "200px" },
                  overflow: "hidden",
                  textAlign: "center",
                  zIndex: 200,
                  "& > *": {
                    textWrap: "wrap",
                    wordBreak: "break-word",
                    color: "textWhite.main",
                  },
                }}
              >
                <Typography className="badge" variant="caption" mb={0.5}>
                  New Arrival
                </Typography>
                <Typography variant="h4" fontSize="32px" fontWeight="bold">
                  Apple Smartwatch Series 8
                </Typography>
              </Box>
              <Box
                component="img"
                className="bannar-img"
                src={image5}
                sx={{
                  width: "100%",
                  height: "100%",
                  borderRadius: "20px",
                  objectFit: "cover",
                  transition: "transform 1.5s ease",
                }}
              />
            </Box>
          </Grid>
        </Grid>
      </Paper>

      <SwiperSection products={products} header="Most Views Products" />

      <Paper elevation={0} square sx={{ mt: "72px" }}>
        {/* Image List Section */}
        <Box
          className="container"
          sx={{
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "flex-start",
            flexDirection: { xs: "column", md: "row" },
            gap: 0,
            m: 0,
            p: 0,
          }}
        >
          {imageData.map((column, colIndex) => (
            <Box
              key={colIndex}
              sx={{
                display: { xs: "flex", md: "block" },
                flexDirection: { xs: "column", sm: "row" },
                width: { xs: "100%", md: `${100 / imageData.length}%` },
                height: {
                  xs: "auto",
                  sm: column.length === 1 ? "900px" : "280px",
                  md: column.length === 1 ? "500px" : "250px",
                },
              }}
            >
              {column.map((item, index) => (
                <Box
                  key={index}
                  sx={{
                    width: "100%",
                    height: "100%",
                    position: "relative",
                  }}
                >
                  <Box
                    component="img"
                    src={item.src}
                    alt={item.title}
                    sx={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      display: "block",
                    }}
                  />
                  <Box
                    className="content"
                    sx={{
                      position: "absolute",
                      top: item.src === image6 ? "30px" : "50%",
                      left: "20px",
                      transform:
                        item.src === image6 ? "none" : "translateY(-50%)",
                      width: "60%",
                      overflow: "hidden",
                      zIndex: 200,
                    }}
                  >
                    <Typography
                      variant="h4"
                      sx={{
                        fontSize: "27px",
                        fontWeight: "bold",
                        color: "textWhite.main",
                      }}
                    >
                      {item.title}
                    </Typography>
                    <Typography variant="subtitle1" color="textWhite.main">
                      {item.desc}
                    </Typography>
                    <Button
                      sx={{
                        textTransform: "capitalize",
                        fontSize: "14px",
                        color: "textWhite.main",
                        mt: "24px",
                        textDecoration: "underline",
                        textUnderlineOffset: "3px",
                      }}
                    >
                      Explore Now
                    </Button>
                  </Box>
                </Box>
              ))}
            </Box>
          ))}
        </Box>
      </Paper>

      <SwiperSection products={products} header="Best Selling Products" />
      <WhatClientsSay />

      {/* Latest Post Section */}
      <Paper elevation={0} sx={{ mt: 9 }} component="section">
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
            Latest Posts
          </Typography>
          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-end",
              cursor: "pointer",
              alignItems: "center",
              gap: "5px",
              transitionDuration: "0.3s",
              "&:hover": {
                textDecoration: "underline",
                textUnderlineOffset: "3px",
                color: "mainText.main",
              },
            }}
          >
            <Typography
              variant="subtitle2"
              sx={{
                color: "mainText.main",
              }}
            >
              View all posts
            </Typography>
            <ArrowRightAltOutlinedIcon
              fontSize="small"
              sx={{ color: "mainText.main" }}
            />
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            gap: "20px",
            flexDirection: { xs: "column", md: "row" },
          }}
        >
          {posts.map((post) => (
            <Box
              key={post.id}
              sx={{
                display: "flex",
                justifyContent: { xs: "flex-start", md: "center" },
                alignItems: "center",
                width: { xs: "100%", md: "calc(100% / 2)" },
                height: { xs: "100%", sm: "375px" },
                gap: { xs: "0", md: "20px" },
                position: "relative",
                flexDirection: { xs: "column", md: "row" },
              }}
            >
              <Box
                component="img"
                src={post.img}
                alt={post.title}
                sx={{
                  width: { xs: "100%", sm: "450px" },
                  height: { xs: "255px", sm: "100%" },
                  borderRadius: { xs: "20px 20px 0 0", sm: "20px" },
                  alignSelf: { xs: "flex-start", md: "center" },
                  objectFit: "cover",
                }}
              />
              <Box
                className="post-content"
                sx={{
                  position: { xs: "static", sm: "absolute" },
                  top: "50%",
                  transform: { xs: "none", sm: "translateY(-50%)" },
                  right: "0px",
                  width: { xs: "100%", sm: "450px" },
                  bgcolor: "secondary.main",
                  p: 4,
                  borderRadius: { xs: "0px 0px 20px 20px  ", sm: "20px" },
                  zIndex: 300,
                }}
              >
                <Typography variant="subtitle2" color="mainText.main" mb={1}>
                  {post.publishedAt}
                </Typography>
                <Typography
                  variant="h6"
                  color="mainText.main"
                  fontSize={22}
                  fontWeight="bold"
                >
                  {post.title}
                </Typography>
                <Typography
                  variant="subtitle1"
                  color="mainText.main"
                  mt={1}
                  mb={4}
                  sx={{
                    display: "-webkit-box",
                    WebkitLineClamp: 3,
                    WebkitBoxOrient: "vertical",
                    overflow: "hidden",
                    lineHeight: "1.5",
                    fontWeight: "400",
                    fontSize: "16px",
                  }}
                >
                  {post.desc}
                </Typography>
                <Button
                  endIcon={<ArrowRightAltOutlinedIcon fontSize="small" />}
                  sx={{
                    textTransform: "capitalize",
                    fontSize: 14,
                    color: "mainText.main",
                  }}
                >
                  Read More
                </Button>
              </Box>
            </Box>
          ))}
        </Box>
      </Paper>
    </Container>
  );
}

export default Home;
