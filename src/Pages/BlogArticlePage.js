import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Grid, Typography } from '@mui/material';

import API from '../Common/API/API';
import AppBar from '../Components/AppBar/AppBar';
import Footer from '../Components/Footer/Footer';
import SideBar from '../Components/SideBar/SideBar';


const BlogArticlePage = () => {
    const { postId } = useParams();

    const [postDetails, setPostDetails] = useState();
    useEffect(() => {
        API.fetchById(postId)
            .then(res => {
                setPostDetails(res.data);
            })
            .catch(err => console.log(err));
    }, [postId]);
    return (
        <div>
            <AppBar currentPage='Blog' />
            <Container maxWidth='xl' mt={1} style={{ marginTop: '1rem', marginBottom: '1rem' }}>
                <Grid container>
                    <Grid item md={9} pb={2}>
                        <div>
                            {postDetails === undefined ? (
                                null
                            ) : (
                                <div>
                                    <Grid container>
                                        <Grid item md={6}>
                                            <Typography variant='h3'>{postDetails.title}</Typography>
                                            <Typography variant='subtitle1'>{postDetails.blurb}</Typography>

                                            <Typography mr={3} align='left' variant='caption'>Written: {postDetails.dateWritten}</Typography>

                                            <Typography ml={3} align='right' variant='caption'>{postDetails.genre}</Typography>

                                        </Grid>
                                        <Grid item md={6}>
                                            {!postDetails.image ? null : (
                                                <img src={postDetails.image} width={300} alt={postDetails.title} />
                                            )}
                                        </Grid>

                                    </Grid>
                                    {postDetails.paragraphs.map((section, i) => {
                                        return (
                                            <div key={i}>
                                                {section.Title !== '-' ?
                                                    <Typography my={1} variant='h4'>{section.Title}</Typography>
                                                    : <br />
                                                }
                                                {
                                                    section.Content.map(p => {
                                                        return (
                                                            <Typography pb={1} varitant='body1'>{p}</Typography>
                                                        )
                                                    })
                                                }
                                            </div>
                                        )
                                    })}
                                </div>
                            )}
                        </div>
                    </Grid >
                    <Grid item md={3}>
                        <SideBar postId={postId} blog />
                    </Grid>
                </Grid >
            </Container >
            <Footer />
        </div >
    );
};

export default BlogArticlePage;