import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, Container } from '@mui/material';

const BlogCard = () => {
    return (
        <Container >
            <Card>
                <CardActionArea component={RouterLink} to='/blog/1'>
                    <CardMedia
                        component="img"
                        height="170"
                        alt="Blog Post"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Blog Post
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Blurb
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </Container>
    );
};

export const JumboBlogCard = ({ content }) => {
    return (
        <Container >
            <Card>
                <CardActionArea component={RouterLink} to={`/blog/${content._id}`}>
                    <CardMedia
                        component="img"
                        height="400"
                        alt="Blog Post"
                        image={content.image}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {content.title}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {content.blurb}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </Container>
    );
}

export default BlogCard;