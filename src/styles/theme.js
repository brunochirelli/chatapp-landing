import { createMuiTheme } from '@material-ui/core';

export const theme = createMuiTheme({
    typography: {
        h1: {
            fontFamily: `"Rubik", "Roboto", "Helvetica", "Arial", "sans-serif"`,
            fontWeight: 700,
            fontSize: '2rem',
            color: '#15354B',
        },
        h2: {
            fontFamily: `"Rubik", "Roboto", "Helvetica", "Arial", "sans-serif"`,
            fontWeight: 700,
            fontSize: '1.75rem',
            color: '#15354B',
        },
        h3: {
            fontFamily: `"Rubik", "Roboto", "Helvetica", "Arial", "sans-serif"`,
            fontSize: '1.5rem',
            color: '#15354B',
        },
        h4: {
            fontFamily: `"Rubik", "Roboto", "Helvetica", "Arial", "sans-serif"`,
            fontSize: '1.25rem',
            color: '#15354B',
        },
        body1: {
            fontSize: '1rem',
        },
    },
    overrides: {
        MuiCssBaseline: {
            '@global': {
                html: {
                    fontSize: 18,
                },
            },
        },
    },
});
