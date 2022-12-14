import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Box } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Footer = () => {
    return (
        <Container maxWidth='xl' className="footer colored-section">
            <Box my='auto'>
                <a href='https://www.instagram.com/lucas_asher_a/?hl=en'>
                    <InstagramIcon className='icon' fontSize='large' />
                </a>
                <a href='https://github.com/LucasAho'>
                    <GitHubIcon className='icon' fontSize='large' />
                </a>
                <a href='https://www.linkedin.com/in/lucas-asher-679569193/'>
                    <LinkedInIcon className='icon' fontSize='large' />
                </a>
                <Link to='/contact'>
                    <EmailIcon className='icon' fontSize='large' />
                </Link>
            </Box>
        </Container>
    );
};

export default Footer;
