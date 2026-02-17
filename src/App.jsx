import "./App.css";
import { RouterProvider } from "react-router";
import router from "./routes/router";
import { ThemeProvider } from "@emotion/react";
import { getTheme } from "./styles/theme";
import { useSelector } from "react-redux";
import { CssBaseline } from "@mui/material";
import { useMemo } from "react";

function App() {
  const mode = useSelector((state) => state.theme.mode);
  const theme = getTheme(mode);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
