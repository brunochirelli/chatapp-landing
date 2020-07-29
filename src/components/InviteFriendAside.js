import React from 'react';
import styled from 'styled-components';

import { Container, Typography, Grid } from '@material-ui/core';
import { Button } from 'gatsby-theme-material-ui';

import { Aside } from '../styles/components';

import invitefriend from '../images/invitefriend.svg';

const Wrapper = styled(Container)`
    img {
        width: 100%;

        @media screen and (min-width: 600px) {
            padding: 2rem;
        }
    }

    .MuiGrid-item {
        @media screen and (min-width: 600px) {
            &:nth-of-type(1) {
                order: 2;
            }

            &:nth-of-type(1) {
                order: 1;
            }
        }
    }
`;

const InviteFriendAside = () => (
    <Wrapper component={Aside}>
        <Grid container alignItems="center">
            <Grid item xs={12} sm={6}>
                <Typography variant="h2" component="h2" paragraph tabIndex={0}>
                    Invite Friend
                </Typography>
                <Typography variant="body1" gutterBottom>
                    But I must explain to you how all this mistaken idea of
                    denouncing pleasure and praising pain was born and I will
                    give you a complete account of the system, and expound the
                    actual teachings.
                </Typography>
                <Button>Get Started</Button>
            </Grid>
            <Grid item xs={12} sm={6} aria-hidden="true">
                <img src={invitefriend} alt="Signup app page" />
            </Grid>
        </Grid>
    </Wrapper>
);

export default InviteFriendAside;
