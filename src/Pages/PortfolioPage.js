import React, { useEffect, useState } from 'react';
import { CardActionArea, Container, Typography, Grid, Box, CardMedia } from '@mui/material';

import './PortfolioPage.css';
import ImageCarousel from '../Components/ImageSlider/ImageCarousel';
import WikiCard from '../Components/WikiCards/WikiCard';
import BlogCard from '../Components/BlogCards/BlogCard';
import { JumboBlogCard } from '../Components/BlogCards/BlogCard';
import ConLangImg from '../Common/images/doradren.jpg';
import Footer from '../Components/Footer/Footer';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/Card'
import API from '../Common/API/API';
import { Link as RouterLink } from 'react-router-dom';


const PortfolioPage = () => {
    const [blogTitles, setBlogTitles] = useState();
    useEffect(() => {
        API.fetchBlogMenu()
            .then(res => {
                setBlogTitles(res.data);
            })
            .catch(err => console.log(err));
    }, []);
    // const settings = {
    //     dots: true,
    //     infinite: true,
    //     speed: 500,
    //     slidesToShow: 5,
    //     slidesToScroll: 1,
    //     responsive: [
    //         {
    //             breakpoint: 1500,
    //             settings: {
    //                 slidesToShow: 4,
    //                 slidesToScroll: 4,
    //                 infinite: true,
    //                 dots: false
    //             }
    //         },
    //         {
    //             breakpoint: 1200,
    //             settings: {
    //                 slidesToShow: 3,
    //                 slidesToScroll: 3,
    //                 infinite: true,
    //                 dots: false
    //             }
    //         },
    //         {
    //             breakpoint: 1024,
    //             settings: {
    //                 slidesToShow: 2,
    //                 slidesToScroll: 3,
    //                 infinite: true,
    //                 dots: false
    //             }
    //         },
    //         {
    //             breakpoint: 600,
    //             settings: {
    //                 slidesToShow: 1,
    //                 slidesToScroll: 1
    //             }
    //         }
    //     ]
    // };
    return (
        <Box>
            <Container maxWidth='xl' className='header-container colored-section'>
                <Typography pt={1} variant='h4' align='center'>Lucas Asher</Typography>
                <Typography variant='h6' align='center'>Author, mountaineer, and web developer</Typography>
                <Grid container spacing={2} my={1}>
                    <Grid item md={8} px='auto' mx='auto'>
                        <Typography variant='body2' gutterBottom>
                            Hello! I am an alpinist and author from Colorado.
                            This site serves as a blog to share my adventures and creative works.
                        </Typography>
                        <Typography variant='body2' gutterBottom>
                            I spend much of my time in the mountains, always pushing the boundaries of what my body can achieve.
                            I have climbed over 60 unique 14,000+ foot peaks in the contiguous US, and I have set my sights on Alaska and Canada.
                        </Typography>
                        <Typography variant='body2' gutterBottom>
                            I also write science-fiction and poetry.
                            My science-fiction novel has been a work in progress since 2019, and much of this site is dedicated to the worldbuilding and language construction inherit to the novel's setting.
                        </Typography>
                    </Grid>
                    <Grid item md={6} pb={2} mx='auto'>
                        <ImageCarousel />
                    </Grid>
                </Grid>
            </Container >
            <Container maxWidth='xl' my={2} py={2}>
                <Grid container>
                    <Grid item md={6}>
                        <Typography pt={1} variant='h4' align='center'>Trip Reports</Typography>
                        <Typography pb={1} variant='body1' align='center'>Detailed summaries of my mountaineering adventures</Typography>
                    </Grid>
                    <Grid item md={6}>

                        <Card>
                            <CardActionArea component={RouterLink} to={'/tripreport/Sneffels092023'}>
                                <CardMedia
                                    component="img"
                                    height="420"
                                    alt="Trip Report"
                                    image='https://i.imgur.com/AToGoMO.jpg'
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        Sneffels's North Buttress
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        My first attempt of Sneffels's North Buttress, my would-be 14er finisher.
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>
                </Grid>
            </Container >
            <Container maxWidth='xl' my={1} className="colored-section">
                <Typography pt={1} variant='h4' align='center'>Wiki</Typography>
                <Typography pb={1} variant='body1' align='center'>Encyclopedia for the Planet Maalima and its inhabitants</Typography>
                <Grid container pb={3}>
                    <Grid item py={1} sm={6}><WikiCard source={{
                        img: ConLangImg,
                        id: '635c4b070dd640ebbbf39bde',
                        title: "ConLang How To",
                        blurb: "Detailed information on the constructed language, Tukren"
                    }} /></Grid>
                    <Grid item py={1} sm={6}><WikiCard source={{
                        img: 'https://i.imgur.com/r837OdL.png',
                        title: "Concerning Hīren",
                        id: "6359974af12a0ebeb89670d8",
                        blurb: 'Facts and Psuedo-history from the world of Maalima'
                    }} /></Grid>
                </Grid>
            </Container>
            <Container maxWidth='xl' my={1}>
                <Typography pt={1} variant='h4' align='center'>Blog</Typography>
                <Typography pb={1} variant='body1' align='center'>A collection of short stories, poetry, and personal essays</Typography>
                {blogTitles &&
                    <Grid container>
                        <Grid item xs={12} md={6}>
                            {blogTitles &&
                                <JumboBlogCard content={blogTitles[blogTitles.length - 1]} />
                            }
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <BlogCard content={blogTitles[blogTitles.length - 2]} />
                            <BlogCard content={blogTitles[blogTitles.length - 3]} my={1} />
                        </Grid>
                    </Grid>
                }
            </Container >
            <Footer />
        </Box >
    );
};

export default PortfolioPage;