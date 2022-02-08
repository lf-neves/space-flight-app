import React from 'react';
import { Typography, Grid } from "@mui/material";
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';

export const Header: React.FunctionComponent = () => {
    return (
        <Grid container style={{ marginTop: 80, justifyContent: 'center', paddingBottom: '20%', borderBottom: '1px solid ' }}>
            <Grid item style={{ textAlign: 'center' }}>
                <RocketLaunchIcon data-test="RocketIcon" sx={{ color: '#302E53', fontSize: '100px' }} />
                <Typography data-test="Title" variant="h3" sx={{ fontFamily: 'Roboto', color: '#302E53' }}>
                    Space Flight News
                </Typography>
            </Grid>
        </Grid >

    );
}