import React from "react";
import { Box, Typography, Paper, Grid, Chip } from "@mui/material";

interface PetDetailProps {
  pet: {
    name: string;
    type: string;
    breed: string;
    age: number;
    sex: string;
    availability: boolean;
    imageUrl: string;
  };
}

const PetDetail: React.FC<PetDetailProps> = ({ pet }) => {
  return (
    <Paper sx={{ p: { xs: 3, md: 5 }, m: { xs: 0, md: 1.5 }, borderRadius: 4 }}>
      <Grid container spacing={5}>
        <Grid item xs={12} md={6}>
          <Box
            component="img"
            src={pet.imageUrl}
            alt={pet.name}
            sx={{ 
              width: "100%", 
              aspectRatio: "1 / 1", 
              objectFit: "cover", 
              borderRadius: 4,
              boxShadow: "0 10px 15px -3px rgb(0 0 0 / 0.1)",
              filter: pet.availability ? "none" : "grayscale(100%) brightness(0.8)"
            }}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <Box display="flex" justifyContent="space-between" alignItems="center" mb={2.5} flexWrap="wrap" gap={2}>
            <Typography variant="h3" sx={{ color: "primary.dark" }}>{pet.name}</Typography>
            <Chip
              label={pet.availability ? "Available for Adoption" : "Already Adopted"}
              sx={{
                fontWeight: 700,
                fontSize: "0.75rem",
                textTransform: "uppercase",
                letterSpacing: "0.025em",
                color: pet.availability ? "#ffffff" : "#475569",
                backgroundColor: pet.availability ? "primary.main" : "#e2e8f0",
              }}
            />
          </Box>
          <Typography variant="h5" color="text.secondary" gutterBottom sx={{ mb: 4, fontWeight: 500 }}>
            {pet.type} • {pet.breed}
          </Typography>
          <Box
            sx={{
              mt: 2,
              p: 3,
              borderRadius: 4,
              background: "rgba(30, 64, 175, 0.04)",
              border: "1px solid rgba(30, 64, 175, 0.1)",
            }}
          >
            <Typography variant="body1" sx={{ mb: 1.5, display: "flex", justifyContent: "space-between" }}>
              <span style={{ opacity: 0.7 }}>Age</span> 
              <strong>{pet.age} months</strong>
            </Typography>
            <Typography variant="body1" sx={{ display: "flex", justifyContent: "space-between" }}>
              <span style={{ opacity: 0.7 }}>Sex</span> 
              <strong>{pet.sex}</strong>
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default PetDetail;
