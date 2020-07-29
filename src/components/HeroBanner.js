import React from 'react';
import styled from 'styled-components';

import { Container, Typography, Box } from '@material-ui/core';
import { CtaButton, Section } from '../styles/components';

// images
import topbanner from '../images/topbanner.png';

const Wrapper = styled(Section)`
    @media screen and (min-width: 960px) {
        .intro-text {
            font-size: 3rem;
        }
    }
`;

const HeroBanner = () => (
    <Wrapper>
        <Container maxWidth="md">
            <Typography
                variant="h1"
                className="intro-text"
                component="h1"
                align="center"
                paragraph
                tabIndex={0}
            >
                Be together, whenever
            </Typography>
            <Typography variant="body1" align="center" component="p">
                I must explain to you how all this mistaken idea of denouncing
                pleasure and praising pain was born and I will give you a
                complete account.
            </Typography>
            <CtaButton>Try 30 Days Free</CtaButton>
        </Container>
        <Box
            display="flex"
            justifyContent="center"
            marginY={10}
            overflow="hidden"
        >
            <img
                className="top-banner"
                src={topbanner}
                alt="Chating with friends"
            />
        </Box>
    </Wrapper>
);

export default HeroBanner;
