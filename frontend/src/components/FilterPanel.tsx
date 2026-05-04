import React from "react";
import { Box, FormControl, InputLabel, Select, MenuItem, SelectChangeEvent, FormControlLabel, Checkbox } from "@mui/material";

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

  const handleAvailabilityChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onAvailabilityChange(event.target.checked ? true : null);
  };

  return (
    <Box display="flex" gap={2} alignItems="center" justifyContent="flex-end" flexWrap="wrap">
      <FormControl variant="outlined" sx={{ minWidth: 150 }}>
        <InputLabel>Sort By</InputLabel>
        <Select
          value={sort}
          onChange={handleSortChange}
          label="Sort By"
          sx={{ borderRadius: 4 }}
        >
          <MenuItem value="name,asc">Name (A-Z)</MenuItem>
          <MenuItem value="name,desc">Name (Z-A)</MenuItem>
          <MenuItem value="age,asc">Age (Youngest)</MenuItem>
          <MenuItem value="age,desc">Age (Oldest)</MenuItem>
          <MenuItem value="type,asc">Type</MenuItem>
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
          <MenuItem value=""><em>All</em></MenuItem>
          <MenuItem value="DOG">Dog</MenuItem>
          <MenuItem value="CAT">Cat</MenuItem>
          <MenuItem value="BIRD">Bird</MenuItem>
          <MenuItem value="FISH">Fish</MenuItem>
        </Select>
      </FormControl>
      <FormControlLabel
        control={
          <Checkbox
            checked={availability === true}
            onChange={handleAvailabilityChange}
            color="primary"
          />
        }
        label="Available Only"
        sx={{
          m: 0,
          px: 2,
          py: 0.5,
          borderRadius: 4,
          backgroundColor: "rgba(239, 246, 255, 0.6)",
          border: "1px solid rgba(191, 219, 254, 0.5)",
          backdropFilter: "blur(4px)",
          transition: "all 0.2s ease",
          "&:hover": {
            backgroundColor: "rgba(219, 234, 254, 0.8)",
            borderColor: "primary.light",
          }
        }}
      />
    </Box>
  );
};

export default FilterPanel;
