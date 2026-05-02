import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import PetListPage from "./pages/PetListPage";
import PetDetailPage from "./pages/PetDetailPage";

const theme = createTheme({
  palette: {
    primary: {
      main: "#1e40af", // Blue 800
      light: "#3b82f6", // Blue 500
      dark: "#1e3a8a", // Blue 900
    },
    secondary: {
      main: "#0ea5e9", // Sky 500
      light: "#7dd3fc", // Sky 300
      dark: "#0369a1", // Sky 700
    },
    background: {
      default: "transparent",
      paper: "rgba(255, 255, 255, 0.9)",
    },
    text: {
      primary: "#1e293b", // Slate 800
      secondary: "#475569", // Slate 600
    },
  },
  shape: {
    borderRadius: 12,
  },
  typography: {
    fontFamily: "'Inter', 'Plus Jakarta Sans', sans-serif",
    h2: {
      fontWeight: 800,
      letterSpacing: "-0.025em",
    },
    h3: {
      fontWeight: 700,
      letterSpacing: "-0.025em",
    },
    h5: {
      fontWeight: 700,
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          scrollBehavior: "smooth",
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backdropFilter: "blur(12px)",
          border: "1px solid rgba(255, 255, 255, 0.3)",
          boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          backdropFilter: "blur(12px)",
          border: "1px solid rgba(255, 255, 255, 0.3)",
          boxShadow: "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          fontWeight: 600,
          padding: "8px 20px",
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
