import React, { useEffect, useState } from "react";
import { useParams, Link as RouterLink } from "react-router-dom";
import { Container, Button, Box, Skeleton } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import apiClient from "../services/apiClient";
import PetDetail from "../components/PetDetail";

const PetDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [pet, setPet] = useState<any>(null);

  useEffect(() => {
    const fetchPet = async () => {
      try {
        const response = await apiClient.get(`/pets/${id}`);
        setPet(response.data);
      } catch (error) {
        console.error("Error fetching pet details", error);
      }
    };
    fetchPet();
  }, [id]);

  if (!pet) {
    return (
      <Container maxWidth="md" sx={{ mt: 5 }}>
        <Skeleton variant="rounded" height={420} />
      </Container>
    );
  }

  return (
    <Container maxWidth="md" sx={{ mt: 5, mb: 6 }}>
      <Box mb={2}>
        <Button variant="contained" startIcon={<ArrowBackIcon />} component={RouterLink} to="/">
          Back to List
        </Button>
      </Box>
      <PetDetail pet={pet} />
    </Container>
  );
};

export default PetDetailPage;
