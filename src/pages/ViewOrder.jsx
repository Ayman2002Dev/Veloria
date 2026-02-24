import {
  Box,
  Button,
  Container,
  Divider,
  Grid,
  Paper,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { confirmOrder } from "../features/orderSlice";
import { toast } from "react-toastify";

function ViewOrder() {
  const dispatch = useDispatch();
  const { orderId } = useParams();
  const shippingCost = 20;
  const { orders } = useSelector((state) => state.order);
  const order = orders.find((order) => order.orderId === orderId);
  const { items, coupon } = order;
  const { shipping, billing, billingSameAsShipping } = order.userInfo;

  const subTotal = items.reduce((total, item) => total + item.totalPrice, 0);

  const getDiscount = () => {
    if (coupon?.couponCode) {
      return (subTotal * coupon.discount) / 100;
    }
    return 0;
  };

  const discount = getDiscount();

  const grandTotal = subTotal - discount + shippingCost;

  const handleConfirm = () => {
    dispatch(confirmOrder(order?.orderId));
    toast.success("Order confirmed successfully");
  };

  useEffect(() => {
    document.title = "View Order";
  }, []);
  return (
    <Container maxWidth="xl" sx={{ mt: 3 }}>
      <Box sx={{ width: "fit-content", m: "0 auto", textAlign: "center" }}>
        <Box>
          <Typography variant="h5" component="p" fontWeight={600}>
            Order Confirmation
          </Typography>
          <Typography variant="subtitle1" component="p" fontWeight={500}>
            Thank you for your purchase!
          </Typography>
        </Box>
        <Divider sx={{ m: 0.5 }} />
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: 1.5,
          }}
        >
          <Typography component="p" variant="subtitle2">
            Order ID:
            <Typography
              variant="subtitle2"
              component="span"
              sx={{ ml: 0.5, fontWeight: "600" }}
            >
              {order.orderId || "order Id"}
            </Typography>
          </Typography>
          |
          <Typography component="p" variant="subtitle2">
            CreatedAt:
            <Typography
              variant="subtitle2"
              component="span"
              sx={{ ml: 0.5, fontWeight: "600" }}
            >
              {`${new Date(order.createdAt).toLocaleDateString()}  ${new Date(order.createdAt).toLocaleTimeString()}` ||
                "date"}
            </Typography>
          </Typography>
        </Box>
      </Box>
      <Paper component="section" elevation={0} sx={{ mt: 5 }}>
        <Grid container spacing={2.5}>
          {/* Shipping Address */}
          <Grid size={{ xs: 12, md: 6 }}>
            <Box
              className="shipping-address"
              sx={{
                border: "1px solid ",
                borderColor: "divider",
                borderRadius: "15px",
              }}
            >
              <Typography
                variant="subtitle1"
                fontWeight={600}
                textAlign="center"
                sx={{
                  bgcolor: "divider",
                  borderRadius: "15px 15px 0 0",
                  px: 2,
                  py: 1,
                }}
              >
                Shipping Address
              </Typography>
              <Box p={2}>
                <Stack spacing={1}>
                  <Typography variant="subtitle2">
                    Full Name: {shipping?.fullName || "Full Name"}
                  </Typography>

                  <Typography variant="subtitle2">
                    Address1: {shipping?.address1 || "Address 1"}
                  </Typography>

                  <Typography variant="subtitle2">
                    Address2: {shipping?.address2 || "Address 2"}
                  </Typography>

                  <Typography variant="subtitle2">
                    Phone: {shipping?.phone || "Phone"}
                  </Typography>

                  <Typography variant="subtitle2">
                    Email: {shipping?.email || "Email"}
                  </Typography>

                  <Typography variant="subtitle2">
                    Company: {shipping?.company || "Coumpany"}
                  </Typography>

                  <Typography variant="subtitle2">
                    Country: {shipping?.country?.name || "Country"}
                  </Typography>

                  <Typography variant="subtitle2">
                    Zip Code: {shipping?.zip || "Zip Code"}
                  </Typography>
                </Stack>
              </Box>
            </Box>
          </Grid>
          {/* Billing Address */}
          <Grid size={{ xs: 12, md: 6 }}>
            <Box
              className="billing-address"
              sx={{
                border: "1px solid ",
                borderColor: "divider",
                borderRadius: "15px",
              }}
            >
              <Typography
                variant="subtitle1"
                fontWeight={600}
                textAlign="center"
                sx={{
                  bgcolor: "divider",
                  borderRadius: "15px 15px 0 0",
                  px: 2,
                  py: 1,
                }}
              >
                Billing Address
              </Typography>
              <Box p={2}>
                <Stack spacing={1}>
                  {billingSameAsShipping ? (
                    <>
                      <Typography variant="subtitle2">
                        Full Name: {shipping?.fullName || "Full Name"}
                      </Typography>

                      <Typography variant="subtitle2">
                        Address1: {shipping?.address1 || "Address 1"}
                      </Typography>

                      <Typography variant="subtitle2">
                        Address2: {shipping?.address2 || "Address 2"}
                      </Typography>

                      <Typography variant="subtitle2">
                        Phone: {shipping?.phone || "Phone"}
                      </Typography>

                      <Typography variant="subtitle2">
                        Email: {shipping?.email || "Email"}
                      </Typography>

                      <Typography variant="subtitle2">
                        Company: {shipping?.company || "Coumpany"}
                      </Typography>

                      <Typography variant="subtitle2">
                        Country: {shipping?.country?.name || "Country"}
                      </Typography>
                      <Typography variant="subtitle2">
                        Zip Code: {shipping?.zip || "Zip Code"}
                      </Typography>
                    </>
                  ) : (
                    <>
                      <Typography variant="subtitle2">
                        Full Name: {billing?.fullName || "Full Name"}
                      </Typography>

                      <Typography variant="subtitle2">
                        Address1: {billing?.address1 || "Address 1"}
                      </Typography>

                      <Typography variant="subtitle2">
                        Address2: {billing?.address2 || "Address 2"}
                      </Typography>

                      <Typography variant="subtitle2">
                        Phone: {billing?.phone || "Phone"}
                      </Typography>

                      <Typography variant="subtitle2">
                        Email: {billing?.email || "Email"}
                      </Typography>

                      <Typography variant="subtitle2">
                        Company: {billing?.company || "Coumpany"}
                      </Typography>

                      <Typography variant="subtitle2">
                        Country: {billing?.country?.name || "Country"}
                      </Typography>
                      <Typography variant="subtitle2">
                        Zip Code: {billing?.zip || "Zip Code"}
                      </Typography>
                    </>
                  )}
                </Stack>
              </Box>
            </Box>
          </Grid>
          <Grid size={{ xs: 12 }}>
            <Box
              className="shipping-address"
              sx={{
                border: "1px solid ",
                borderColor: "divider",
                borderRadius: "15px",
              }}
            >
              <Typography
                variant="subtitle1"
                fontWeight={600}
                textAlign="center"
                sx={{
                  bgcolor: "divider",
                  borderRadius: "15px 15px 0 0",
                  px: 2,
                  py: 1,
                }}
              >
                Order Summary
              </Typography>
              <Box p={2}>
                <TableContainer component={Paper}>
                  <Table sx={{ textAlign: "center" }}>
                    <TableHead>
                      <TableRow sx={{ bgcolor: "divider" }}>
                        <TableCell
                          sx={{
                            fontWeight: 600,
                            padding: 1,
                            textAlign: "center",
                          }}
                        >
                          Product
                        </TableCell>
                        <TableCell
                          sx={{
                            fontWeight: 600,
                            padding: 1,
                            textAlign: "center",
                          }}
                        >
                          Price
                        </TableCell>
                        <TableCell
                          sx={{
                            fontWeight: 600,
                            padding: 1,
                            textAlign: "center",
                          }}
                        >
                          Quantity
                        </TableCell>
                        <TableCell
                          sx={{
                            fontWeight: 600,
                            padding: 1,
                            textAlign: "center",
                          }}
                        >
                          Total
                        </TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {items.map((item) => (
                        <TableRow key={item.id}>
                          <TableCell
                            sx={{
                              display: "flex",
                              justifyContent: "flex-start",
                              alignItems: "center",
                              gap: 1.5,
                              p: 0,
                              textAlign: "center",
                            }}
                          >
                            <Box
                              component="img"
                              src={item.thumbnail}
                              width={100}
                              height={100}
                            />
                            <Typography variant="subtitle2" component="span">
                              {item.title}
                            </Typography>
                          </TableCell>
                          <TableCell sx={{ p: 0, textAlign: "center" }}>
                            ${item.price}
                          </TableCell>
                          <TableCell sx={{ p: 0, textAlign: "center" }}>
                            {item.quantity}
                          </TableCell>
                          <TableCell sx={{ p: 0, textAlign: "center" }}>
                            {item.totalPrice}
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              </Box>
              <Box
                className="total"
                sx={{ width: { xs: "100%", sm: "350px" }, ml: "auto", p: 2 }}
              >
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <Typography>Subtotal</Typography>
                  <Typography>${subTotal.toFixed(2)}</Typography>
                </Box>
                <Divider sx={{ m: 0.4 }} />
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <Typography>
                    Coupon Code
                    <Typography
                      variant="subtitle2"
                      component="span"
                      ml={0.5}
                      sx={{ fontWeight: 600 }}
                    >
                      {coupon.couponCode ? coupon.couponCode : ""}
                    </Typography>
                    :
                  </Typography>
                  <Typography>
                    -%{coupon.discount ? coupon.discount : "0"}
                  </Typography>
                </Box>
                <Divider sx={{ m: 0.4 }} />
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <Typography>Discount</Typography>
                  <Typography>-${discount.toFixed(2) || 0}</Typography>
                </Box>
                <Divider sx={{ m: 0.4 }} />
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <Typography>Shipping</Typography>
                  <Typography>${shippingCost}</Typography>
                </Box>
                <Divider sx={{ m: 0.4 }} />
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <Typography>Grand Total: </Typography>
                  <Typography>${grandTotal.toFixed(2)}</Typography>
                </Box>
              </Box>
            </Box>
          </Grid>
        </Grid>
        {order.status === "pending" && (
          <Button
            variant="contained"
            sx={{
              textTransform: "capitalize",
              mt: 2,
              w: "84.48px",
              ml: "auto",
              display: "flex",
            }}
            onClick={handleConfirm}
          >
            Confirm
          </Button>
        )}
      </Paper>
    </Container>
  );
}

export default ViewOrder;
