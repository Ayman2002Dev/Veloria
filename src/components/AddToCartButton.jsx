import { Add } from "@mui/icons-material";
import { Button } from "@mui/material";
import { useDispatch } from "react-redux";
import { Link } from "react-router";
import { addToCart } from "../features/cartSlice";
import { toast } from "react-toastify";

function AddToCartButton({ product }) {
  const dispatch = useDispatch();
  const handleAddToCart = () => {
    dispatch(addToCart(product));
    toast.success("Successfully added to cart");
  };
  return (
    <Button
      onClick={handleAddToCart}
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
