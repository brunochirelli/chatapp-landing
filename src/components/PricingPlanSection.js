import React from 'react';
import styled from 'styled-components';

import { Typography, Container, Grid } from '@material-ui/core';
import { Section } from '../styles/components';
import PricingCard from './PricingCard';

import professionalcart from '../images/professionalcart.svg';
import personalcart from '../images/personalcart.svg';

const Wrapper = styled(Container)``;

const PricingPlanSection = () => (
    <Wrapper component={Section}>
        <Typography
            variant="h2"
            component="h2"
            tabIndex={0}
            align="center"
            paragraph
        >
            Pricing Plan
        </Typography>
        <Typography align="center">
            But I must explain to you how all this mistaken idea of denouncing
            pleasure and praising pain was born and I will give you a complete
            account of the system.
        </Typography>

        <Grid container spacing={2} justify="center">
            <Grid item xs={12} sm={6} md={4}>
                <PricingCard
                    title="Personal"
                    price={18}
                    features={[
                        '80gb data storage',
                        'More than 1500+ friend include',
                        'Group chat available',
                        'Categories based friend list',
                    ]}
                    ctaText="Sign Up!"
                    ctaLink="/"
                    secCtaText="Try 30 Days Free"
                    image={personalcart}
                />
            </Grid>

            <Grid item xs={12} sm={6} md={4}>
                <PricingCard
                    title="Professional"
                    price={35}
                    features={[
                        '80gb data storage',
                        'More than 1500+ friend include',
                        'Group chat available',
                        'Categories based friend list',
                    ]}
                    ctaText="Sign Up!"
                    ctaLink="/"
                    secCtaText="Try 30 Days Free"
                    image={professionalcart}
                />
            </Grid>
        </Grid>
    </Wrapper>
);

export default PricingPlanSection;
