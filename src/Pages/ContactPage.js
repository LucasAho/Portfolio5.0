import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Grid, TextField } from '@mui/material';
import { Link } from 'react-router-dom';
import SendIcon from '@mui/icons-material/Send';
import emailjs, { init } from 'emailjs-com';

import Footer from '../Components/Footer/Footer';
import AppBar from '../Components/AppBar/AppBar';




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
            <AppBar currentPage='Contact' />
            <Container maxWidth='xl' mt={1} style={{ marginTop: '1rem', marginBottom: '1rem', backgroundColor: '#AFA8BA' }}>
                <Grid container>
                    <Grid item sm={6}>
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
                            <Button onClick={submit} variant="contained" endIcon={<SendIcon />}>
                                Send
                            </Button>
                            <Box className={emailSent === true ? 'visible' : 'invisible'}>
                                <Typography variant='body1'>
                                    Thank you for your message! I'll be in touch soon!
                                </Typography>
                                <Link to='/'>Return Home</Link>
                            </Box>
                        </Box>
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