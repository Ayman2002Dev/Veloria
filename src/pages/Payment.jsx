import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  Paper,
  Radio,
  TextField,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { Link } from "react-router";
import { toast } from "react-toastify";

function Payment() {
  const [expanded, setExpanded] = useState("panel1");
  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const { control: cardControl, handleSubmit: handleCardSubmit } = useForm({
    mode: "onChange",
    defaultValues: {
      cardNumber: "",
      expDate: "",
      cardName: "",
      cvv: "",
    },
  });

  const { control: paypalControl, handleSubmit: handlePaypalSubmit } = useForm({
    mode: "onChange",
    defaultValues: {
      paypalEmail: "",
    },
  });

  const onSubmit = (data) => {
    console.log(data);
    toast.success("Payment completed successfully.");
  };

  useEffect(() => {
    document.title = "Payment";
  }, []);
  return (
    <Paper elevation={0}>
      <Accordion
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
        sx={{
          backgroundColor: "secondary.main",
          "&.MuiPaper-root": {
            m: 0,
            borderRadius: "12px 12px 0 0",
          },
          "&.MuiPaper-root::before": {
            opacity: 1,
          },
        }}
      >
        <AccordionSummary
          expandIcon={<Radio checked={expanded === "panel1"} />}
          sx={{
            flexDirection: "row-reverse",
          }}
        >
          <Typography>Pay with credit card</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Box
            component="form"
            onSubmit={handleCardSubmit(onSubmit)}
            sx={{
              display: "grid",
              gridTemplateColumns: { xs: "1f", sm: "1fr 1fr" },
              gap: 2,
            }}
          >
            <Controller
              name="cardNumber"
              control={cardControl}
              rules={{
                required: "Card number is Required",
                pattern: {
                  value: /^[0-9]{14}$/,
                  message:
                    "Card number must be equal 14 digits and numbers only",
                },
              }}
              render={({ field, fieldState: { error } }) => (
                <TextField
                  {...field}
                  slotProps={{
                    inputLabel: {
                      sx: { fontSize: "14px" },
                    },
                  }}
                  label="Card Number"
                  error={!!error}
                  helperText={error?.message}
                />
              )}
            />

            <Controller
              name="expDate"
              control={cardControl}
              rules={{
                required: "Expire Date is Required",
                pattern: {
                  value: /^(0[1-9]|1[0-2])\s?\/\s?[0-9]{2}$/,
                  message: "Enter Vaild Date",
                },
              }}
              render={({ field, fieldState: { error } }) => (
                <TextField
                  {...field}
                  placeholder="MM / YY"
                  slotProps={{
                    inputLabel: {
                      sx: { fontSize: "14px" },
                    },
                  }}
                  label="Exp Date"
                  error={!!error}
                  helperText={error?.message}
                />
              )}
            />

            <Controller
              name="cardName"
              control={cardControl}
              rules={{
                required: "Name is Required",
              }}
              render={({ field, fieldState: { error } }) => (
                <TextField
                  {...field}
                  slotProps={{
                    inputLabel: {
                      sx: { fontSize: "14px" },
                    },
                  }}
                  label="Name on Card"
                  error={!!error}
                  helperText={error?.message}
                />
              )}
            />

            <Controller
              name="cvv"
              control={cardControl}
              rules={{
                required: "Cvv is Required",
                pattern: {
                  value: /^[0-9]{3}$/,
                  message: "CVV number must be equal 3 digits and numbers only",
                },
              }}
              render={({ field, fieldState: { error } }) => (
                <TextField
                  {...field}
                  slotProps={{
                    inputLabel: {
                      sx: { fontSize: "14px" },
                    },
                  }}
                  label="CVV"
                  error={!!error}
                  helperText={error?.message}
                />
              )}
            />
            <Button
              type="submit"
              variant="contained"
              sx={{ textTransform: "capitalize" }}
            >
              Submit
            </Button>
          </Box>
        </AccordionDetails>
      </Accordion>

      <Accordion
        expanded={expanded === "panel2"}
        onChange={handleChange("panel2")}
        sx={{
          bgcolor: "secondary.main",
          "&.MuiPaper-root": {
            m: 0,
          },
          "&.MuiPaper-root::before": {
            opacity: 1,
          },
        }}
      >
        <AccordionSummary
          expandIcon={<Radio checked={expanded === "panel2"} />}
          sx={{
            flexDirection: "row-reverse",
          }}
        >
          <Typography>Pay with Paypal</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Box
            component="form"
            onSubmit={handlePaypalSubmit(onSubmit)}
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              gap: "15px",
              flexDirection: { xs: "column", sm: "row" },
            }}
          >
            <Controller
              name="paypalEmail"
              control={paypalControl}
              rules={{
                required: "Paypal email is Required",
                pattern: {
                  value: /^\S+@\S+\.\S+$/,
                  message: "Enter a valid email address",
                },
              }}
              render={({ field, fieldState: { error } }) => (
                <TextField
                  {...field}
                  size="small"
                  sx={{
                    width: "100%",
                  }}
                  slotProps={{
                    inputLabel: {
                      sx: { fontSize: "14px" },
                    },
                  }}
                  label="Paypal Email"
                  error={!!error}
                  helperText={error?.message}
                />
              )}
            />

            <Button
              type="submit"
              variant="contained"
              sx={{
                textTransform: "capitalize",
                width: { xs: "100%", sm: "fit-content" },
              }}
            >
              Submit
            </Button>
          </Box>
        </AccordionDetails>
      </Accordion>

      <Accordion
        expanded={expanded === "panel3"}
        onChange={handleChange("panel3")}
        sx={{
          bgcolor: "secondary.main",
          "&.MuiPaper-root": {
            m: 0,
            borderRadius: "0 0 12px 12px",
          },
          "&.MuiPaper-root::before": {
            opacity: 1,
          },
        }}
      >
        <AccordionSummary
          expandIcon={<Radio checked={expanded === "panel3"} />}
          sx={{
            flexDirection: "row-reverse",
          }}
        >
          <Typography>Cash On Delivery</Typography>
        </AccordionSummary>
      </Accordion>
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
          to="/checkout"
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
          Back To Checkout
        </Button>

        <Button
          disabled={expanded !== "panel3"}
          onClick={() => toast.success("Payment completed successfully.")}
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
          Place Order
        </Button>
      </Box>
    </Paper>
  );
}

export default Payment;
