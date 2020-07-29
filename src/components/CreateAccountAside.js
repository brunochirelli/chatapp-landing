import React from 'react';
import styled from 'styled-components';

import { Container, Typography, TextField, Grid } from '@material-ui/core';
import { Button } from 'gatsby-theme-material-ui';
import { Aside } from '../styles/components';

import signupimage from '../images/signupimage.svg';

const Wrapper = styled(Container)`
    img {
        width: 100%;

        @media screen and (min-width: 600px) {
            padding: 2rem;
        }
    }
`;

const CreateAccountAside = () => (
    <Wrapper component={Aside}>
        <Grid container spacing={3} alignItems="center">
            <Grid item xs={12} sm={6}>
                <Typography variant="h2" component="h2" paragraph tabIndex={0}>
                    Create Account
                </Typography>
                <Typography variant="body1" gutterBottom>
                    We all need to start well must explain to you how all this
                    mistaken idea of denouncing pleasure and praising pain was
                    born and I will give you a complete account of the system,
                    and expound
                </Typography>
                <form>
                    <TextField
                        type="email"
                        name="email"
                        label="Email Address"
                    />
                    <Button>Get Started</Button>
                </form>
            </Grid>
            <Grid item xs={12} sm={6} aria-hidden="true">
                <img src={signupimage} alt="Signup app page" />
            </Grid>
        </Grid>
    </Wrapper>
);

export default CreateAccountAside;
