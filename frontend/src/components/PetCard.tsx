import React from "react";
import { Card, CardContent, CardMedia, Typography, CardActionArea, Box, Chip, IconButton, Tooltip } from "@mui/material";
import { Link } from "react-router-dom";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { Pet } from "../services/petService";

interface PetCardProps {
  pet: Pet;
  onEdit: (pet: Pet) => void;
  onDelete: (id: string) => void;
}

const PetCard: React.FC<PetCardProps> = ({ pet, onEdit, onDelete }) => {
  return (
    <Card
      sx={{
        height: "100%",
        position: "relative",
        transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
        "&:hover": {
          transform: "translateY(-8px)",
          boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)",
          borderColor: "primary.light",
          "& .action-buttons": {
            opacity: 1,
          },
        },
      }}
    >
      <Box
        className="action-buttons"
        sx={{
          position: "absolute",
          top: 8,
          right: 8,
          zIndex: 2,
          opacity: 0,
          transition: "opacity 0.2s",
          display: "flex",
          gap: 1,
          backgroundColor: "rgba(255, 255, 255, 0.8)",
          borderRadius: 2,
          p: 0.5,
          backdropFilter: "blur(4px)",
        }}
      >
        <Tooltip title="Edit">
          <IconButton
            size="small"
            color="primary"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              onEdit(pet);
            }}
          >
            <EditIcon fontSize="small" />
          </IconButton>
        </Tooltip>
        <Tooltip title="Delete">
          <IconButton
            size="small"
            color="error"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              if (pet.id) onDelete(pet.id);
            }}
          >
            <DeleteIcon fontSize="small" />
          </IconButton>
        </Tooltip>
      </Box>

      <CardActionArea component={Link} to={`/pets/${pet.id}`}>
        <CardMedia
          component="img"
          image={pet.imageUrl}
          alt={pet.name}
          sx={{
            aspectRatio: "16 / 10",
            objectFit: "cover",
            filter: pet.availability ? "none" : "grayscale(100%) brightness(0.8)"
          }}
          onError={(e: any) => {
            e.target.src = "https://via.placeholder.com/800x800?text=No+Image+Available";
          }}
        />
        <CardContent sx={{ p: 3 }}>
          <Box display="flex" justifyContent="space-between" alignItems="center" mb={1.5}>
            <Typography variant="h5" component="div" sx={{ color: "primary.dark" }}>
              {pet.name}
            </Typography>
            <Chip
              label={pet.availability ? "Available" : "Adopted"}
              size="small"
              sx={{
                fontWeight: 700,
                fontSize: "0.7rem",
                textTransform: "uppercase",
                letterSpacing: "0.025em",
                color: pet.availability ? "#ffffff" : "#475569",
                backgroundColor: pet.availability ? "primary.main" : "#e2e8f0",
              }}
            />
          </Box>
          <Typography variant="body2" color="text.secondary" sx={{ fontWeight: 500 }}>
            {pet.type} • {pet.breed}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default PetCard;
