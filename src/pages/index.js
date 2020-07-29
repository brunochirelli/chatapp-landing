import React from 'react';
import styled from 'styled-components';

import { Button } from 'gatsby-theme-material-ui';
import { Typography, Container, Grid, Box, TextField } from '@material-ui/core';
import { CtaButton, Section } from '../styles/components';

import Layout from '../components/layout/layout';
import SEO from '../components/layout/seo';

import HeroBanner from '../components/HeroBanner';
import CoreFeatures from '../components/CoreFeatures';
import CreateAccountAside from '../components/CreateAccountAside';
import VideoFeature from '../components/VideoFeature';
import SubscribeSection from '../components/SubscribeSection';
import PricingPlanSection from '../components/PricingPlanSection';
import InviteFriendAside from '../components/InviteFriendAside';

const WrapperStyled = styled.div`
    section,
    aside {
        margin: 2.5rem auto;
    }

    .features-icon {
        margin: 1.5rem 0;
    }

    .top-banner {
        margin: 0 auto;
    }
`;

const IndexPage = () => (
    <WrapperStyled>
        <SEO title="Home" />
        <HeroBanner />
        <CoreFeatures />
        <CreateAccountAside />
        <InviteFriendAside />
        <PricingPlanSection />
        <VideoFeature />
        <SubscribeSection />
    </WrapperStyled>
);

export default IndexPage;
