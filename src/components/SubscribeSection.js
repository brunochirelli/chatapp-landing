import React from 'react';
import styled from 'styled-components';

import { Typography, Container, Grid } from '@material-ui/core';
import { Aside, CtaButton } from '../styles/components';

const Wrapper = styled(Container)`
    margin-top: 10rem;
`;

const SubscribeSection = () => (
    <Wrapper component={Aside}>
        <Grid container>
            <Grid item xs={12} sm={8}>
                <Typography variant="h2" component="h2" paragraph tabIndex={0}>
                    Subscribe Newsletter for Keep Updated
                </Typography>
                <Typography>
                    But I must explain to you how all this mistaken idea of
                    denouncing pleasure and praising pain was born and I
                    complete account of the system, and expound the actual
                    teachings.
                </Typography>
            </Grid>
            <Grid item xs={12} sm={4}>
                <CtaButton variant="contained">Subscribe</CtaButton>
            </Grid>
        </Grid>
    </Wrapper>
);

export default SubscribeSection;
