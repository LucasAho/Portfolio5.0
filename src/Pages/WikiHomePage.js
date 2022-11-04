import { Grid, Container, Box } from '@mui/material';
import React, { useEffect } from 'react';
import API from '../Common/API/API';

import AppBar from '../Components/AppBar/AppBar';
import SideBar from '../Components/SideBar/SideBar';
import Footer from '../Components/Footer/Footer';

const WikiHomePage = () => {
    useEffect(() => {
        API.fetchWikiMenu()
            .then(res => {
                console.log(res.data)
            })
            .catch(err => console.log(err));
    }, [])

    return (
        <div>
            <AppBar currentPage='Wiki' />
            <Container maxWidth='xl' mt={1} style={{ marginTop: '1rem', marginBottom: '1rem', backgroundColor: '#AFA8BA' }}>
                <Grid container>
                    <Grid item md={9}>
                        <Box sx={{ width: 1 }}>
                            <Grid container>
                                <Grid item md={8}>
                                    Most recent article
                                </Grid>
                                <Grid item md={4}>
                                    favorite article
                                </Grid>
                                <Grid item md={6}>
                                    Second most recent
                                </Grid>
                                <Grid item md={6}>
                                    Third most
                                </Grid>
                            </Grid>
                        </Box>
                    </Grid>
                    <Grid item md={3}>
                        <SideBar />
                    </Grid>
                </Grid>
            </Container>
            <Footer />
            {/*
                3 wide panel

            */}
        </div>
    );
};

export default WikiHomePage;