import { Box, Button, Paper, Stack } from "@mui/material";

import CheckoutAdress from "../components/CheckoutAdress";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router";
import { useEffect } from "react";

function Checkout() {
  const navigate = useNavigate();
  const {
    control,
    formState: { isValid },
    handleSubmit,
  } = useForm({
    mode: "onChange",
    defaultValues: {
      fullName: "",
      phone: "",
      email: "",
      company: "",
      address1: "",
      address2: "",
      zip: "",
      country: { code: "EG", name: "Egypt" },
    },
  });
  const onSubmit = (data) => {
    console.log(data);
    navigate("/payment");
  };

  useEffect(() => {
    document.title = "Checout";
  }, []);
  return (
    <Paper elevation={0} component="form" onSubmit={handleSubmit(onSubmit)}>
      <Stack spacing={5}>
        {/* Shipping Address */}
        <CheckoutAdress header="Shipping Address" control={control} />

        {/* Billing Address */}
        <CheckoutAdress header="Billing Address" control={control} />
        <Box
          sx={{
            mt: 4,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: "15px",
            flexDirection: { xs: "column", sm: "row" },
          }}
        >
          <Button
            component={Link}
            to="/cart"
            variant="contained"
            disableElevation
            disableTouchRipple
            disableRipple
            sx={{
              flexGrow: "0.5",
              py: 1.5,
              borderRadius: "10px",
              textTransform: "capitalize",
              fontSize: "15px",
              backgroundColor: "transparent",
              border: "1px solid #c8c8c8",
              transitionDuration: "0.4s",
              color: "mainText.main",
              width: "100%",
              "&:hover": {
                borderColor: "#000",
              },
            }}
          >
            Back To Cart
          </Button>

          <Button
            type="submit"
            disabled={!isValid}
            variant="contained"
            disableFocusRipple
            disableElevation
            sx={{
              flexGrow: "0.5",
              width: "100%",
              py: 1.5,
              borderRadius: "10px",
              textTransform: "capitalize",
              fontSize: "15px",
            }}
          >
            Proceed to Payment
          </Button>
        </Box>
      </Stack>
    </Paper>
  );
}

export default Checkout;
