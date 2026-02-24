import { Box, Button, Container, Stack } from "@mui/material";
import image from "../assets/not-found.svg";
import { Link, useNavigate } from "react-router";

function NotFound() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(-1);
  };
  return (
    <Container
      maxWidth="xl"
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        gap: "30px",
      }}
    >
      <Box
        component="img"
        src={image}
        alt="Not Found Image"
        sx={{ height: "75vh", width: "100vw" }}
      />
      <Box>
        <Stack spacing={2.5} direction={{ xs: "column", md: "row" }}>
          <Button
            variant="contained"
            component={Link}
            onClick={handleClick}
            sx={{
              borderRadius: "10px",
              textTransform: "capitalize",
              fontSize: "15px",
              backgroundColor: "transparent",
              border: "1px solid #c8c8c8",
              transitionDuration: "0.4s",
              color: "mainText.main",
              "&:hover": {
                borderColor: "#000",
                boxShadow: 0,
              },
            }}
            disableElevation
          >
            Go Back
          </Button>
          <Button
            variant="contained"
            component={Link}
            to="/"
            sx={{
              borderRadius: "10px",
              textTransform: "capitalize",
              fontSize: "15px",
            }}
          >
            Back To Home
          </Button>
        </Stack>
      </Box>
    </Container>
  );
}

export default NotFound;
