import React from 'react';
import styled from 'styled-components';

import { Typography, Container, Grid } from '@material-ui/core';
import { Button, Link } from 'gatsby-theme-material-ui';
import { Section } from '../styles/components';

import playstore from '../images/playstore.svg';
import appstore from '../images/appstore.svg';
import videoscreen from '../images/videoscreen.png';

const Wrapper = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    min-height: 50vh;
    margin: 6rem auto;
    padding: 1rem;
    background: #eff8ff;

    .content {
        h2 {
            font-weight: lighter;
            font-size: 3rem;
        }

        .download-buttons {
            margin-top: 2rem;

            img {
                margin: 0.5rem 0.5rem 0 0;
            }
        }
    }

    .video-img-wrapper {
        img {
            width: 100%;
            margin-top: -7rem;
        }

        @media screen and (min-width: 600px) {
            position: absolute;
            top: -25%;
            right: 0.5rem;
            height: 150%;

            img {
                position: relative;
                height: 100%;
                margin-top: 0;
                object-fit: contain;
            }
        }

        @media screen and (min-width: 960px) {
            right: 10%;
        }

        @media screen and (min-width: 1280px) {
            right: 17%;
        }
    }

    .MuiGrid-item {
        &:nth-of-type(1) {
            order: 2;
        }
        &:nth-of-type(2) {
            order: 1;
            /* margin-top: -7.5rem; */
        }

        @media screen and (min-width: 600px) {
            &:nth-of-type(1) {
                order: 1;
            }
            &:nth-of-type(2) {
                order: 2;
            }
        }
    }
`;

const VideoFeature = () => (
    <Wrapper component={Section}>
        <Container>
            <Grid container alignItems="center">
                <Grid item xs={12} sm={6} md={6} className="content">
                    <Typography
                        variant="h2"
                        component="h2"
                        tabIndex={0}
                        paragraph
                    >
                        You can easily record video call
                    </Typography>
                    <Typography paragraph>
                        But I must explain to you how all this mistaken idea of
                        denouncing pleasure and praising pain was born and I
                        will give you a complete account of the system, and
                        expound the actual teachings of the great explorer of
                        the truth.
                    </Typography>
                    <div className="download-buttons">
                        <Typography variant="h3" component="h3">
                            Download App Now
                        </Typography>
                        <Link to="/">
                            <img
                                src={playstore}
                                alt="Download on Google Store"
                            />
                        </Link>
                        <Link to="/">
                            <img src={appstore} alt="Download on App Store" />
                        </Link>
                    </div>
                </Grid>
                <Grid item xs={12} sm={6} md={5} className="video-img-wrapper">
                    <img
                        className="video-img"
                        src={videoscreen}
                        alt=""
                        aria-hidden="true"
                    />
                </Grid>
            </Grid>
        </Container>
    </Wrapper>
);

export default VideoFeature;
