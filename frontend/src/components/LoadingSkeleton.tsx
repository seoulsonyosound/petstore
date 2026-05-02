import React from "react";
import { Grid, Skeleton, Card, CardContent, Box } from "@mui/material";

const LoadingSkeleton: React.FC = () => {
  return (
    <Grid container spacing={3}>
      {[1, 2, 3, 4, 5, 6].map((item) => (
        <Grid item key={item} xs={12} sm={6} md={4}>
          <Card sx={{ height: "100%" }}>
            <Skeleton variant="rectangular" sx={{ aspectRatio: "1 / 1" }} />
            <CardContent>
              <Box display="flex" justifyContent="space-between" mb={1}>
                <Skeleton variant="text" width="60%" height={32} />
                <Skeleton variant="rectangular" width="20%" height={24} />
              </Box>
              <Skeleton variant="text" width="40%" />
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default LoadingSkeleton;
