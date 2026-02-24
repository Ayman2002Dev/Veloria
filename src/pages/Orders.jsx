import {
  Box,
  Button,
  Container,
  Divider,
  Grid,
  IconButton,
  Stack,
  Tooltip,
  Typography,
} from "@mui/material";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import ProductionQuantityLimitsOutlinedIcon from "@mui/icons-material/ProductionQuantityLimitsOutlined";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { deleteOrder } from "../features/orderSlice";
import { toast } from "react-toastify";
import { Link } from "react-router";

function Orders() {
  const dispatch = useDispatch();
  const { orders } = useSelector((state) => state.order);

  const handleDelete = (orderId) => {
    dispatch(deleteOrder(orderId));
    toast.success("Order deleted successfuly");
  };

  useEffect(() => {
    document.title = "Your Orders";
  }, []);
  return (
    <Container maxWidth="xl" component="section" sx={{ mt: 3 }}>
      <Typography
        variant="h5"
        fontWeight={600}
        sx={{ display: orders.length === 0 ? "none" : "block" }}
      >
        Your Orders({orders.length})
      </Typography>
      <Box mt={3}>
        {orders.length === 0 ? (
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
              No Orders Found
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
          <Grid container spacing={2.5}>
            {orders.length > 0 &&
              orders.map((order) => (
                <Grid key={order.orderId} size={{ xs: 12, md: 6 }}>
                  <Box
                    sx={{
                      width: "100%",
                      border: "1px solid",
                      borderRadius: "10px",
                      borderColor: "divider",
                    }}
                  >
                    <Box
                      className="order-header"
                      sx={{
                        width: "100%",
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        backgroundColor: "divider",
                        borderRadius: "10px 10px 0 0",
                        py: 1,
                        px: 2,
                      }}
                    >
                      <Typography component="p" fontWeight={600}>
                        ORDER ID
                      </Typography>
                      <Typography component="p" fontWeight={600}>
                        {order?.orderId}
                      </Typography>
                    </Box>

                    <Box className="order-content" px={2} py={1}>
                      <Stack spacing={1.5}>
                        <Box
                          sx={{
                            width: "100%",
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                          }}
                        >
                          <Typography component="p">Total Items:</Typography>
                          <Typography component="p">
                            {order?.items?.length}
                          </Typography>
                        </Box>

                        <Divider sx={{ my: 0.5 }} />

                        <Box
                          sx={{
                            width: "100%",
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                          }}
                        >
                          <Typography component="p">Shipping Name:</Typography>
                          <Typography component="p">
                            {order?.userInfo?.shipping?.fullName}
                          </Typography>
                        </Box>

                        <Divider sx={{ my: 0.5 }} />

                        <Box
                          sx={{
                            width: "100%",
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                          }}
                        >
                          <Typography component="p">Billing Name:</Typography>
                          <Typography component="p">
                            {order?.userInfo?.billing?.fullName ||
                              order?.userInfo?.shipping?.fullName}
                          </Typography>
                        </Box>

                        <Divider sx={{ my: 0.5 }} />

                        <Box
                          sx={{
                            width: "100%",
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                          }}
                        >
                          <Typography component="p">CreatedAt:</Typography>
                          <Typography component="p">
                            {`${new Date(order.createdAt).toLocaleDateString()}  ${new Date(order.createdAt).toLocaleTimeString()}` ||
                              "date"}
                          </Typography>
                        </Box>

                        <Divider sx={{ my: 0.5 }} />

                        <Box
                          sx={{
                            width: "100%",
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                          }}
                        >
                          <Typography component="p">Payment Method:</Typography>
                          <Typography component="p">
                            {order?.paymentMethod || "Not Found"}
                          </Typography>
                        </Box>

                        <Divider sx={{ my: 0.5 }} />

                        <Box
                          sx={{
                            width: "100%",
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                          }}
                        >
                          <Typography component="p">Status:</Typography>
                          <Typography
                            component="p"
                            sx={{
                              color:
                                order.status === "complete"
                                  ? "success.main"
                                  : "warning.main",
                            }}
                          >
                            {order?.status}
                          </Typography>
                        </Box>

                        <Divider sx={{ my: 0.5 }} />

                        <Box
                          sx={{
                            width: "100%",
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                          }}
                        >
                          <Box>
                            <Tooltip title="View Order">
                              <IconButton
                                component={Link}
                                to={`/orders/view/${order.orderId}`}
                              >
                                <VisibilityOutlinedIcon color="info" />
                              </IconButton>
                            </Tooltip>
                          </Box>
                          <Box>
                            <Tooltip title="Delete Order">
                              <IconButton
                                color="error.main"
                                onClick={() => handleDelete(order.orderId)}
                              >
                                <DeleteOutlineOutlinedIcon color="error" />
                              </IconButton>
                            </Tooltip>
                          </Box>
                        </Box>
                      </Stack>
                    </Box>
                  </Box>
                </Grid>
              ))}
          </Grid>
        )}
      </Box>
    </Container>
  );
}

export default Orders;
