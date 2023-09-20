import React, { useEffect, useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CardActionArea from '@mui/material/CardActionArea';
import Typography from '@mui/material/Typography';


import API from '../Common/API/API';
import CustomAppBar from '../Components/AppBar/AppBar';
import SideBar from '../Components/SideBar/SideBar';
import Footer from '../Components/Footer/Footer';

const WikiHomePage = () => {
    const [articles, setArticles] = useState();
    useEffect(() => {
        API.fetchWikiMenu()
            .then(res => {
                setArticles(res.data);
            })
            .catch(err => console.log(err));
    }, [])

    return (
        <div>
            <CustomAppBar currentPage='Wiki' />
            {articles &&
                <Container maxWidth='xl' style={{ marginTop: '2rem', marginBottom: '1rem', backgroundColor: '#AFA8BA' }}>
                    <Grid container spacing={2} pb={2}>
                        <Grid item xs={12} md={8}>
                            <Card>
                                <CardActionArea component={RouterLink} to={`/blog/${articles[0]._id}`}>
                                    <CardMedia
                                        component="img"
                                        height="420"
                                        alt="Wiki Post"
                                        image={articles[0].image}
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="div">
                                            {articles[0].title}
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            {articles[0].blurb}
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <Card>
                                <CardActionArea component={RouterLink} to={`/blog/${articles[0]._id}`}>
                                    <CardMedia
                                        component="img"
                                        height="420"
                                        alt="Wiki Post"
                                        image={articles[1].image}
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="div">
                                            {articles[1].title}
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            {articles[1].blurb}
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Card>
                                <CardActionArea component={RouterLink} to={`/blog/${articles[0]._id}`}>
                                    <CardMedia
                                        component="img"
                                        height="420"
                                        alt="Wiki Post"
                                        image={articles[2].image}
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="div">
                                            {articles[2].title}
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            {articles[2].blurb}
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Box minHeight={300} style={{ backgroundColor: 'blue' }}>
                                Third most
                            </Box>
                        </Grid>
                    </Grid>
                </Container>
            }
            <Footer />
            {/*
                3 wide panel

            */}
        </div>
    );
};

export default WikiHomePage;