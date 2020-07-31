import React from 'react';
import styled from 'styled-components';

import PropTypes from 'prop-types';
import { Typography, useTheme } from '@material-ui/core';
import { Button } from 'gatsby-theme-material-ui';

const Wrapper = styled.div`
    position: relative;
    margin-top: 1.5rem;
    padding: 1rem;
    text-align: center;
    border: 1px solid rgba(0, 0, 0, 0.1);
    border-radius: 1rem;

    .rotate-title {
        position: relative;
        top: -2.1rem;
        right: -90%;
        text-align: left;
        transform: rotate(90deg);
        transform-origin: left;

        @media screen and (min-width: 900px) {
            top: -4.1rem;
        }
    }

    .price {
        span:nth-of-type(1) {
            font-size: 0.8rem;
            line-height: 2.5;
            vertical-align: top;
        }
        span:nth-of-type(2) {
            font-size: 2rem;

            @media screen and (min-width: 960px) {
                font-size: 2.5rem;
            }
        }
        span:nth-of-type(3) {
            font-size: 0.8rem;
            line-height: 2;
            vertical-align: bottom;
        }
    }

    ul,
    li {
        margin: 0;
        padding: 0;
        list-style-type: none;
    }

    ul {
        margin: 1.5rem 0;

        li {
            margin: 0.5rem 0;
        }
    }

    @media screen and (min-width: 900px) {
        margin: 2rem auto;
        padding: 3rem;
        text-align: left;
    }
`;

const TitleStyled = styled(Typography)`
    display: inline-block;
    padding: 0.5rem 1rem;
    color: white;
    font-size: 1rem;
    background: #80e0dd;
    transform: rotate(180deg);
`;

const PricingCard = ({
    image,
    title,
    price,
    features,
    ctaText,
    ctaLink,
    secCtaText = 'Try 30 Days Free',
    secCtaLink = '/',
}) => {
    const theme = useTheme();

    return (
        <Wrapper>
            <div className="rotate-title">
                <TitleStyled
                    variant="h3"
                    component="h3"
                    tabIndex={0}
                    className="price-card-title"
                    style={{
                        background:
                            title === 'Personal'
                                ? theme.palette.primary.main
                                : theme.palette.secondary.main,
                    }}
                >
                    {title}
                </TitleStyled>
            </div>
            <img src={image} alt="" aria-hidden="true" />
            <Typography className="price" variant="h4" component="h4">
                <span>$</span>
                <span>{price}</span>
                <span>/month</span>
            </Typography>
            <hr />
            <ul>
                {features.map((feature, i) => (
                    <li key={`feature-${i}`}>{feature}</li>
                ))}
            </ul>
            <Button
                to={ctaLink}
                variant="contained"
                color={title === 'Personal' ? 'primary' : 'secondary'}
                disableElevation
                fullWidth
            >
                {ctaText}
            </Button>
            <Button to={secCtaLink} fullWidth>
                {secCtaText}
            </Button>
        </Wrapper>
    );
};

PricingCard.propTypes = {
    price: PropTypes.number.isRequired,
    ctaText: PropTypes.string.isRequired,
    ctaLink: PropTypes.string.isRequired,
    secCtaText: PropTypes.string,
    secCtaLink: PropTypes.string,
    title: PropTypes.oneOf(['Personal', 'Professional']).isRequired,
    image: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
    features: PropTypes.arrayOf(PropTypes.string),
};

export default PricingCard;
