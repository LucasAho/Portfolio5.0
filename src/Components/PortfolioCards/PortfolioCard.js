import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions, Container } from '@mui/material';

export default function PortfolioCard({ data }) {
    return (
        <Container >
            <Card sx={{ maxWidth: 345 }}>
                <CardActionArea href={data.link}>
                    <CardMedia
                        component="img"
                        height="250"
                        image={data.img}
                        alt={data.title}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {data.title}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {data.description}
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button size="small" color="primary" href={data.code}>
                        View Code
                    </Button>
                </CardActions>
            </Card>
        </Container>
    );
}