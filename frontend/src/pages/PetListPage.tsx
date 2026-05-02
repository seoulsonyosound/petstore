import React, { useEffect, useState, useCallback } from "react";
import { Box, Grid, Pagination, Container, Typography, Paper } from "@mui/material";
import apiClient from "../services/apiClient";
import PetCard from "../components/PetCard";
import SearchBar from "../components/SearchBar";
import FilterPanel from "../components/FilterPanel";
import LoadingSkeleton from "../components/LoadingSkeleton";

const PetListPage: React.FC = () => {
  const [pets, setPets] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [search, setSearch] = useState("");
  const [type, setType] = useState("");
  const [availability, setAvailability] = useState<boolean | null>(null);

  const fetchPets = useCallback(async () => {
    setLoading(true);
    try {
      const params: any = {
        page,
        size: 20,
        sort: "name,asc"
      };
      if (search) params.search = search;
      if (type) params.type = type;
      if (availability !== null) params.availability = availability;

      const response = await apiClient.get("/pets", { params });
      setPets(response.data.content);
      setTotalPages(response.data.totalPages);
    } catch (error) {
      console.error("Error fetching pets", error);
    } finally {
      setLoading(false);
    }
  }, [page, search, type, availability]);

  useEffect(() => {
    fetchPets();
  }, [fetchPets]);

  const handlePageChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value - 1);
  };

  const handleSearch = (value: string) => {
    setSearch(value);
    setPage(0);
  };

  const handleTypeChange = (value: string) => {
    setType(value);
    setPage(0);
  };

  const handleAvailabilityChange = (value: boolean | null) => {
    setAvailability(value);
    setPage(0);
  };

  return (
    <Container maxWidth="lg" sx={{ mt: 5, mb: 6 }}>
      <Paper
        elevation={0}
        sx={{
          p: { xs: 4, md: 6 },
          mb: 5,
          background: "rgba(30, 58, 138, 0.85)",
          backdropFilter: "blur(8px)",
          color: "#ffffff",
          borderRadius: 4,
          border: "1px solid rgba(255, 255, 255, 0.1)",
          boxShadow: "0 20px 40px rgba(0, 0, 0, 0.1)",
        }}
      >
        <Typography 
          variant="h2" 
          align="center" 
          sx={{ 
            fontWeight: 800,
            textTransform: "uppercase",
            letterSpacing: "0.05em",
            fontSize: { xs: "2.5rem", md: "3.5rem" }
          }}
        >
          Our Pets
        </Typography>
      </Paper>

      <Paper sx={{ p: { xs: 2, md: 3 }, mb: 4 }}>
        <Grid container spacing={2} alignItems="center">
          <Grid item xs={12} md={6}>
            <SearchBar onSearch={handleSearch} />
          </Grid>
          <Grid item xs={12} md={6}>
            <FilterPanel 
              type={type} 
              availability={availability} 
              onTypeChange={handleTypeChange} 
              onAvailabilityChange={handleAvailabilityChange} 
            />
          </Grid>
        </Grid>
      </Paper>

      {loading ? (
        <LoadingSkeleton />
      ) : (
        <Grid container spacing={3}>
          {pets.map((pet) => (
            <Grid item key={pet.id} xs={12} sm={6} md={4}>
              <PetCard pet={pet} />
            </Grid>
          ))}
          {pets.length === 0 && (
            <Grid item xs={12}>
              <Paper sx={{ p: 4, textAlign: "center" }}>
                <Typography variant="h6" color="text.secondary">
                  No pets found matching your criteria.
                </Typography>
              </Paper>
            </Grid>
          )}
        </Grid>
      )}
      
      {!loading && totalPages > 1 && (
        <Box display="flex" justifyContent="center" mt={4} mb={4}>
          <Pagination 
            count={totalPages} 
            page={page + 1} 
            onChange={handlePageChange} 
            color="primary"
            shape="rounded"
          />
        </Box>
      )}
    </Container>
  );
};

export default PetListPage;
