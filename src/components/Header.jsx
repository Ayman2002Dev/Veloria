import {
  Box,
  Button,
  Container,
  IconButton,
  Paper,
  Typography,
} from "@mui/material";
import { useEffect } from "react";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { setTheme } from "../features/theme/themeSlice";
import { Link } from "react-router";

function Header() {
  const dispatch = useDispatch();

  const [toggleMode, setToggleMode] = useState(
    localStorage.getItem("theme") || "light",
  );

  useEffect(() => {
    localStorage.setItem("theme", toggleMode);
    dispatch(setTheme(toggleMode));
  }, [toggleMode]);

  return (
    <Paper
      variant="elevation"
      sx={{
        boxShadow: "none",
        bgcolor: "primary.main",
        color: "textWhite.main",
        py: "10px",
        height: "45px",
      }}
      square
      component="header"
    >
      <Container maxWidth="xl">
        <Box
          component="div"
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "wrap",
          }}
        >
          <Typography
            color="textWhite.main"
            sx={{ fontSize: "14px", flexGrow: 1 }}
          >
            Free Express Shipping
          </Typography>
          <Box component="div">
            <Button
              variant="text"
              sx={{
                color: "textWhite.main",
                textTransform: "none",
                p: 0,
                fontSize: "14px",
              }}
            >
              English
            </Button>

            <Button
              component={Link}
              to="/signup"
              variant="text"
              sx={{
                color: "textWhite.main",
                textTransform: "none",
                p: 0,
                px: "15px",
                fontSize: "14px",
              }}
            >
              SignUp
            </Button>

            <IconButton
              sx={{ p: 0 }}
              onClick={() => {
                setToggleMode((prev) => (prev === "light" ? "dark" : "light"));
              }}
            >
              {toggleMode === "light" ? (
                <DarkModeIcon sx={{ color: "textWhite.main" }} />
              ) : (
                <LightModeIcon sx={{ color: "textWhite.main" }} />
              )}
            </IconButton>
          </Box>
        </Box>
      </Container>
    </Paper>
  );
}

export default Header;
