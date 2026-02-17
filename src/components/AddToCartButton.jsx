import { Add } from "@mui/icons-material";
import { Button } from "@mui/material";
import { Link } from "react-router";

function AddToCartButton() {
  return (
    <Button
      component={Link}
      to="/add-to-cart"
      sx={{
        position: "absolute",
        bottom: "20px",
        left: 10,
        width: "calc(100% - 20px)",
        zIndex: 90,
        opacity: 0,
        transition: "opacity 0.4s ease-in-out",
        padding: "10px 20px",
        ".parent:hover &": {
          opacity: 1,
        },
      }}
      variant="contained"
      color="primary"
    >
      Add to cart
    </Button>
  );
}

export default AddToCartButton;
