import React from 'react';
import { Box, Grid, Typography, Container } from '@material-ui/core';

// icons
import chaticon from '../images/chaticon.svg';
import fileshareicon from '../images/fileshareicon.svg';
import voiceicon from '../images/voiceicon.svg';
import { Section } from '../styles/components';

const CoreFeatures = () => (
    <Section background="#EFF8FF">
        <Box display="flex" justifyContent="center">
            <Typography className="header-label" variant="h2" component="h2">
                Core Features
            </Typography>
        </Box>

        <Container style={{ padding: '1.5rem 1rem', textAlign: 'center' }}>
            <Grid container spacing={3}>
                <Grid item xs={12} md={4}>
                    <img
                        className="features-icon"
                        src={chaticon}
                        alt="Message System Icon"
                    />
                    <Typography variant="h3" component="h3" paragraph>
                        Message System
                    </Typography>

                    <Typography variant="body1" gutterBottom>
                        But I must explain to you how all this mistaken idea of
                        denouncing pleasure and praising pain was born a
                        complete account.
                    </Typography>
                </Grid>

                <Grid item xs={12} md={4}>
                    <img
                        className="features-icon"
                        src={voiceicon}
                        alt="Message System Icon"
                    />
                    <Typography variant="h3" component="h3" paragraph>
                        Voice Call
                    </Typography>

                    <Typography variant="body1" gutterBottom>
                        But I must explain to you how all this mistaken idea of
                        denouncing pleasure and praising pain was born a
                        complete account.
                    </Typography>
                </Grid>

                <Grid item xs={12} md={4}>
                    <img
                        className="features-icon"
                        src={fileshareicon}
                        alt="Message System Icon"
                    />
                    <Typography variant="h3" component="h3" paragraph>
                        File Share
                    </Typography>

                    <Typography variant="body1" gutterBottom>
                        But I must explain to you how all this mistaken idea of
                        denouncing pleasure and praising pain was born a
                        complete account.
                    </Typography>
                </Grid>
            </Grid>
        </Container>
    </Section>
);

export default CoreFeatures;
