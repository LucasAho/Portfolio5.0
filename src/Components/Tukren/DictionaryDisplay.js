import React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

export default function DictionaryDisplay({ word }) {

    return (
        <Card sx={{ display: 'flex' }}>
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                <CardContent sx={{ flex: '1 0 auto' }}>
                    <Grid container mx='auto' mb={2} spacing={2}>
                        <Grid item ml={-1} md={6}>
                            <Typography component="div" variant="h5">
                                {word.conlang}
                            </Typography>
                        </Grid>
                        <Grid item md={6}>
                            <Typography component="div" color="text.secondary" variant="subtitle1">
                                ({word.pronounciation})
                            </Typography>
                        </Grid>
                    </Grid>
                    <Typography variant="body1" component="div">
                        {word.english}
                    </Typography>
                    <Typography my={1} variant="body1" component="div">
                        {word.pos}
                    </Typography>
                    {word.sentence &&
                        <Typography variant="body1" color="text.secondary" component="div">
                            In a sentence: <br /> {word.sentence}
                        </Typography>
                    }
                    {word.etymology &&
                        <Typography variant="body1" color="text.secondary" component="div">
                            Origins: <br /> {word.etymology}
                        </Typography>
                    }
                </CardContent>
            </Box>
            {word.image && (
                <Box ml='auto'>
                    <CardMedia
                        component="img"
                        style={{ width: '250px' }}
                        image={word.image}
                        alt="Tukren Caligraphy"
                    />
                </Box>
            )}
        </Card>
    );
}
