import React from 'react';
import styled from 'styled-components';

import { Typography, Container } from '@material-ui/core';
import { Button } from 'gatsby-theme-material-ui';
import { Section } from '../styles/components';

const Wrapper = styled(Container)``;

const VideoFeature = () => (
    <Wrapper component={Section}>
        <Section>
            <Typography variant="h2" component="h2" tabIndex={0}>
                You can easily record video call
            </Typography>
            <Typography>
                But I must explain to you how all this mistaken idea of
                denouncing pleasure and praising pain was born and I will give
                you a complete account of the system, and expound the actual
                teachings of the great explorer of the truth.
            </Typography>
            <Typography variant="h3" component="h3">
                Download App Now
            </Typography>
            <Button>Get it on Google Play</Button>
            <Button>Get it on App Store</Button>
        </Section>
    </Wrapper>
);

export default VideoFeature;
