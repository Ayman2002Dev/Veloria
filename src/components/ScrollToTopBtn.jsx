import { Box, CircularProgress, IconButton } from "@mui/material";
import KeyboardArrowUpOutlinedIcon from "@mui/icons-material/KeyboardArrowUpOutlined";
import { useEffect, useState } from "react";

function ScrollToTopBtn() {
  const [show, setShow] = useState(false);
  const [scrollProgressBar, setScrollProgressBar] = useState(0);
  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    const handleScroll = () => {
      setShow(window.scrollY > 500);
      const currentHeight = document.body.clientHeight;
      const clientHeight = document.documentElement.clientHeight;
      let currentScrollY = window.scrollY;
      const progress = (currentScrollY / (currentHeight - clientHeight)) * 100;
      setScrollProgressBar(progress);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!show) return null;

  return (
    <Box
      sx={{
        position: "fixed",
        bottom: "100px",
        right: "30px",
        zIndex: 2450,
      }}
    >
      <CircularProgress
        variant="determinate"
        value={scrollProgressBar}
        size={60}
        sx={{
          position: "absolute",
          left: "-4px",
          top: "-4px",
          color: "#a7a8ad",
        }}
      />

      <IconButton
        disableRipple
        onClick={handleClick}
        sx={{
          width: 52,
          height: 52,
          bgcolor: "primary.main",
          color: "textWhite.main",
        }}
      >
        <KeyboardArrowUpOutlinedIcon fontSize="large" />
      </IconButton>
    </Box>
  );
}

export default ScrollToTopBtn;
