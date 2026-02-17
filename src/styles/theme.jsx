import { createTheme } from "@mui/material";

export const getTheme = (mode) =>
  createTheme({
    palette: {
      mode,
      ...(mode === "light"
        ? {
            primary: {
              main: "#1f2937",
            },
            secondary: {
              main: "#fafafa",
            },
            mainText: {
              main: "#1f2937",
            },
          }
        : {
            primary: {
              main: "#14181b",
            },
            secondary: {
              main: "#14181b",
            },
            mainText: {
              main: "#fff",
            },
          }),
      textWhite: {
        main: "#fff",
      },
    },
    typography: {
      fontFamily: '"Geist", "Roboto", "Arial", sans-serif',
    },
  });
