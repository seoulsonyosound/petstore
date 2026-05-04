import React from "react";
import { Grid, Paper, Typography, Box, Avatar } from "@mui/material";
import PetsIcon from "@mui/icons-material/Pets";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import FavoriteIcon from "@mui/icons-material/Favorite";

interface StatsSummaryProps {
  total: number;
  available: number;
  adopted: number;
}

const StatsSummary: React.FC<StatsSummaryProps> = ({ total, available, adopted }) => {
  const stats = [
    { label: "Total Pets", value: total, icon: <PetsIcon />, color: "#1e40af" },
    { label: "Available", value: available, icon: <CheckCircleIcon />, color: "#059669" },
    { label: "Adopted", value: adopted, icon: <FavoriteIcon />, color: "#e11d48" },
  ];

  return (
    <Grid container spacing={3} sx={{ mb: 4 }}>
      {stats.map((stat, index) => (
        <Grid item xs={12} sm={4} key={index}>
          <Paper
            sx={{
              p: 3,
              display: "flex",
              alignItems: "center",
              gap: 2,
              borderRadius: 4,
              transition: "transform 0.2s",
              "&:hover": { transform: "translateY(-4px)" },
            }}
          >
            <Avatar
              sx={{
                bgcolor: `${stat.color}15`,
                color: stat.color,
                width: 56,
                height: 56,
              }}
            >
              {stat.icon}
            </Avatar>
            <Box>
              <Typography variant="body2" color="text.secondary" sx={{ fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.05em" }}>
                {stat.label}
              </Typography>
              <Typography variant="h4" sx={{ fontWeight: 800 }}>
                {stat.value}
              </Typography>
            </Box>
          </Paper>
        </Grid>
      ))}
    </Grid>
  );
};

export default StatsSummary;
