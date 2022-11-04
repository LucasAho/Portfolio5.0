import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import { Container, Typography, Grid, Box } from '@mui/material';

import './PortfolioPage.css';
import { cardData } from '../Components/PortfolioCards/CardData';
import ImageCarousel from '../Components/ImageSlider/ImageCarousel';
import PortfolioCard from '../Components/PortfolioCards/PortfolioCard';
import WikiCard from '../Components/WikiCards/WikiCard';
import BlogCard from '../Components/BlogCards/BlogCard';
import { JumboBlogCard } from '../Components/BlogCards/BlogCard';
import ConLangImg from '../Common/images/doradren.jpg';
import Footer from '../Components/Footer/Footer';
import API from '../Common/API/API';

const PortfolioPage = () => {
    const [blogTitles, setBlogTitles] = useState();
    useEffect(() => {
        API.fetchBlogMenu()
            .then(res => {
                setBlogTitles(res.data);
            })
            .catch(err => console.log(err));
    }, []);
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1500,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    let renderCards = '';
    renderCards = cardData.map((card, i) => (
        <PortfolioCard key={i} data={card} />
    ));

    return (
        <Box>
            <Container maxWidth='xl' className='header-container colored-section'>
                <Typography pt={1} variant='h4' align='center'>Lucas Asher</Typography>
                <Typography variant='h6' align='center'>Author, mountaineer, and web developer</Typography>
                <Grid container spacing={2} my={1}>
                    <Grid item md={8} my='auto'>
                        <Typography variant='body2' gutterBottom>
                            Hello! I am a full stack web developer located in Colorado.
                        </Typography>
                        <Typography variant='body2' gutterBottom>
                            I currently work as a Technical Support Engineer with Microsoft Azure, specializing in App Service Development and OSS support.
                            While I am far from fond of this job, I am thankful for the learning opportunities that it provides.
                        </Typography>
                        <Typography variant='body2' gutterBottom>
                            Aside from development and cloud services, I also dabble in DevSecOps. I am CompTIA Sec+ certified, and studying for my Network+ and Server+ certifications.
                        </Typography>
                        <Typography variant='body2' gutterBottom>
                            Outside of work and learning, I spend as much time as possible out in the mountains.
                            Alpinism and mountaineering are my greatest passions, and I have climbed 50 14,000+ foot peaks in the last 2 years. I plan to summit all 72 14ers in the contiguous U.S
                        </Typography>
                        <Typography variant='body2' gutterBottom>
                            I also write science-fiction and poetry.
                            My science-fiction novel has been a work in progress since 2019, and much of this site is dedicated to the worldbuilding and language construction inherit to the novel's setting.
                        </Typography>
                        <Typography variant='body2' gutterBottom>
                            It can be difficult to balance all of these passions, but pushing through these challenges has forged me into a man that I can be proud of.
                            I know that I can achieve whatever I set my mind to, and I set my expectations of myself to match.
                        </Typography>
                    </Grid>
                    <Grid item md={4} pb={2} my='auto'>
                        <ImageCarousel />
                    </Grid>
                </Grid>
            </Container >
            <Container maxWidth='xl' my={1}>
                <Typography mt={1} variant='h4' align='center'>Portfolio</Typography>
                <Typography mx='auto' pb={1} className="portfolio-text" variant='body1' align='center'>A showcase of skills cultivated in full stack development. The following applications display understanding of RESTful APIs, the MERN stack, high fluency in ES6, and competency in visual design.</Typography>
                <Slider {...settings}>
                    {renderCards}
                </Slider>
            </Container>
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
                <Grid container>
                    <Grid item xs={12} md={6}>
                        {blogTitles &&
                            <JumboBlogCard content={blogTitles[blogTitles.length - 1]} />
                        }
                    </Grid>
                    <Grid item md={6}>
                        <BlogCard />
                        <BlogCard />
                    </Grid>
                </Grid>
            </Container>
            <Footer />
        </Box >
    );
};

export default PortfolioPage;