import React from 'react';
import { Typography, Container, Grid } from '@material-ui/core';
import { Button } from 'gatsby-theme-material-ui';
import { Aside } from '../styles/components';

const SubscribeSection = () => (
    <Container component={Aside}>
        <Typography variant="h2" component="h2">
            Subscribe Newsletter for Keep Updated
        </Typography>
        <Typography>
            But I must explain to you how all this mistaken idea of denouncing
            pleasure and praising pain was born and I complete account of the
            system, and expound the actual teachings.
        </Typography>
        <Button variant="contained">Subscribe</Button>
    </Container>
);

export default SubscribeSection;
