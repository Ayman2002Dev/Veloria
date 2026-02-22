import {
  Box,
  Checkbox,
  Container,
  Divider,
  Drawer,
  FormControlLabel,
  Grid,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Paper,
  Rating,
  Slider,
  TextField,
  Typography,
} from "@mui/material";
import FilterListOutlinedIcon from "@mui/icons-material/FilterListOutlined";
import { useEffect, useState } from "react";
import ProductSkeleton from "../components/ProductSkeleton";
import ProductCard from "../components/ProductCard";
import { useSearchParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../features/filterSlice";

function Filter() {
  const [value, setValue] = useState([50, 1000]);
  const [selected, setSelected] = useState(null);
  const [status, setStatus] = useState(null);
  const [open, setOpen] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const ratings = [1, 2, 3, 4, 5];
  const availabilityStatus = ["In Stock", "Low Stock", "Out of Stock"];

  const handleChange = (event, newValue) => {
    setValue(newValue);

    const params = new URLSearchParams(searchParams);
    params.set("minPrice", newValue[0]);
    params.set("maxPrice", newValue[1]);

    setSearchParams(params);
  };

  // Rating
  const handleRating = (rate) => {
    setSelected(selected === rate ? null : rate);

    const params = new URLSearchParams(searchParams);

    if (selected === rate) {
      params.delete("rate");
    } else {
      params.set("rate", rate);
    }

    setSearchParams(params);
  };

  // Availability
  const handleAvailability = (sts) => {
    setStatus(status === sts ? null : sts);
    const params = new URLSearchParams(searchParams);
    if (status === sts) {
      params.delete("availability");
    } else {
      params.set("availability", sts);
    }
    setSearchParams(params);
  };

  function valuetext(value) {
    return `$${value}`;
  }

  const handleOpenDrawer = () => {
    setOpen(true);
  };

  const handleCloseDrawer = () => {
    setOpen(false);
  };

  const dispatch = useDispatch();
  const { products, loading, error } = useSelector((state) => state.filter);

  useEffect(() => {
    dispatch(getProducts());
  }, [selected, status, value]);

  return (
    <Container maxWidth="xl" sx={{ mt: 1.5 }}>
      <Grid container>
        <Grid size={4} sx={{ display: { xs: "none", md: "block" } }}>
          <Paper
            elevation={1}
            sx={{ width: "300px", p: 2.5, position: "sticky", top: 0, left: 0 }}
          >
            {/* Price Range */}
            <Box sx={{ width: "100%" }}>
              <Typography
                variant="subtitle2"
                sx={{ fontWeight: 500, mb: 2, fontSize: 14 }}
              >
                Price Range
              </Typography>
              <Box sx={{ width: "100%" }}>
                <Slider
                  getAriaLabel={() => "Price Range"}
                  value={value}
                  onChange={handleChange}
                  valueLabelDisplay="auto"
                  getAriaValueText={valuetext}
                  size="small"
                  max={10000}
                  color="mainText.main"
                />
                <Box
                  className="price-value"
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <TextField
                    size="small"
                    type="number"
                    value={value[0]}
                    onChange={(e) => {
                      setValue([e.target.value, value[1]]);
                    }}
                  />
                  <Typography sx={{ mx: 1 }}>-</Typography>
                  <TextField
                    size="small"
                    type="number"
                    value={value[1]}
                    onChange={(e) => {
                      setValue([value[0], e.target.value]);
                    }}
                  />
                </Box>
              </Box>
            </Box>

            <Divider sx={{ my: 3 }} />

            {/* Rating */}
            <Box sx={{ width: "100%" }}>
              <Typography
                variant="subtitle2"
                sx={{ fontWeight: 500, mb: 2, fontSize: 14 }}
              >
                Rating
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "2px",
                  justifyContent: "center",
                  alignItems: "flex-start",
                }}
              >
                {ratings.map((rate) => (
                  <FormControlLabel
                    key={rate}
                    control={
                      <Checkbox
                        size="small"
                        checked={selected === rate}
                        onChange={() => {
                          handleRating(rate);
                        }}
                      />
                    }
                    label={<Rating value={rate} readOnly size="small" />}
                  />
                ))}
              </Box>
            </Box>

            <Divider sx={{ my: 3 }} />

            {/* Availability Stock Status */}
            <Box sx={{ width: "100%" }}>
              <Typography
                variant="subtitle2"
                sx={{ fontWeight: 500, mb: 2, fontSize: 14 }}
              >
                Availability
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "2px",
                  justifyContent: "center",
                  alignItems: "flex-start",
                }}
              >
                {availabilityStatus.map((s) => (
                  <FormControlLabel
                    key={s}
                    control={
                      <Checkbox
                        size="small"
                        checked={status === s}
                        onChange={() => {
                          handleAvailability(s);
                        }}
                      />
                    }
                    label={s}
                  />
                ))}
              </Box>
            </Box>
          </Paper>
        </Grid>
        <Grid size={{ xs: 12, md: 8 }}>
          <Box textAlign="right" mb={1.5} display={{ xs: "block", md: "none" }}>
            <IconButton onClick={handleOpenDrawer}>
              <FilterListOutlinedIcon />
            </IconButton>
          </Box>
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
              gap: 3,
            }}
          >
            {loading ? (
              <ProductSkeleton boxesLength={10} />
            ) : products.length === 0 ? (
              <Typography variant="h6">No Results Found</Typography>
            ) : (
              products?.products?.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))
            )}
          </Box>
          <Drawer variant="temporary" open={open} onClose={handleCloseDrawer}>
            <Paper elevation={0} sx={{ width: "300px", p: 2 }}>
              {/* Price Range */}
              <List disablePadding>
                <ListItem
                  disablePadding
                  sx={{ flexDirection: "column", alignItems: "flex-start" }}
                >
                  <ListItemText
                    primary="Price Range"
                    primaryTypographyProps={{
                      fontSize: 14,
                      fontWeight: 500,
                      mb: 2,
                    }}
                  />

                  <Slider
                    value={value}
                    onChange={handleChange}
                    valueLabelDisplay="auto"
                    max={10000}
                    size="small"
                    color="mainText.main"
                  />

                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      width: "100%",
                      mt: 1,
                    }}
                  >
                    <TextField
                      size="small"
                      type="number"
                      value={value[0]}
                      onChange={(e) => {
                        setValue([+e.target.value, value[1]]);
                      }}
                    />
                    <Typography sx={{ mx: 1 }}>-</Typography>
                    <TextField
                      size="small"
                      type="number"
                      value={value[1]}
                      onChange={(e) => {
                        setValue([value[0], +e.target.value]);
                      }}
                    />
                  </Box>
                </ListItem>
              </List>

              <Divider sx={{ my: 2 }} />

              {/* Rating */}
              <List disablePadding>
                <ListItem
                  disablePadding
                  sx={{ flexDirection: "column", alignItems: "flex-start" }}
                >
                  <ListItemText
                    primary="Rating"
                    primaryTypographyProps={{
                      fontSize: 14,
                      fontWeight: 500,
                      mb: 1,
                    }}
                  />

                  {ratings.map((rate) => (
                    <ListItem key={rate} disablePadding>
                      <ListItemButton
                        selected={selected === rate}
                        onClick={() => handleRating(rate)}
                      >
                        <ListItemIcon sx={{ minWidth: 30 }}>
                          <Checkbox
                            edge="start"
                            size="small"
                            checked={selected === rate}
                            color="mainText.main"
                          />
                        </ListItemIcon>

                        <ListItemText
                          primary={
                            <Rating value={rate} readOnly size="small" />
                          }
                        />
                      </ListItemButton>
                    </ListItem>
                  ))}
                </ListItem>
              </List>

              <Divider sx={{ my: 2 }} />

              {/* Availability */}
              <List disablePadding>
                <ListItem
                  disablePadding
                  sx={{ flexDirection: "column", alignItems: "flex-start" }}
                >
                  <ListItemText
                    primary="Availability"
                    primaryTypographyProps={{
                      fontSize: 14,
                      fontWeight: 500,
                      mb: 1,
                    }}
                  />

                  {availabilityStatus.map((s) => (
                    <ListItem key={s} disablePadding>
                      <ListItemButton
                        selected={status === s}
                        onClick={() => handleAvailability(s)}
                      >
                        <ListItemIcon sx={{ minWidth: 30 }}>
                          <Checkbox
                            edge="start"
                            size="small"
                            checked={status === s}
                            color="mainText.main"
                          />
                        </ListItemIcon>

                        <ListItemText primary={s} />
                      </ListItemButton>
                    </ListItem>
                  ))}
                </ListItem>
              </List>
            </Paper>
          </Drawer>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Filter;
