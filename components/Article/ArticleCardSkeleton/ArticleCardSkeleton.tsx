import React from 'react'
import { Grid, Skeleton, Box } from "@mui/material";

export const ArticleCardSkeleton = () => (
    <Grid container spacing={4} sx={{ marginTop: 4 }}>
        <Grid item md={5}>
            <Skeleton variant="rectangular" height="260px" />
        </Grid>
        <Grid item md={6} sx={{ textAlign: 'left' }}>
            <Box>
                <Skeleton height="30px" />
                <Skeleton height="30px" width="50%" />
            </Box>
            <Box mt={2}>
                <Skeleton variant="text" />
                <Skeleton variant="text" />
                <Skeleton variant="text" />
                <Skeleton variant="text" width="50%" />
            </Box>
            <Box mt={2}>
                <Skeleton variant="rectangular" width="70px" height="25px" />
            </Box>
        </Grid>
    </Grid >
);