import React from "react";
import { Box, FormControl, InputLabel, Select, MenuItem, SelectChangeEvent } from "@mui/material";

interface FilterPanelProps {
  type: string;
  availability: boolean | null;
  sort: string;
  onTypeChange: (type: string) => void;
  onAvailabilityChange: (availability: boolean | null) => void;
  onSortChange: (sort: string) => void;
}

const FilterPanel: React.FC<FilterPanelProps> = ({ 
  type, 
  availability, 
  sort,
  onTypeChange, 
  onAvailabilityChange,
  onSortChange 
}) => {
  const handleTypeChange = (event: SelectChangeEvent) => {
    onTypeChange(event.target.value as string);
  };

  const handleSortChange = (event: SelectChangeEvent) => {
    onSortChange(event.target.value as string);
  };

  const handleAvailabilityChange = (event: SelectChangeEvent) => {
    const value = event.target.value;
    if (value === "all") {
      onAvailabilityChange(null);
    } else if (value === "available") {
      onAvailabilityChange(true);
    } else if (value === "adopted") {
      onAvailabilityChange(false);
    }
  };

  const getAvailabilityValue = () => {
    if (availability === null) return "all";
    return availability ? "available" : "adopted";
  };

  return (
    <Box display="flex" gap={2} alignItems="center" justifyContent="flex-end" flexWrap="wrap">
      <FormControl variant="outlined" sx={{ minWidth: 150 }}>
        <InputLabel>Status</InputLabel>
        <Select
          value={getAvailabilityValue()}
          onChange={handleAvailabilityChange}
          label="Status"
          sx={{ 
            borderRadius: 4, 
            backgroundColor: "rgba(255, 255, 255, 0.6)",
            "&:hover": { backgroundColor: "rgba(255, 255, 255, 0.9)" },
            "&.Mui-focused": { backgroundColor: "#ffffff" }
          }}
        >
          <MenuItem value="all">All Pets</MenuItem>
          <MenuItem value="available">Available</MenuItem>
          <MenuItem value="adopted">Adopted</MenuItem>
        </Select>
      </FormControl>
      <FormControl variant="outlined" sx={{ minWidth: 150 }}>
        <InputLabel>Pet Type</InputLabel>
        <Select
          value={type}
          onChange={handleTypeChange}
          label="Pet Type"
          sx={{ 
            borderRadius: 4, 
            backgroundColor: "rgba(255, 255, 255, 0.6)",
            "&:hover": { backgroundColor: "rgba(255, 255, 255, 0.9)" },
            "&.Mui-focused": { backgroundColor: "#ffffff" }
          }}
        >
          <MenuItem value=""><em>All Types</em></MenuItem>
          <MenuItem value="DOG">Dog</MenuItem>
          <MenuItem value="CAT">Cat</MenuItem>
          <MenuItem value="BIRD">Bird</MenuItem>
          <MenuItem value="FISH">Fish</MenuItem>
        </Select>
      </FormControl>
      <FormControl variant="outlined" sx={{ minWidth: 150 }}>
        <InputLabel>Sort By</InputLabel>
        <Select
          value={sort}
          onChange={handleSortChange}
          label="Sort By"
          sx={{ 
            borderRadius: 4, 
            backgroundColor: "rgba(255, 255, 255, 0.6)",
            "&:hover": { backgroundColor: "rgba(255, 255, 255, 0.9)" },
            "&.Mui-focused": { backgroundColor: "#ffffff" }
          }}
        >
          <MenuItem value="name,asc">Name (A-Z)</MenuItem>
          <MenuItem value="name,desc">Name (Z-A)</MenuItem>
          <MenuItem value="age,asc">Age (Youngest)</MenuItem>
          <MenuItem value="age,desc">Age (Oldest)</MenuItem>
          <MenuItem value="type,asc">Type</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};

export default FilterPanel;
