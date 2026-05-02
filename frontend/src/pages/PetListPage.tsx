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
        sx={{
          p: { xs: 3, md: 4 },
          mb: 4,
          background: "linear-gradient(135deg, #1e3a8a 0%, #2563eb 55%, #3b82f6 100%)",
          color: "#eff6ff",
          border: "none",
        }}
      >
        <Typography variant="h2" align="center" gutterBottom>
          Our Pets
        </Typography>
        <Typography align="center" sx={{ opacity: 0.9 }}>
          Find your perfect companion with smart search and filters.
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
