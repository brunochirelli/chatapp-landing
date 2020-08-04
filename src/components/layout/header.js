import React from 'react';
import styled from 'styled-components';

import { Container, Grid, Hidden } from '@material-ui/core';
import { Chat } from '@material-ui/icons';
import { IconButton, Link } from 'gatsby-theme-material-ui';

import { CtaButton } from '../../styles/components';

const Wrapper = styled(Container)`
    ul {
        display: flex;
        align-items: center;

        li {
            padding-left: 2rem;
            list-style-type: none;
        }
    }
`;

const Header = () => (
    <Wrapper component="header" id="top">
        <Grid container alignItems="center" justify="space-between">
            <Grid item>
                <IconButton to="/">
                    <Chat />
                </IconButton>
            </Grid>
            <Grid item>
                <nav>
                    <ul>
                        <Hidden xsDown>
                            <li>
                                <Link to="#features">Features</Link>
                            </li>
                            <li>
                                <Link to="#how-it-works">How It Works</Link>
                            </li>
                            <li>
                                <Link to="#pricing">Pricing</Link>
                            </li>
                        </Hidden>
                        <li>
                            <CtaButton
                                size="small"
                                style={{ fontSize: '0.8rem' }}
                            >
                                Get Started
                            </CtaButton>
                        </li>
                    </ul>
                </nav>
            </Grid>
        </Grid>
    </Wrapper>
);

export default Header;
