import React from 'react';
import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, Container } from '@mui/material';



const WikiDisplayCard = () => {
    return (
        <Container>
            <Card>
                <CardActionArea component={RouterLink} to='/wiki/6359974af12a0ebeb89670d8'>
                    <CardMedia
                        component="img"
                        height="50%"
                        alt="Wiki Article"
                        src={source.img}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {source.title}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {source.blurb}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </Container>
    );
};

export default WikiDisplayCard;