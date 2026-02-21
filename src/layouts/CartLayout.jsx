import { Box, Button, Container, Grid, Paper, Typography } from "@mui/material";

import ProductionQuantityLimitsOutlinedIcon from "@mui/icons-material/ProductionQuantityLimitsOutlined";
import { Link, Outlet, useLocation, useNavigate } from "react-router";
import OrderSummary from "../components/OrderSummary";
import { useSelector } from "react-redux";

function CartLayout() {
  const { items } = useSelector((state) => state.cart);
  return (
    <Container maxWidth="xl" component="section" sx={{ mt: 4 }}>
      <Paper elevation={0}>
        {items.length === 0 ? (
          <Box textAlign="center" py={10}>
            <ProductionQuantityLimitsOutlinedIcon
              fontSize="large"
              sx={{
                width: 90,
                height: 90,
                p: 2.5,
                borderRadius: "10px",
                mb: 3,
                bgcolor: "#f5f5f5",
                color: "#9ca3af",
              }}
            />
            <Typography
              variant="h6"
              fontSize={24}
              fontWeight={600}
              color="mainText.main"
            >
              Your cart is empty
            </Typography>
            <Typography
              variant="subtitle1"
              fontWeight={400}
              mb={3}
              sx={{
                color: (theme) =>
                  theme.palette.mode == "light" ? "#4b5563" : "#fff",
              }}
            >
              Looks like you haven't added anything to your cart yet.
            </Typography>
            <Button variant="contained" component={Link} to="/products">
              Start Shopping
            </Button>
          </Box>
        ) : (
          <Grid container spacing={2}>
            <Grid size={{ xs: 12, md: 8 }}>
              <Outlet />
            </Grid>

            {/* Right Sidebar | Order Summary */}
            <Grid size={{ xs: 12, md: 4 }}>
              <OrderSummary />
            </Grid>
          </Grid>
        )}
      </Paper>
    </Container>
  );
}

export default CartLayout;
