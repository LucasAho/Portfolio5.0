import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Container from '@mui/material/Container';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Grid, TextField } from '@mui/material';
import { Link } from 'react-router-dom';
import SendIcon from '@mui/icons-material/Send';
import emailjs, { init } from 'emailjs-com';

import { FormValidation } from '../Common/FormValidation';
import Footer from '../Components/Footer/Footer';




init('ChvbgHdeEhHEse6Pk');

export default function ContactPage() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [emailSent, setEmailSent] = useState(false);
    const isValidEmail = email => {
        const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return regex.test(String(email).toLowerCase());
    };

    const submit = () => {
        if (isValidEmail(email)) {
            const serviceId = 'service_d8fjw5w';
            const templateId = 'template_c4qxm8i';;
            const templateParams = {
                name,
                email,
                message
            }
            emailjs.send(serviceId, templateId, templateParams)
                .then(res => console.log(res))
                .catch(error => console.log(error));

            if (name && email && message) {
                setName('');
                setEmail('');
                setMessage('');
                setEmailSent(true);
            } else {
                alert('Please fill out all fields');
            }
        } else {
            alert('Please use valid email');
        }
    }

    return (
        <Box>
            <Container maxWidth='xl' className='colored-section'>
                <Grid container alignItems='center'>
                    <Grid item xs={6}>
                        <Typography variant='h4'>Contact</Typography>
                    </Grid>
                    <Grid item xs={6}>
                        <Link to='/' style={{ color: '#FFF', textDecoration: "none" }}>Home</Link>
                    </Grid>
                </Grid>
            </Container>
            <Container maxWidth='xl' mt={1} style={{ marginTop: '1rem', marginBottom: '1rem', backgroundColor: '#AFA8BA' }}>
                <Grid container>
                    <Grid item sm={6}>
                        <form onSubmit={submit}>
                            <Box py={1}>
                                <TextField
                                    autoComplete='none'
                                    fullWidth
                                    label='Name'
                                    value={name}
                                    onChange={e => setName(e.target.value)}
                                />
                            </Box>
                            <Box py={1}>
                                <TextField
                                    autoComplete='none'
                                    fullWidth
                                    label='Email'
                                    value={email}
                                    onChange={e => setEmail(e.target.value)}
                                />
                            </Box>
                            <Box py={1}>
                                <TextField
                                    autoComplete='none'
                                    fullWidth
                                    label='Message'
                                    value={message}
                                    multiline
                                    minRows={10}
                                    onChange={e => setMessage(e.target.value)}
                                />
                            </Box>
                            <Box py={1}>
                                <Button type='submit' variant="contained" endIcon={<SendIcon />}>
                                    Send
                                </Button>
                            </Box>
                        </form>
                    </Grid>
                    <Grid item sm={6}>
                        <Typography>Thank you for contacting me! I will get back to you as soon as I am able.</Typography>
                    </Grid>
                </Grid>
            </Container>
            <Footer />
        </Box >
    )
}