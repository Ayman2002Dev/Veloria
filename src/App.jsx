import "./App.css";
import { RouterProvider } from "react-router";
import router from "./routes/router";
import { ThemeProvider } from "@emotion/react";
import { getTheme } from "./styles/theme";
import { useSelector } from "react-redux";
import { CssBaseline } from "@mui/material";
import { ToastContainer } from "react-toastify";

function App() {
  const mode = useSelector((state) => state.theme.mode);
  const theme = getTheme(mode);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
