import {
  Box,
  Button,
  Divider,
  FormControl,
  InputAdornment,
  Paper,
  Stack,
  TextField,
  Tooltip,
  Typography,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { addCoupon } from "../features/cartSlice";
import { useState } from "react";
import { toast } from "react-toastify";
import { Link, useLocation } from "react-router";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";

function OrderSummary() {
  const [hasDiscount, setHasDiscount] = useState(false);
  const [error, setError] = useState(false);
  const [newTotal, setNewTotal] = useState(null);

  const { items, totalPrice, couponCode, discount } = useSelector(
    (state) => state.cart,
  );
  const [coupon, setCoupon] = useState(couponCode || "");
  const dispatch = useDispatch();

  const location = useLocation();
  const hidden =
    location.pathname === "/checkout" || location.pathname === "/payment";

  const couponsCode = [
    { code: "Ayman20", discount: 20 },
    { code: "Ayman50", discount: 50 },
    { code: "Ayman70", discount: 70 },
    { code: "Ayman100", discount: 100 },
    { code: "Ao2002", discount: 35 },
    { code: "Veloria10", discount: 10 },
    { code: "Veloria20", discount: 20 },
    { code: "Veloria50", discount: 50 },
  ];

  const notify = (message, type) => {
    if (type === "success") {
      toast.success(message);
    } else if (type === "error") {
      toast.error(message);
    }
  };
  const handleCoupon = () => {
    const foundCoupon = couponsCode.find(
      (c) => c.code.toLocaleLowerCase() === coupon.toLocaleLowerCase(),
    );
    if (foundCoupon) {
      setError(false);
      setHasDiscount(true);
      dispatch(
        addCoupon({ code: foundCoupon.code, discount: foundCoupon.discount }),
      );

      const discountAmount = (totalPrice * foundCoupon.discount) / 100;
      const newTotal = totalPrice - discountAmount;
      setNewTotal(newTotal);

      notify(
        `Coupon applied! You saved $${discountAmount.toFixed(2)}. New total: $${newTotal.toFixed(2)}`,
        "success",
      );
    } else {
      setError(true);
      setHasDiscount(false);
      notify("Invalid coupon code. Please try again.", "error");
    }
  };
  return (
    <Paper
      elevation={0}
      sx={{ borderRadius: "12px", p: 2, bgcolor: "secondary.main" }}
    >
      <Typography
        variant="h6"
        fontWeight="bold"
        color="mainText.main"
        mb={1}
        textAlign="center"
      >
        Order Summary
      </Typography>

      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          py: 1.5,
        }}
      >
        <Typography variant="subtitle1" fontWeight="bold" color="mainText.main">
          Total:
        </Typography>
        <Typography
          variant="subtitle1"
          sx={{ fontWeight: "600", fontSize: 18 }}
          color="mainText.main"
        >
          ${hasDiscount ? newTotal.toFixed(2) : totalPrice.toFixed(2)}
        </Typography>
      </Box>
      <Divider />
      <Box py={1.5}>
        <Stack spacing={1}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "flex-start",
                alignItems: "center",
              }}
            >
              <Typography mr={0.5}>Coupon</Typography>
              <Tooltip
                title="Available Coupons:
Ayman20 for 20% off your total,
Ayman50 for 50% off,
Ayman70 for 70% off,
Ayman100 for 100% off your purchase,
Ao2002 for 35% off,
Veloria10 for 10% off,
Veloria20 for 20% off,
and Veloria50 for 50% off.
Enter any valid coupon in the Coupon field before checkout to apply the discount."
              >
                <InfoOutlinedIcon fontSize="small" sx={{ cursor: "pointer" }} />
              </Tooltip>
              :
            </Box>
            <Typography>{hasDiscount ? coupon : "-"}</Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Typography>Discount:</Typography>
            <Typography>%{hasDiscount ? discount : "-"}</Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Typography>save:</Typography>
            <Typography>
              ${hasDiscount ? ((totalPrice * discount) / 100).toFixed(2) : "-"}
            </Typography>
          </Box>
        </Stack>
      </Box>
      {/* Coupon Box */}
      <Box py={1.5}>
        <Typography
          variant="body1"
          fontWeight={500}
          color="mainText.main"
          mb={0.5}
        >
          Coupon:
        </Typography>
        <FormControl error={error} fullWidth sx={{ mt: 1 }}>
          <TextField
            disabled={hasDiscount || items.length === 0}
            error={error}
            onChange={(e) => setCoupon(e.target.value)}
            label="Coupon"
            fullWidth
            size="small"
            sx={{
              "& .MuiOutlinedInput-root": {
                pr: 0,
              },
            }}
            slotProps={{
              input: {
                endAdornment: (
                  <InputAdornment position="end" sx={{ height: "100%" }}>
                    <Button
                      disabled={hasDiscount || items.length === 0}
                      onClick={handleCoupon}
                      variant="contained"
                      sx={{
                        height: "100%",
                        borderRadius: "0 5px 5px 0",
                        minWidth: 70,
                        minHeight: "40px",
                        p: "0px 10px",
                      }}
                    >
                      Check
                    </Button>
                  </InputAdornment>
                ),
              },
            }}
          />
        </FormControl>
      </Box>
      {!hidden && (
        <Button
          disabled={items.length === 0}
          component={Link}
          to="/checkout"
          sx={{
            mt: 1.5,
            fontSize: "14px",
            textTransform: "capitalize",
          }}
          variant="contained"
          fullWidth
        >
          Checkout Now
        </Button>
      )}
    </Paper>
  );
}

export default OrderSummary;
