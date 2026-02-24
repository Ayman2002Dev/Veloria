import { Button, Container, Paper, Typography } from "@mui/material";
import { Link } from "react-router";

function ErrorPage() {
  return (
    <Paper
      elevation={2}
      sx={{
        p: "20px",
        borderRadius: "10px",
        textAlign: "center",
        width: "fit-content",
        m: "15px auto 0",
      }}
    >
      <Typography variant="h5">Something went wrong!</Typography>
      <Button
        variant="contained"
        component={Link}
        to="/"
        sx={{ mt: 2, textTransform: "capitalize" }}
      >
        Back To Home
      </Button>
    </Paper>
  );
}

export default ErrorPage;
