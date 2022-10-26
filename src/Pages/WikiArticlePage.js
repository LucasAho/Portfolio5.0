import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Grid, Typography } from '@mui/material';

import API from '../Common/API/API';
import AppBar from '../Components/AppBar/AppBar';
import Footer from '../Components/Footer/Footer';
import SideBar from '../Components/SideBar/SideBar';


const WikiArticlePage = () => {
    const { articleId } = useParams();
    const [articleDetails, setArticleDetails] = useState();
    useEffect(() => {
        API.fetchById(articleId)
            .then(res => {
                setArticleDetails(res.data)
            })
            .catch(err => console.log(err));
    }, [articleId])

    return (
        <div>
            <AppBar currentPage='Wiki' />
            <Container maxWidth='xl' mt={1} style={{ marginTop: '1rem', marginBottom: '1rem', backgroundColor: '#AFA8BA' }}>
                <Grid container>

                    <Grid item md={9}>
                        {!articleDetails ? null : (
                            <div>
                                <Grid container>
                                    <Grid item md={6}>
                                        <Typography variant='h3'>{articleDetails.title}</Typography>
                                        <Typography variant='caption'>{articleDetails.blurb}</Typography>
                                    </Grid>
                                    <Grid item md={6}>
                                        Image
                                        {/* {!articleDetails.image ? null : (
                                            <img src={articleDetails.image} alt={articleDetails.title} />
                                        )} */}
                                    </Grid>
                                </Grid>

                                {articleDetails.paragraphs.map(p => {
                                    return <Typography>{p}</Typography>
                                })}
                            </div>
                        )}
                    </Grid>
                    <Grid item md={3}>
                        <SideBar />
                    </Grid>
                </Grid>
            </Container>
            <Footer />
        </div >
    );
};

export default WikiArticlePage;