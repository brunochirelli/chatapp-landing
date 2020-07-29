import React from 'react';
import styled from 'styled-components';

import PropTypes from 'prop-types';
import { Typography } from '@material-ui/core';
import { Button } from 'gatsby-theme-material-ui';

const Wrapper = styled.div`
    position: relative;
    padding: 1rem;
    border: 1px solid rgba(0, 0, 0, 0.1);
    border-radius: 1rem;

    .rotate-title {
        position: relative;
        top: -2.1rem;
        right: -85%;
        transform: rotate(90deg);
        transform-origin: left;
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
    ctaLink = '/',
    secCtaText = 'Try 30 Days Free',
    secCtaLink = '/',
}) => (
    <Wrapper>
        <div className="rotate-title">
            <TitleStyled
                variant="h3"
                component="h3"
                tabIndex={0}
                className="price-card-title"
            >
                {title}
            </TitleStyled>
        </div>
        <img src={image} alt="" aria-hidden="true" />
        <Typography variant="h4" component="h4">
            {price}
        </Typography>
        <ul>
            {features.map(feature => (
                <li>{feature}</li>
            ))}
        </ul>
        <Button to={ctaLink} variant="contained" color="primary">
            {ctaText}
        </Button>
        <Button to={secCtaLink}>{secCtaText}</Button>
    </Wrapper>
);

PricingCard.propTypes = {
    title: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    ctaText: PropTypes.string.isRequired,
    ctaLink: PropTypes.string.isRequired,
    secCtaText: PropTypes.string,
    secCtaLink: PropTypes.string,
    image: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
    features: PropTypes.arrayOf(PropTypes.string),
};

export default PricingCard;
