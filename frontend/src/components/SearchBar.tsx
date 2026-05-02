import React, { useState, useEffect } from "react";
import { TextField, InputAdornment } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

interface SearchBarProps {
  onSearch: (value: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [value, setValue] = useState("");

  useEffect(() => {
    const handler = setTimeout(() => {
      onSearch(value);
    }, 300);

    return () => {
      clearTimeout(handler);
    };
  }, [value, onSearch]);

  return (
    <TextField
      fullWidth
      variant="outlined"
      placeholder="Search by name or breed..."
      value={value}
      onChange={(e) => setValue(e.target.value)}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <SearchIcon sx={{ color: "primary.main" }} />
          </InputAdornment>
        ),
      }}
      sx={{
        mb: 1,
        "& .MuiOutlinedInput-root": {
          borderRadius: 4,
          backgroundColor: "rgba(255, 255, 255, 0.6)",
          transition: "all 0.2s ease",
          "&:hover": {
            backgroundColor: "rgba(255, 255, 255, 0.9)",
          },
          "&.Mui-focused": {
            backgroundColor: "#ffffff",
            boxShadow: "0 0 0 4px rgba(30, 64, 175, 0.1)",
          }
        },
      }}
    />
  );
};

export default SearchBar;
