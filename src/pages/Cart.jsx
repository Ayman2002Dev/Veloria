import {
  Box,
  Container,
  IconButton,
  Paper,
  Tooltip,
  Typography,
} from "@mui/material";

import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import RemoveOutlinedIcon from "@mui/icons-material/RemoveOutlined";
import {
  decreaseQuantity,
  increaseQuantity,
  removeFromCart,
} from "../features/cartSlice";
import { Link } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { useEffect } from "react";

function Cart() {
  const dispatch = useDispatch();
  const { items } = useSelector((state) => state.cart);
  const notify = () => {
    toast.success("Product deleted successfuly");
  };

  useEffect(() => {
    document.title = "Cart";
  }, []);

  return (
    <Paper elevation={0}>
      {items.length > 0 &&
        items.map((item) => (
          <Paper
            key={item.id}
            elevation={0}
            sx={{
              display: "flex",
              bgcolor: "secondary.main",
              flexDirection: "row",
              alignItems: "center",
              mb: 2,
              borderRadius: "12px",
              gap: 2,
            }}
          >
            {/* Item Image */}
            <Box
              component="img"
              src={item.thumbnail}
              alt={item.title}
              sx={{
                width: 100,
                height: 100,
                objectFit: "cover",
                borderRadius: "12px 0 0 12px",
                bgcolor: (theme) =>
                  theme.palette.mode === "light" ? "#f5f5f5" : "secondary.main",
              }}
            />

            {/* Item Content */}
            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: {
                  xs: "1fr 1fr",
                  sm: "2fr 1fr auto auto",
                },
                alignItems: "center",
                gap: 2,
                flex: 1,
                width: "100%",
                pr: 1.5,
              }}
            >
              {/* Title & Price */}
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  overflow: "hidden",
                }}
              >
                <Tooltip title={item.title}>
                  <Typography
                    component={Link}
                    to={`/products/${item.id}`}
                    variant="subtitle1"
                    fontWeight="bold"
                    sx={{
                      whiteSpace: "nowrap",
                      textOverflow: "ellipsis",
                      overflow: "hidden",
                      textDecoration: "none",
                      transitionDuration: "0.4s",
                      "&:hover": {
                        textDecoration: "underline",
                        textUnderlineOffset: "3px",
                      },
                    }}
                    color="mainText.main"
                  >
                    {item.title}
                  </Typography>
                </Tooltip>

                <Typography
                  variant="body2"
                  color="mainText.main"
                  fontWeight={600}
                  mt={0.5}
                >
                  ${item.price}
                </Typography>
              </Box>

              {/* Quantity Controls */}
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 1,
                  justifyContent: "center",
                }}
              >
                <IconButton
                  disabled={item.quantity <= 1}
                  onClick={() => {
                    dispatch(decreaseQuantity(item));
                  }}
                  size="small"
                  sx={{
                    minWidth: 0,
                    width: 30,
                    height: 30,
                    padding: 0,
                    borderRadius: 1,
                  }}
                >
                  <RemoveOutlinedIcon sx={{ width: 16, height: 16 }} />
                </IconButton>

                <Typography
                  variant="body2"
                  color="mainText.main"
                  lineHeight={1.6}
                >
                  {item.quantity || 1}
                </Typography>

                <IconButton
                  disabled={item.quantity >= 20}
                  onClick={() => {
                    dispatch(increaseQuantity(item));
                  }}
                  size="small"
                  sx={{
                    minWidth: 0,
                    width: 30,
                    height: 30,
                    padding: 0,
                    borderRadius: 1,
                  }}
                >
                  <AddOutlinedIcon sx={{ width: 16, height: 16 }} />
                </IconButton>
              </Box>

              {/* Total Price */}
              <Typography
                variant="subtitle1"
                color="mainText.main"
                sx={{
                  fontWeight: "600",
                  justifySelf: { xs: "flex-start", sm: "center" },
                }}
              >
                ${item.totalPrice.toFixed(2) || item.price}
              </Typography>

              {/* Delete Button */}
              <IconButton
                onClick={() => {
                  dispatch(removeFromCart(item));
                  notify();
                }}
                color="error"
                sx={{ justifySelf: { xs: "flex-end", sm: "center" } }}
              >
                <DeleteOutlinedIcon />
              </IconButton>
            </Box>
          </Paper>
        ))}
    </Paper>
  );
}

export default Cart;
Cart;
