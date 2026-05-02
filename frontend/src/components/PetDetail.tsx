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
    <Paper sx={{ p: { xs: 2.5, md: 4 }, m: { xs: 0, md: 1.5 } }}>
      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <Box
            component="img"
            src={pet.imageUrl}
            alt={pet.name}
            sx={{ width: "100%", aspectRatio: "1 / 1", objectFit: "cover", borderRadius: 3 }}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
            <Typography variant="h3">{pet.name}</Typography>
            <Chip
              label={pet.availability ? "Available for Adoption" : "Already Adopted"}
              sx={{
                fontWeight: 600,
                color: pet.availability ? "#1e3a8a" : "#334155",
                backgroundColor: pet.availability ? "#dbeafe" : "#e2e8f0",
              }}
            />
          </Box>
          <Typography variant="h5" color="text.secondary" gutterBottom sx={{ mb: 3 }}>
            {pet.type} • {pet.breed}
          </Typography>
          <Box
            sx={{
              mt: 2,
              p: 2.5,
              borderRadius: 3,
              background: "linear-gradient(180deg, #eff6ff 0%, #f8fbff 100%)",
              border: "1px solid #dbeafe",
            }}
          >
            <Typography variant="body1" sx={{ mb: 1 }}><strong>Age:</strong> {pet.age} months</Typography>
            <Typography variant="body1"><strong>Sex:</strong> {pet.sex}</Typography>
          </Box>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default PetDetail;
