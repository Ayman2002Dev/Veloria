import Header from "../components/Header";
import { Outlet } from "react-router";
import Navbar from "../components/Navbar";
import ProductFilters from "../components/ProductFilters";
import { useMediaQuery, useTheme } from "@mui/material";
import ScrollToTopBtn from "../components/ScrollToTopBtn";
import Footer from "../components/Footer";
function MainLayouts() {
  const theme = useTheme();
  const isMdUp = useMediaQuery(theme.breakpoints.up("md"));
  return (
    <>
      <Header />
      <Navbar />
      {isMdUp && <ProductFilters />}
      <ScrollToTopBtn />
      <Outlet />
      <Footer />
    </>
  );
}

export default MainLayouts;
