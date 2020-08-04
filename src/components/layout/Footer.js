import React from 'react';
import styled from 'styled-components';

import { Container, Grid, Typography, IconButton } from '@material-ui/core';
import {
    Facebook,
    Twitter,
    Instagram,
    LinkedIn,
    Chat,
} from '@material-ui/icons';
import { Link } from 'gatsby-theme-material-ui';

const Wrapper = styled(Container)`
    margin: 3rem auto;

    ul,
    li {
        margin: 0;
        padding: 0;
        list-style-type: none;
    }
`;

const Footer = () => (
    <Wrapper component="footer">
        <Grid container component="nav">
            <Grid item xs={12} md={3}>
                <Chat style={{ fontSize: '2.5rem' }} />
            </Grid>
            <Grid item xs={6} sm={4} md={3}>
                <Typography variant="h6" component="h2">
                    Quick Links
                </Typography>
                <ul>
                    <li>
                        <Link to="/">Feature</Link>
                    </li>
                    <li>
                        <Link to="/">Terms & Condition</Link>
                    </li>
                    <li>
                        <Link to="/">User Feedback</Link>
                    </li>
                    <li>
                        <Link to="/">Online Payment</Link>
                    </li>
                </ul>
            </Grid>
            <Grid item xs={6} sm={4} md={3}>
                <Typography variant="h6" component="h2">
                    How It Works
                </Typography>
                <ul>
                    <li>
                        <Link to="/">Create Account</Link>
                    </li>
                    <li>
                        <Link to="/">Make Plan</Link>
                    </li>
                    <li>
                        <Link to="/">Select Date</Link>
                    </li>
                    <li>
                        <Link to="/">Online Payment</Link>
                    </li>
                </ul>
            </Grid>
            <Grid item xs={12} sm={4} md={3}>
                <IconButton to="/">
                    <Facebook />
                </IconButton>
                <IconButton to="/">
                    <Twitter />
                </IconButton>
                <IconButton to="/">
                    <Instagram />
                </IconButton>
                <IconButton to="/">
                    <LinkedIn />
                </IconButton>
            </Grid>
        </Grid>
    </Wrapper>
);

export default Footer;
