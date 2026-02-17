import {
  Box,
  CircularProgress,
  Container,
  ImageListItem,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Modal,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";
import useDebounceSearch from "../hooks/useDebounceSearch";
import { Link } from "react-router";

function SearchResults({ openSearch, setOpenSearch }) {
  const [query, setQuery] = useState("");
  const { results, loading } = useDebounceSearch({ query, delay: 500 });

  const handleChange = (event) => {
    setQuery(event.target.value);
  };
  return (
    <Container maxWidth="xl">
      <Modal
        open={openSearch}
        onClose={() => {
          setOpenSearch(false);
        }}
        sx={{
          display: "flex",
          p: 1,
          top: "80px",
          alignItems: "flex-start",
          justifyContent: "center",
        }}
      >
        <Box
          sx={(theme) => ({
            position: "relative",
            width: { xs: "100%", md: "60%" },
            bgcolor: "#fff",
            border: "none",
            boxShadow: theme.shadows[5],
            borderRadius: "10px",
            px: 3,
            py: 2,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "flex-s",
          })}
        >
          <Box>
            <TextField
              type="search"
              placeholder="Searching For..."
              autoFocus
              sx={{
                width: "100%",
                backgroundColor: "#fafafa",
                borderRadius: "5px",
                "& .MuiOutlinedInput-root": {
                  borderRadius: "5px",
                  "& fieldset": {
                    border: "none",
                  },
                  "&:hover fieldset": {
                    border: "1px solid",
                  },
                  "&.Mui-focused fieldset": {
                    border: "2px solid",
                  },
                },
                "& .MuiOutlinedInput-input": {
                  py: "9px",
                  pr: 0,
                  color: (theme) => theme.palette.primary.main,
                  "&::placeholder": {
                    color: (theme) => theme.palette.primary.main,
                    fontSize: 14,
                    opacity: 1,
                  },
                },
              }}
              onChange={(e) => {
                handleChange(e);
              }}
            />
          </Box>
          {loading ? (
            <Box mt={2} sx={{ alignSelf: "center" }}>
              <CircularProgress sx={{ color: "#1f2937" }} />
            </Box>
          ) : (
            <Box
              className="results"
              sx={{
                mt: 2,
                height: "fit-content",
                maxHeight: {
                  xs: "calc(100vh - 300px)",
                  md: "calc(100vh - 230px)",
                },
                overflow: "auto",
                "&::-webkit-scrollbar": {
                  width: "3px",
                },
                "&::-webkit-scrollbar-track": {
                  background: "#f1f1f1",
                  borderRadius: "10px",
                },
                "&::-webkit-scrollbar-thumb": {
                  background: "#888",
                  borderRadius: "10px",
                },
                "&::-webkit-scrollbar-thumb:hover": {
                  background: "#555",
                },
              }}
            >
              {results.length > 0 ? (
                <Stack spacing={1}>
                  {results.map((product) => (
                    <Typography
                      onClick={() => {
                        setOpenSearch(false);
                      }}
                      key={product.id}
                      component={Link}
                      to={`/products/${product.id}`}
                      sx={{
                        textDecoration: "none",
                        color: "#1f2937",
                        p: 0.5,
                        "&:hover": {
                          backgroundColor: "#f1f1f179",
                        },
                      }}
                    >
                      {product.title}
                    </Typography>
                  ))}
                </Stack>
              ) : (
                <Typography sx={{ color: "#1f2937" }}>
                  No Results found for "{query}"
                </Typography>
              )}
            </Box>
          )}
        </Box>
      </Modal>
    </Container>
  );
}

export default SearchResults;
