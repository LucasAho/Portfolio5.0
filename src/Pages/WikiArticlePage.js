import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Grid, Typography } from '@mui/material';

import API from '../Common/API/API';
import AppBar from '../Components/AppBar/AppBar';
import Footer from '../Components/Footer/Footer';
import SideBar from '../Components/SideBar/SideBar';
import VoiceOfStone from '../Components/Tukren/VoiceOfStone';
import Planets from '../Components/Planets/Planets';


const WikiArticlePage = () => {
    const { articleId } = useParams();
    const [articleDetails, setArticleDetails] = useState();
    useEffect(() => {
        if (articleId === '635c4b070dd640ebbbf39bde') {
            setArticleDetails('Tukren');
        } else if (articleId === '636d20e96c3b1d6f8a6aa949') {
            setArticleDetails('Planets');
        } else {
            API.fetchById(articleId)
                .then(res => {
                    setArticleDetails(res.data);
                })
                .catch(err => console.log(err));
        }
    }, [articleId]);
    //console.log(articleDetails)
    return (
        <div>
            <AppBar currentPage='Wiki' />
            <Container maxWidth='xl' mt={1} style={{ marginTop: '1rem', marginBottom: '1rem' }}>
                <Grid container>
                    <Grid item md={9} pb={2}>
                        {articleDetails !== 'Tukren' && articleDetails !== 'Planets' ? (
                            <div>
                                {articleDetails === undefined ? (
                                    null
                                ) : (
                                    <div>
                                        <Grid container>
                                            <Grid item md={6}>
                                                <Typography variant='h3'>{articleDetails.title}</Typography>
                                                <Typography variant='subtitle1'>{articleDetails.blurb}</Typography>
                                            </Grid>
                                            <Grid item md={6}>
                                                {!articleDetails.image ? null : (
                                                    <img src={articleDetails.image} width={300} alt={articleDetails.title} />
                                                )}
                                            </Grid>
                                        </Grid>
                                        {articleDetails.paragraphs.map((section, i) => {
                                            return (
                                                <div key={i}>
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
                            </div>
                        ) : (
                            <>
                                {articleDetails === 'Planets' && (
                                    <Planets />
                                )}
                                {articleDetails === 'Tukren' && (
                                    <VoiceOfStone />
                                )}
                            </>
                        )}
                    </Grid >
                    <Grid item md={3}>
                        <SideBar articleId={articleId} wiki />
                    </Grid>
                </Grid >
            </Container >
            <Footer />
        </div >
    );
};

export default WikiArticlePage;