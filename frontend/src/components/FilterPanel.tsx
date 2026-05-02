import React from "react";
import { Box, FormControl, InputLabel, Select, MenuItem, SelectChangeEvent, FormControlLabel, Checkbox } from "@mui/material";

interface FilterPanelProps {
  type: string;
  availability: boolean | null;
  onTypeChange: (type: string) => void;
  onAvailabilityChange: (availability: boolean | null) => void;
}

const FilterPanel: React.FC<FilterPanelProps> = ({ type, availability, onTypeChange, onAvailabilityChange }) => {
  const handleTypeChange = (event: SelectChangeEvent) => {
    onTypeChange(event.target.value as string);
  };

  const handleAvailabilityChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onAvailabilityChange(event.target.checked ? true : null);
  };

  return (
    <Box display="flex" gap={2} alignItems="center" justifyContent="flex-end" flexWrap="wrap">
      <FormControl variant="outlined" sx={{ minWidth: 160 }}>
        <InputLabel>Pet Type</InputLabel>
        <Select
          value={type}
          onChange={handleTypeChange}
          label="Pet Type"
          sx={{ borderRadius: 3, backgroundColor: "#ffffff" }}
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
          px: 1,
          borderRadius: 2,
          backgroundColor: "#eff6ff",
          border: "1px solid #bfdbfe",
        }}
      />
    </Box>
  );
};

export default FilterPanel;
