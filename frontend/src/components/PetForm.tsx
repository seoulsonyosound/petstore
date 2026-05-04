import React, { useState, useEffect } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
  MenuItem,
  Grid,
  FormControlLabel,
  Switch,
} from "@mui/material";
import { Pet } from "../services/petService";

interface PetFormProps {
  open: boolean;
  onClose: () => void;
  onSubmit: (pet: Pet) => void;
  initialData?: Pet | null;
  title: string;
}

const PetForm: React.FC<PetFormProps> = ({ open, onClose, onSubmit, initialData, title }) => {
  const [formData, setFormData] = useState<Pet>({
    name: "",
    type: "DOG",
    breed: "",
    age: 0,
    sex: "MALE",
    availability: true,
    imageUrl: "",
  });

  useEffect(() => {
    if (initialData) {
      setFormData(initialData);
    } else {
      setFormData({
        name: "",
        type: "DOG",
        breed: "",
        age: 0,
        sex: "MALE",
        availability: true,
        imageUrl: "",
      });
    }
  }, [initialData, open]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : (name === "age" ? parseInt(value) || 0 : value),
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
      <DialogTitle>{title}</DialogTitle>
      <form onSubmit={handleSubmit}>
        <DialogContent>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                name="name"
                label="Name"
                fullWidth
                required
                value={formData.name}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                name="type"
                label="Type"
                select
                fullWidth
                required
                value={formData.type}
                onChange={handleChange}
              >
                <MenuItem value="DOG">Dog</MenuItem>
                <MenuItem value="CAT">Cat</MenuItem>
                <MenuItem value="BIRD">Bird</MenuItem>
                <MenuItem value="FISH">Fish</MenuItem>
              </TextField>
            </Grid>
            <Grid item xs={6}>
              <TextField
                name="sex"
                label="Sex"
                select
                fullWidth
                required
                value={formData.sex}
                onChange={handleChange}
              >
                <MenuItem value="MALE">Male</MenuItem>
                <MenuItem value="FEMALE">Female</MenuItem>
                <MenuItem value="UNKNOWN">Unknown</MenuItem>
              </TextField>
            </Grid>
            <Grid item xs={12}>
              <TextField
                name="breed"
                label="Breed"
                fullWidth
                required
                value={formData.breed}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                name="age"
                label="Age"
                type="number"
                fullWidth
                required
                value={formData.age}
                onChange={handleChange}
                inputProps={{ min: 0 }}
              />
            </Grid>
            <Grid item xs={6}>
              <FormControlLabel
                control={
                  <Switch
                    name="availability"
                    checked={formData.availability}
                    onChange={handleChange}
                    color="primary"
                  />
                }
                label="Available"
                sx={{ mt: 1 }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                name="imageUrl"
                label="Image URL"
                fullWidth
                required
                value={formData.imageUrl}
                onChange={handleChange}
              />
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions sx={{ px: 3, pb: 3 }}>
          <Button onClick={onClose}>Cancel</Button>
          <Button type="submit" variant="contained" color="primary">
            Save
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  );
};

export default PetForm;
