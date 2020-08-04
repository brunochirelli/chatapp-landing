import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, useScrollTrigger, Zoom, Fab } from '@material-ui/core';
import { KeyboardArrowUp } from '@material-ui/icons';

const useStyles = makeStyles(theme => ({
    root: {
        position: 'fixed',
        bottom: theme.spacing(2),
        right: theme.spacing(2),
    },
}));

const ScrollTop = props => {
    const classes = useStyles();

    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 100,
    });

    const handleClick = event => {
        const anchor = (event.target.ownerDocument || document).querySelector(
            '#top'
        );

        if (anchor) {
            anchor.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
    };

    return (
        <Zoom in={trigger}>
            <div
                onClick={handleClick}
                role="presentation"
                className={classes.root}
            >
                <Fab
                    color="secondary"
                    size="small"
                    aria-label="scroll back to top"
                >
                    <KeyboardArrowUp />
                </Fab>
            </div>
        </Zoom>
    );
};

export default ScrollTop;
