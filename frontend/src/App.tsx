import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import PetListPage from "./pages/PetListPage";
import PetDetailPage from "./pages/PetDetailPage";

const theme = createTheme({
  palette: {
    primary: {
      main: "#1d4ed8",
      light: "#3b82f6",
      dark: "#1e3a8a",
    },
    secondary: {
      main: "#60a5fa",
      light: "#93c5fd",
      dark: "#2563eb",
    },
    background: {
      default: "#f5f9ff",
      paper: "#ffffff",
    },
    text: {
      primary: "#0f172a",
      secondary: "#334155",
    },
  },
  shape: {
    borderRadius: 16,
  },
  typography: {
    fontFamily: "'Inter', 'Segoe UI', 'Roboto', sans-serif",
    h2: {
      fontWeight: 700,
      letterSpacing: "-0.02em",
    },
    h3: {
      fontWeight: 700,
      letterSpacing: "-0.02em",
    },
  },
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          border: "1px solid #dbeafe",
          boxShadow: "0 10px 30px rgba(30, 64, 175, 0.08)",
          backgroundImage: "none",
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          border: "1px solid #dbeafe",
          boxShadow: "0 8px 24px rgba(30, 64, 175, 0.08)",
          backgroundImage: "none",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        containedPrimary: {
          boxShadow: "none",
        },
      },
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Routes>
          <Route path="/" element={<PetListPage />} />
          <Route path="/pets/:id" element={<PetDetailPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
