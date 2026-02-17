import {
  Box,
  Button,
  Container,
  Divider,
  Paper,
  Rating,
  Skeleton,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import { useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import DescriptionSection from "../components/DescriptionSection";
import ReviewsSection from "../components/ReviewsSection";

function ProductDetails() {
  const product = useLoaderData();
  const [currentImage, setCurrentImage] = useState(product.images[0]);

  const [showTab, setShowTab] = useState("description");
  const theme = useTheme();

  useEffect(() => {
    document.title = product.title;
    setCurrentImage(product.images[0]);
  }, [product]);

  return (
    <Container maxWidth="xl" sx={{ mb: "20px" }}>
      <Paper
        component="section"
        sx={{
          backgroundColor: "secondary.main",
          p: { xs: "5px", sm: "20px" },
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "20px",
          flexWrap: "wrap",
          mt: "20px",
          boxShadow: "none",
          overflow: "hidden",
        }}
      >
        <Box sx={{ flex: { sm: 0.5 } }}>
          {!product ? (
            <Skeleton width={350} height={500} />
          ) : (
            <Box
              component="img"
              alt={product.title}
              src={currentImage}
              sx={{ width: "100%" }}
            />
          )}

          {product.images.length > 1 && (
            <Box
              component="div"
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                mt: 3,
              }}
            >
              <Stack spacing={2} direction="row">
                {product.images.map((image) => (
                  <Box
                    sx={{
                      border:
                        currentImage === image
                          ? `1px solid ${theme.palette.getContrastText(theme.palette.secondary.main)}`
                          : "1px solid transparent",
                      borderRadius: "10px",
                      cursor: "pointer",
                      backgroundColor: "secondary.main",
                      "&:hover": {
                        border: `1px solid ${theme.palette.getContrastText(theme.palette.secondary.main)}`,
                      },
                    }}
                    component="img"
                    src={image}
                    key={image}
                    width={62}
                    height={62}
                    onClick={() => setCurrentImage(image)}
                  />
                ))}
              </Stack>
            </Box>
          )}
        </Box>
        <Box sx={{ flex: { sm: 0.5 }, alignSelf: { sm: "flex-start" } }}>
          {!product ? (
            <Stack spacing={1.2}>
              <Skeleton width="100%" height="20px" />
              <Skeleton width="80%" />
              <Skeleton width="80%" />
              <Skeleton width="70%" />
              <Skeleton width="90%" />
            </Stack>
          ) : (
            <Stack spacing={1.2}>
              <Typography
                variant="h4"
                sx={{
                  fontSize: { xs: "25px", md: "30px" },
                  fontWeight: "bold",
                }}
                color="mainText.main"
              >
                {product.title}
              </Typography>

              <Typography variant="subtitle1" color="mainText.main">
                Category:
                <Typography
                  variant="inherit"
                  sx={{ fontWeight: "bold", ml: "3px" }}
                  component="span"
                >
                  {product.category}
                </Typography>
              </Typography>

              {product.brand && (
                <Typography variant="subtitle1" color="mainText.main">
                  Brand:
                  <Typography
                    variant="inherit"
                    sx={{ fontWeight: "bold", ml: "3px" }}
                    component="span"
                  >
                    {product.brand}
                  </Typography>
                </Typography>
              )}

              <Box
                sx={{
                  display: "flex",
                  justifyContent: "flex-start",
                  alignItems: "center",
                  gap: "20px",
                }}
              >
                <Typography
                  variant="h4"
                  color="mainText.main"
                  sx={{ fontWeight: "bold" }}
                >
                  ${product.price}
                </Typography>

                <Typography
                  variant="h6"
                  color="mainText.main"
                  component="del"
                  sx={{ fontWeight: "bold", color: "#aaacb1" }}
                >
                  $
                  {(
                    product.price -
                    (product.price * product.discountPercentage) / 100
                  ).toFixed(2)}
                </Typography>
              </Box>

              <Box
                className="rating"
                variant="div"
                sx={{ display: "flex", gap: "15px" }}
              >
                <Rating
                  name="half-rating-read"
                  defaultValue={product.rating || 0}
                  precision={0.5}
                  readOnly
                />
                <Typography variant="subtitle1">({product.rating})</Typography>
              </Box>

              <Box className="option" variant="div">
                <Typography variant="subtitle1">Option</Typography>
                <Box
                  className="btns"
                  component="div"
                  sx={{
                    "& button": {
                      textTransform: "none",
                      p: "2px 12px",
                      borderRadius: "6px",
                    },
                    mt: 0.5,
                  }}
                >
                  <Stack
                    spacing={1.5}
                    direction="row"
                    sx={{
                      display: "flex",
                      flexWrap: "wrap",
                      rowGap: "15px",
                    }}
                  >
                    <Button variant="outlined" color="primary.main">
                      option1
                    </Button>
                    <Button variant="outlined" color="primary.main">
                      option2
                    </Button>
                    <Button variant="outlined" color="primary.main">
                      option3
                    </Button>
                    <Button variant="outlined" color="primary.main">
                      option4
                    </Button>
                  </Stack>
                </Box>
              </Box>

              <Box className="type" variant="div">
                <Typography variant="subtitle1">Type</Typography>
                <Box
                  className="btns"
                  component="div"
                  sx={{
                    "& button": {
                      textTransform: "none",
                      p: "2px 12px",
                      borderRadius: "6px",
                    },
                    mt: 0.5,
                  }}
                >
                  <Stack
                    spacing={1.5}
                    direction="row"
                    sx={{
                      display: "flex",
                      flexWrap: "wrap",
                      rowGap: "15px",
                    }}
                  >
                    <Button variant="outlined" color="primary.main">
                      type1
                    </Button>
                    <Button variant="outlined" color="primary.main">
                      type2
                    </Button>
                    <Button variant="outlined" color="primary.main">
                      type3
                    </Button>
                  </Stack>
                </Box>
              </Box>

              <Typography variant="subtitle1" color="mainText.main">
                Available:
                <Typography
                  variant="inherit"
                  sx={{ fontWeight: "bold", ml: "3px" }}
                  component="span"
                >
                  {product.stock}
                </Typography>
              </Typography>
              <Box className="tags">
                <Typography variant="body1" color="mainText.main">
                  Tags
                </Typography>
                <Box>
                  {product.tags &&
                    product.tags.map((tag) => (
                      <Button
                        sx={{ textDecoration: "underline" }}
                        color="mainText.main"
                        key={tag}
                      >
                        #{tag}
                      </Button>
                    ))}
                </Box>
              </Box>
              <Button
                disableRipple
                disableElevation
                className="add-to-cart-btn"
                variant="contained"
                sx={{ width: "fit-content", textTransform: "none" }}
              >
                Add To Cart
              </Button>
            </Stack>
          )}
        </Box>
      </Paper>
      <Paper
        sx={{
          boxShadow: "none",
          mt: 5,
          backgroundColor: (theme) =>
            theme.palette.mode === "light" ? "#fff" : "#14181b",
        }}
        component="section"
      >
        <Box className="controls" position="relative">
          <Box
            sx={{
              "& button": {
                textTransform: "none",
                padding: "12px 16px",
              },
            }}
          >
            <Button
              onClick={() => {
                setShowTab("description");
              }}
              color="mainText,main"
            >
              Description
            </Button>
            <Button
              onClick={() => {
                setShowTab("review");
              }}
              color="mainText,main"
            >
              Review ({product.reviews.length})
            </Button>
            <Divider />
          </Box>
          <Typography
            component="span"
            sx={{
              position: "absolute",
              transition: "all 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
              bottom: "0px",
              left: showTab === "description" ? "0px" : "107.55px",
              width: showTab === "description" ? "107.55px" : "99.58px",
              height: "3px",
              backgroundColor: "#000",
            }}
          ></Typography>
        </Box>
        <Box className="data" p={{ xs: "5px", sm: "20px" }}>
          {showTab === "description" ? (
            <DescriptionSection description={product.description} />
          ) : (
            <ReviewsSection reviews={product.reviews} />
          )}
        </Box>
      </Paper>
    </Container>
  );
}

export default ProductDetails;
