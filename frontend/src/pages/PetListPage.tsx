import React, { useEffect, useState, useCallback } from "react";
import { Box, Grid, Pagination, Container, Typography, Paper, Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import PetsIcon from "@mui/icons-material/Pets";
import petService, { Pet } from "../services/petService";
import PetCard from "../components/PetCard";
import SearchBar from "../components/SearchBar";
import FilterPanel from "../components/FilterPanel";
import LoadingSkeleton from "../components/LoadingSkeleton";
import PetForm from "../components/PetForm";
import StatsSummary from "../components/StatsSummary";

const PetListPage: React.FC = () => {
  const [pets, setPets] = useState<Pet[]>([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [totalElements, setTotalElements] = useState(0);
  const [search, setSearch] = useState("");
  const [type, setType] = useState("");
  const [availability, setAvailability] = useState<boolean | null>(null);
  const [sort, setSort] = useState("name,asc");

  // Stats
  const [stats, setStats] = useState({ total: 0, available: 0, adopted: 0 });

  // Form state
  const [formOpen, setFormOpen] = useState(false);
  const [selectedPet, setSelectedPet] = useState<Pet | null>(null);

  const fetchStats = useCallback(async () => {
    try {
      const [totalRes, availRes, adoptedRes] = await Promise.all([
        petService.getPets({ size: 1 }),
        petService.getPets({ size: 1, availability: true }),
        petService.getPets({ size: 1, availability: false }),
      ]);
      setStats({
        total: totalRes.data.totalElements,
        available: availRes.data.totalElements,
        adopted: adoptedRes.data.totalElements,
      });
    } catch (error) {
      console.error("Error fetching stats", error);
    }
  }, []);

  const fetchPets = useCallback(async () => {
    setLoading(true);
    try {
      const params: any = {
        page,
        size: 12,
        sort: sort
      };
      if (search) params.search = search;
      if (type) params.type = type;
      if (availability !== null) params.availability = availability;

      const response = await petService.getPets(params);
      setPets(response.data.content);
      setTotalPages(response.data.totalPages);
      setTotalElements(response.data.totalElements);
    } catch (error) {
      console.error("Error fetching pets", error);
    } finally {
      setLoading(false);
    }
  }, [page, search, type, availability, sort]);

  useEffect(() => {
    fetchPets();
  }, [fetchPets]);

  useEffect(() => {
    fetchStats();
  }, [fetchStats]);

  const handlePageChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value - 1);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleSearch = (value: string) => {
    setSearch(value);
    setPage(0);
  };

  const handleTypeChange = (value: string) => {
    setType(value);
    setPage(0);
  };

  const handleSortChange = (value: string) => {
    setSort(value);
    setPage(0);
  };

  const handleAvailabilityChange = (value: boolean | null) => {
    setAvailability(value);
    setPage(0);
  };

  const handleAddPet = () => {
    setSelectedPet(null);
    setFormOpen(true);
  };

  const handleEditPet = (pet: Pet) => {
    setSelectedPet(pet);
    setFormOpen(true);
  };

  const handleDeletePet = async (id: string) => {
    if (window.confirm("Are you sure you want to delete this pet?")) {
      try {
        await petService.deletePet(id);
        fetchPets();
        fetchStats();
      } catch (error) {
        console.error("Error deleting pet", error);
        alert("Failed to delete pet");
      }
    }
  };

  const handleFormSubmit = async (petData: Pet) => {
    try {
      if (selectedPet && selectedPet.id) {
        await petService.updatePet(selectedPet.id, petData);
      } else {
        await petService.createPet(petData);
      }
      setFormOpen(false);
      fetchPets();
      fetchStats();
    } catch (error) {
      console.error("Error saving pet", error);
      alert("Failed to save pet");
    }
  };

  return (
    <Container maxWidth="lg" sx={{ mt: 5, mb: 6 }}>
      {/* Revised Header */}
      <Box 
        sx={{ 
          mb: 6, 
          display: "flex", 
          flexDirection: { xs: "column", md: "row" },
          justifyContent: "space-between", 
          alignItems: { xs: "center", md: "flex-end" },
          gap: 3
        }}
      >
        <Box sx={{ textAlign: { xs: "center", md: "left" } }}>
          <Typography 
            variant="h2" 
            sx={{ 
              fontWeight: 900,
              fontSize: { xs: "2.5rem", md: "3.5rem" },
              background: "linear-gradient(45deg, #1e3a8a 30%, #0ea5e9 90%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              lineHeight: 1.2
            }}
          >
            Pet Management
          </Typography>
          <Typography variant="h6" color="text.secondary" sx={{ fontWeight: 500, mt: 1 }}>
            Manage your inventory and track adoptions effortlessly.
          </Typography>
        </Box>
        <Button
          variant="contained"
          size="large"
          startIcon={<AddIcon />}
          onClick={handleAddPet}
          sx={{
            borderRadius: 3,
            px: 4,
            py: 1.5,
            fontSize: "1.1rem",
            boxShadow: "0 10px 15px -3px rgba(30, 64, 175, 0.3)",
            "&:hover": {
              boxShadow: "0 20px 25px -5px rgba(30, 64, 175, 0.4)",
            }
          }}
        >
          Add New Pet
        </Button>
      </Box>

      {/* Dashboard Stats */}
      <StatsSummary 
        total={stats.total} 
        available={stats.available} 
        adopted={stats.adopted} 
      />

      <Paper 
        sx={{ 
          p: { xs: 2, md: 3 }, 
          mb: 4, 
          borderRadius: 4,
          backgroundColor: "rgba(255, 255, 255, 0.5)",
          backdropFilter: "blur(20px)",
        }}
      >
        <Grid container spacing={3} alignItems="center">
          <Grid item xs={12} lg={4}>
            <SearchBar onSearch={handleSearch} />
          </Grid>
          <Grid item xs={12} lg={8}>
            <FilterPanel 
              type={type} 
              availability={availability} 
              sort={sort}
              onTypeChange={handleTypeChange} 
              onAvailabilityChange={handleAvailabilityChange} 
              onSortChange={handleSortChange}
            />
          </Grid>
        </Grid>
      </Paper>

      <Box sx={{ minHeight: "60vh", position: "relative" }}>
        {loading ? (
          <LoadingSkeleton />
        ) : (
          <>
            <Box mb={2} display="flex" justifyContent="space-between" alignItems="center">
              <Typography variant="body1" color="text.secondary" sx={{ fontWeight: 600 }}>
                Showing {pets.length} of {totalElements} pets
              </Typography>
            </Box>
            <Grid container spacing={3}>
              {pets.map((pet) => (
                <Grid item key={pet.id} xs={12} sm={6} md={4} lg={3}>
                  <PetCard pet={pet} onEdit={handleEditPet} onDelete={handleDeletePet} />
                </Grid>
              ))}
              {pets.length === 0 && (
                <Grid item xs={12}>
                  <Paper sx={{ p: 8, textAlign: "center", borderRadius: 4 }}>
                    <PetsIcon sx={{ fontSize: 64, color: "divider", mb: 2 }} />
                    <Typography variant="h5" color="text.secondary" gutterBottom>
                      No pets found matching your criteria.
                    </Typography>
                    <Button variant="text" onClick={() => {
                      setSearch("");
                      setType("");
                      setAvailability(null);
                    }}>
                      Clear all filters
                    </Button>
                  </Paper>
                </Grid>
              )}
            </Grid>
          </>
        )}
      </Box>
      
      {totalPages > 1 && (
        <Box display="flex" justifyContent="center" mt={4} mb={4}>
          <Pagination 
            count={totalPages} 
            page={page + 1} 
            onChange={handlePageChange} 
            color="primary"
            shape="rounded"
            disabled={loading}
          />
        </Box>
      )}

      <PetForm
        open={formOpen}
        onClose={() => setFormOpen(false)}
        onSubmit={handleFormSubmit}
        initialData={selectedPet}
        title={selectedPet ? "Edit Pet" : "Add New Pet"}
      />
    </Container>
  );
};

export default PetListPage;
