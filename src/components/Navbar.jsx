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
import FilterAltOutlinedIcon from "@mui/icons-material/FilterAltOutlined";

import {
  AppBar,
  Badge,
  badgeClasses,
  Box,
  Button,
  Container,
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem,
  Paper,
  Stack,
  Tooltip,
  Typography,
  useTheme,
} from "@mui/material";
import { Link, NavLink } from "react-router";
import AccountCircleIcon from "@mui/icons-material/AccountCircleOutlined";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCartOutlined";
import MenuIcon from "@mui/icons-material/Menu";
import HomeIcon from "@mui/icons-material/HomeOutlined";
import ConnectWithoutContactIcon from "@mui/icons-material/ConnectWithoutContactOutlined";
import InfoIcon from "@mui/icons-material/InfoOutline";
import CategoryOutlinedIcon from "@mui/icons-material/CategoryOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { useEffect, useState } from "react";
import BottomNavigation from "./BottomNavigation";
import { useSelector } from "react-redux";
import SearchResults from "./SearchResults";
import axios from "axios";
import styled from "@emotion/styled";

function Navbar() {
  const theme = useTheme();
  const [openMenu, setOpenMenu] = useState(false);
  const [openCategoriesMenu, setOpenCategoriesMenu] = useState(false);
  const [categories, setCategories] = useState([]);
  const [cartLength, setCartLength] = useState(0);
  const categoriesApi = import.meta.env.VITE_API_CATEGORIES;

  const [openSearch, setOpenSearch] = useState(false);

  const [anchorEl, setAnchorEl] = useState(null);
  const openUserMenu = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  const handleMenu = () => {
    setOpenMenu((prev) => !prev);
  };

  const handleSearchClick = () => {
    setOpenSearch(true);
  };

  const pagination = useSelector((state) => state.pagination);
  const cartItems = useSelector((state) => state.cart.items);

  const pages = [
    { name: "Home", href: "/", icon: <HomeIcon /> },
    {
      name: "Products",
      href: `/products?page=${pagination.currentPage}`,
      icon: <CategoryOutlinedIcon />,
    },
    {
      name: "About",
      href: "/about",
      icon: <InfoIcon />,
    },
    {
      name: "Contact",
      href: "/contact",
      icon: <ConnectWithoutContactIcon />,
    },
  ];

  const settingsPage = [
    { name: "Profile", href: "/profile" },
    { name: "Orders", href: "/orders" },
    { name: "LogOut", href: "/logout" },
  ];

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

  useEffect(() => {
    setCartLength(cartItems.length);
  }, [cartItems]);

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

  const CartBadge = styled(Badge)`
    & .${badgeClasses.badge} {
      top: -12px;
      right: -6px;
    }
  `;

  return (
    <Paper component="nav" square sx={{ py: "20px", height: 80 }}>
      <Container maxWidth="xl" component="section">
        <Box
          component="div"
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Tooltip title="Open Category Menu">
            <MenuIcon
              onClick={() => {
                setOpenCategoriesMenu(true);
              }}
              sx={{ display: { xs: "block", md: "none", cursor: "pointer" } }}
            />
          </Tooltip>

          <Drawer
            open={openCategoriesMenu}
            onClose={() => {
              setOpenCategoriesMenu(false);
            }}
            variant="temporary"
          >
            <List dense>
              {categories?.map((category) => {
                const Icon = iconsMap[category];
                return (
                  <ListItemButton
                    onClick={() => {
                      setOpenCategoriesMenu(false);
                    }}
                    component={NavLink}
                    to={`/products/categories/${category}`}
                    key={category}
                    sx={{
                      "&.active": {
                        backgroundColor: "primary.main",
                      },
                      "&.active > *": {
                        color: "textWhite.main",
                      },
                    }}
                  >
                    <ListItemIcon sx={{ color: "mainText.main" }}>
                      <Icon />
                    </ListItemIcon>
                    <ListItemText
                      sx={{
                        color: "mainText.main",
                      }}
                    >
                      {category}
                    </ListItemText>
                  </ListItemButton>
                );
              })}
            </List>
          </Drawer>

          <Typography
            variant="h5"
            component={Link}
            to="/"
            sx={{
              textDecoration: "none",
              fontWeight: "bold",
              fontSize: "25px",
              color:
                theme.palette.mode === "light"
                  ? "primary.main"
                  : "textWhite.main",
            }}
          >
            Veloria
          </Typography>

          {/* Links */}
          <Box component="div" sx={{ display: { xs: "none", md: "block" } }}>
            <Stack direction="row" spacing={{ md: 3, lg: 5 }}>
              {pages.map((page) => (
                <Button
                  key={page.name}
                  sx={{
                    backgroundColor: "transparent",
                    textTransform: "none",
                    transitionDuration: 0.4,
                    color: "mainText.main",
                    "&:hover": {
                      textDecoration: "underline",
                    },
                    "&.active": {
                      textDecoration: "underline",
                    },
                  }}
                  component={NavLink}
                  to={page.href}
                  disableRipple
                >
                  {page.name}
                </Button>
              ))}
            </Stack>
          </Box>

          <Box sx={{ display: "flex" }}>
            <Tooltip title="Search">
              <IconButton
                sx={{ display: { xs: "block", md: "none" } }}
                onClick={handleSearchClick}
              >
                <SearchOutlinedIcon />
              </IconButton>
            </Tooltip>

            <Tooltip title="Filter">
              <IconButton
                component={Link}
                to="/filter"
                sx={{ display: { xs: "block", md: "none" } }}
              >
                <FilterAltOutlinedIcon />
              </IconButton>
            </Tooltip>

            <Box>
              <Tooltip title="Open User Settings">
                <IconButton onClick={handleClick}>
                  <AccountCircleIcon color="primary.main" />
                </IconButton>
              </Tooltip>
              <Menu
                anchorEl={anchorEl}
                open={openUserMenu}
                onClose={handleCloseMenu}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "right",
                }}
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
              >
                {settingsPage.map((sPage) => (
                  <MenuItem
                    key={sPage.name}
                    onClick={handleCloseMenu}
                    sx={{ color: "mainText.main" }}
                    component={Link}
                    to={sPage.href}
                  >
                    {sPage.name}
                  </MenuItem>
                ))}
              </Menu>
            </Box>

            <Tooltip title="Cart">
              <IconButton component={Link} to="/cart">
                <ShoppingCartIcon color="primary.main" />
                <CartBadge
                  badgeContent={cartLength}
                  color="primary"
                  overlap="circular"
                />
              </IconButton>
            </Tooltip>
          </Box>
        </Box>
      </Container>
      <BottomNavigation>
        <AppBar
          position="fixed"
          sx={{
            display: { md: "none" },
            top: "auto",
            bottom: 0,
            zIndex: 9000,
            p: "10px 20px",
            backgroundColor: (theme) =>
              theme.palette.mode === "light" ? "#ffffff1e" : "#000000b0",
            backdropFilter: "blur(10px)",
          }}
        >
          <Container
            maxWidth="xl"
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Stack direction="row" spacing={2}>
              {pages.map((page) => (
                <Button
                  key={page.name}
                  sx={{
                    backgroundColor: "transparent",
                    textTransform: "none",
                    transitionDuration: 0.4,
                    color: "mainText.main",
                    "&:hover": {
                      textDecoration: "underline",
                    },
                    "&.active": {
                      textDecoration: "underline",
                    },
                  }}
                  component={NavLink}
                  to={page.href}
                  disableRipple
                >
                  {page.name}
                </Button>
              ))}
            </Stack>
          </Container>
        </AppBar>
      </BottomNavigation>
      {openSearch && (
        <SearchResults openSearch={openSearch} setOpenSearch={setOpenSearch} />
      )}
    </Paper>
  );
}

export default Navbar;
