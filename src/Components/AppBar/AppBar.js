import React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import AppBar from '@mui/material/AppBar';
import { Link } from 'react-router-dom';
import './AppBar.css';

const CustomAppBar = (props) => {
    return (
        <AppBar position="static">
            <Grid className='AppBar' container>
                <Grid pl={3} item xs={6}>
                    <Container>
                        <Typography variant='h3'>{props.currentPage}</Typography>
                    </Container>
                </Grid>
                <Grid item xs={6} direction='row' my='auto' className='nav-links'>
                    <Container className='nav-links'>
                        <Link to='/' style={{ color: '#FFF', textDecoration: "none", margin: '0px 1rem' }}>Home</Link>
                        <Link to='/wiki' style={{ color: '#FFF', textDecoration: "none", margin: '0px 1rem' }}>Wiki</Link>
                        <Link to='/blog' style={{ color: '#FFF', textDecoration: "none", margin: '0px 1rem' }}>Blog</Link>
                        <Link to='/tripreports' style={{ color: '#FFF', textDecoration: "none", margin: '0px 1rem' }}>Trip Reports</Link>
                    </Container>
                </Grid>
            </Grid>
        </AppBar>
    );
};

export default CustomAppBar;