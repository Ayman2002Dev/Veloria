import {
  FaceRetouchingNaturalOutlined,
  LocalFloristOutlined,
  WeekendOutlined,
  LocalGroceryStoreOutlined,
  HomeOutlined,
  KitchenOutlined,
  LaptopOutlined,
  CheckroomOutlined,
  SportsHandballOutlined,
  WatchOutlined,
  DevicesOutlined,
  TwoWheelerOutlined,
  SpaOutlined,
  SmartphoneOutlined,
  SportsSoccerOutlined,
  RemoveRedEyeOutlined,
  TabletMacOutlined,
  WomanOutlined,
  DirectionsCarOutlined,
  WorkOutlineOutlined,
  Woman2Outlined,
  WatchLaterOutlined,
} from "@mui/icons-material";

import {
  Box,
  Button,
  ClickAwayListener,
  Container,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import ChevronRightOutlinedIcon from "@mui/icons-material/ChevronRightOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import { useEffect, useState } from "react";
import axios from "axios";
import { NavLink } from "react-router";
import SearchResults from "./SearchResults";

function Filter() {
  const [open, SetOpen] = useState(false);
  const [openSearch, setOpenSearch] = useState(false);
  const [categories, setCategories] = useState([]);
  const categoriesApi = import.meta.env.VITE_API_CATEGORIES;

  const handleClick = () => {
    SetOpen((prev) => !prev);
  };

  const handleClose = () => {
    SetOpen(false);
  };

  const handleSearchClick = () => {
    setOpenSearch(true);
  };

  useEffect(() => {
    const getCategories = async () => {
      try {
        const response = await axios.get(categoriesApi);
        setCategories(response.data);
      } catch (error) {
        throw new Error(`Error to get categories, ${error}`);
      }
    };
    getCategories();
  }, []);

  // Icons Map List
  const iconsMap = {
    beauty: FaceRetouchingNaturalOutlined,
    fragrances: LocalFloristOutlined,
    furniture: WeekendOutlined,
    groceries: LocalGroceryStoreOutlined,
    "home-decoration": HomeOutlined,
    "kitchen-accessories": KitchenOutlined,
    laptops: LaptopOutlined,
    "mens-shirts": CheckroomOutlined,
    "mens-shoes": SportsHandballOutlined,
    "mens-watches": WatchOutlined,
    "mobile-accessories": DevicesOutlined,
    motorcycle: TwoWheelerOutlined,
    "skin-care": SpaOutlined,
    smartphones: SmartphoneOutlined,
    "sports-accessories": SportsSoccerOutlined,
    sunglasses: RemoveRedEyeOutlined,
    tablets: TabletMacOutlined,
    tops: WomanOutlined,
    vehicle: DirectionsCarOutlined,
    "womens-bags": WorkOutlineOutlined,
    "womens-dresses": Woman2Outlined,
    "womens-jewellery": CheckroomOutlined,
    "womens-shoes": CheckroomOutlined,
    "womens-watches": WatchLaterOutlined,
  };

  return (
    <Paper sx={{ boxShadow: "none", pb: "15px" }} square>
      <Container
        maxWidth="xl"
        sx={{ display: "flex", alignItems: "flex-start", gap: "20px" }}
      >
        <ClickAwayListener onClickAway={handleClose}>
          <Box position="relative">
            <Button
              variant="outlined"
              startIcon={<MenuOutlinedIcon />}
              endIcon={<ChevronRightOutlinedIcon sx={{ ml: 10 }} />}
              sx={{
                backgroundColor: "#fafafa",
                color: "primary.main",
                height: "41px",
                border: 0,
                borderRadius: "5px",
                textTransform: "none",
              }}
              onClick={handleClick}
            >
              Categories
            </Button>

            <Paper
              component="div"
              className="categories-menu"
              sx={{
                position: "absolute",
                top: "calc(100% + 15px)",
                left: 0,
                width: "100%",
                height: "calc(100vh - 186px)",
                overflow: "auto",
                zIndex: 1500,
                backgroundColor: "#fff",

                opacity: open ? 1 : 0,
                transform: open ? "translateY(0)" : "translateY(-12px)",
                transition: "all 0.3s ease",

                pointerEvents: open ? "auto" : "none",

                "&::-webkit-scrollbar": {
                  width: "3px",
                },
                "&::-webkit-scrollbar-track": {
                  background: "#f1f1f1",
                  borderRadius: "10px",
                },
                "&::-webkit-scrollbar-thumb": {
                  background: "#888",
                  borderRadius: "10px",
                },
                "&::-webkit-scrollbar-thumb:hover": {
                  background: "#555",
                },
              }}
              aria-hidden={!open}
            >
              {categories?.map((category, index) => {
                const Icon = iconsMap[category];
                return (
                  <Button
                    key={category}
                    component={NavLink}
                    to={`products/categories/${category}?page=1`}
                    fullWidth
                    sx={{
                      display: "flex",
                      justifyContent: "flex-start",
                      alignItems: "center",
                      gap: "12px",
                      textTransform: "capitalize",
                      px: "16px",
                      py: "8px",
                      "&.active": {
                        backgroundColor: "primary.main",
                      },
                      "&.active > *": {
                        color: "textWhite.main",
                      },
                    }}
                    onClick={handleClose}
                  >
                    <Icon
                      sx={{
                        width: "20px",
                        height: "20px",
                        color: "#1f2937",
                      }}
                    />
                    <Typography sx={{ fontSize: "14px", color: "#1f2937" }}>
                      {category}
                    </Typography>
                  </Button>
                );
              })}
            </Paper>
          </Box>
        </ClickAwayListener>
        <TextField
          type="search"
          onClick={handleSearchClick}
          placeholder="Searching For..."
          sx={{
            backgroundColor: "#fafafa",
            flexGrow: 1,
            borderRadius: "5px",
            "& .MuiOutlinedInput-root": {
              borderRadius: "5px",
              "& fieldset": {
                border: "none",
              },
              "&:hover fieldset": {
                border: "1px solid",
              },
              "&.Mui-focused fieldset": {
                border: "2px solid",
              },
            },
            "& .MuiOutlinedInput-input": {
              py: "9px",
              pr: 0,
              color: (theme) => theme.palette.primary.main,
              "&::placeholder": {
                color: (theme) => theme.palette.primary.main,
                fontSize: 14,
                opacity: 1,
              },
            },
          }}
        />
        {openSearch && (
          <SearchResults
            openSearch={openSearch}
            setOpenSearch={setOpenSearch}
          />
        )}
      </Container>
    </Paper>
  );
}

export default Filter;
