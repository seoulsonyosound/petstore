import React from "react";
import { Card, CardContent, CardMedia, Typography, CardActionArea, Box, Chip } from "@mui/material";
import { Link } from "react-router-dom";

interface PetCardProps {
  pet: {
    id: string;
    name: string;
    type: string;
    breed: string;
    availability: boolean;
    imageUrl: string;
  };
}

const PetCard: React.FC<PetCardProps> = ({ pet }) => {
  return (
    <Card
      sx={{
        height: "100%",
        transition: "transform 180ms ease, box-shadow 180ms ease",
        "&:hover": {
          transform: "translateY(-4px)",
          boxShadow: "0 16px 32px rgba(30, 64, 175, 0.18)",
        },
      }}
    >
      <CardActionArea component={Link} to={`/pets/${pet.id}`}>
        <CardMedia
          component="img"
          image={pet.imageUrl}
          alt={pet.name}
          sx={{
            aspectRatio: "1 / 1",
            objectFit: "cover",
            filter: pet.availability ? "none" : "grayscale(100%)"
          }}
          onError={(e: any) => {
            e.target.src = "https://via.placeholder.com/800x800?text=No+Image+Available";
          }}
        />
        <CardContent>
          <Box display="flex" justifyContent="space-between" alignItems="center" mb={1}>
            <Typography gutterBottom variant="h5" component="div">
              {pet.name}
            </Typography>
            <Chip
              label={pet.availability ? "Available" : "Adopted"}
              size="small"
              sx={{
                fontWeight: 600,
                color: pet.availability ? "#1e3a8a" : "#334155",
                backgroundColor: pet.availability ? "#dbeafe" : "#e2e8f0",
              }}
            />
          </Box>
          <Typography variant="body2" color="text.secondary">
            {pet.type} • {pet.breed}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default PetCard;
