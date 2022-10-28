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
                setArticleDetails(res.data);
            })
            .catch(err => console.log(err));
    }, [articleId]);

    return (
        <div>
            <AppBar currentPage='Wiki' />
            <Container maxWidth='xl' mt={1} style={{ marginTop: '1rem', marginBottom: '1rem', backgroundColor: '#AFA8BA' }}>
                <Grid container>

                    <Grid item md={9} pb={2}>
                        {articleDetails === undefined ? null : (
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
                                {articleDetails.paragraphs.map((section, i) => {
                                    console.log(section.Content)
                                    // if (p.split(' ').length === p.length) return <Typography variant='h6'>{p}</Typography
                                    return (
                                        <div index={i}>
                                            <Typography my={1} variant='h4'>{section.Title}</Typography>
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
                    </Grid>
                    <Grid item md={3}>
                        <SideBar />
                    </Grid>
                </Grid>
            </Container >
            <Footer />
        </div >
    );
};

export default WikiArticlePage;