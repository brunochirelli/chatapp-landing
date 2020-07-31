import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Button, useTheme } from '@material-ui/core';

const CtaButtonStyled = styled(Button)`
    display: flex;
    justify-content: center;
    margin: 1rem auto;
    color: white;
    font-size: 1rem;
    text-transform: initial;
    background: #da3c17;
    border-radius: 5rem;
`;

export const CtaButton = ({ children, ...rest }) => {
    const theme = useTheme();
    return (
        <CtaButtonStyled
            size="large"
            variant="contained"
            disableElevation
            {...rest}
        >
            {children}
        </CtaButtonStyled>
    );
};

CtaButton.propTypes = {
    children: PropTypes.node.isRequired,
};

const SectionStyled = styled.section`
    padding-top: 2rem;
    padding-bottom: 2rem;
    background: ${({ background }) => background || 'inherit'};
`;

export const Section = ({ children, background, ...rest }) => (
    <SectionStyled background={background} {...rest}>
        {children}
    </SectionStyled>
);

Section.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node,
    ]).isRequired,
    background: PropTypes.string,
};

const AsideStyled = styled.aside`
    input {
        border: none;

        &::placeholder {
            color: #2bc9c4;
        }
    }
`;

export const Aside = ({ children, background, ...rest }) => (
    <AsideStyled background={background} {...rest}>
        {children}
    </AsideStyled>
);

Aside.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node,
    ]).isRequired,
    background: PropTypes.string,
};
