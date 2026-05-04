import React, { useEffect, useState } from "react";
import { useParams, Link as RouterLink, useNavigate } from "react-router-dom";
import { Container, Button, Box, Skeleton, Stack } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import petService, { Pet } from "../services/petService";
import PetDetail from "../components/PetDetail";
import PetForm from "../components/PetForm";

const PetDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [pet, setPet] = useState<Pet | null>(null);
  const [formOpen, setFormOpen] = useState(false);

  const fetchPet = async () => {
    try {
      if (id) {
        const response = await petService.getPetById(id);
        setPet(response.data);
      }
    } catch (error) {
      console.error("Error fetching pet details", error);
    }
  };

  useEffect(() => {
    fetchPet();
  }, [id]);

  const handleEdit = () => {
    setFormOpen(true);
  };

  const handleDelete = async () => {
    if (window.confirm("Are you sure you want to delete this pet?")) {
      try {
        if (id) {
          await petService.deletePet(id);
          navigate("/");
        }
      } catch (error) {
        console.error("Error deleting pet", error);
        alert("Failed to delete pet");
      }
    }
  };

  const handleFormSubmit = async (petData: Pet) => {
    try {
      if (id) {
        await petService.updatePet(id, petData);
        setFormOpen(false);
        fetchPet();
      }
    } catch (error) {
      console.error("Error updating pet", error);
      alert("Failed to update pet");
    }
  };

  if (!pet) {
    return (
      <Container maxWidth="md" sx={{ mt: 5 }}>
        <Skeleton variant="rounded" height={420} />
      </Container>
    );
  }

  return (
    <Container maxWidth="md" sx={{ mt: 5, mb: 6 }}>
      <Box mb={2} display="flex" justifyContent="space-between" alignItems="center">
        <Button variant="contained" startIcon={<ArrowBackIcon />} component={RouterLink} to="/">
          Back to List
        </Button>
        <Stack direction="row" spacing={1}>
          <Button variant="outlined" color="primary" startIcon={<EditIcon />} onClick={handleEdit}>
            Edit
          </Button>
          <Button variant="outlined" color="error" startIcon={<DeleteIcon />} onClick={handleDelete}>
            Delete
          </Button>
        </Stack>
      </Box>
      <PetDetail pet={pet} />
      <PetForm
        open={formOpen}
        onClose={() => setFormOpen(false)}
        onSubmit={handleFormSubmit}
        initialData={pet}
        title="Edit Pet"
      />
    </Container>
  );
};

export default PetDetailPage;
