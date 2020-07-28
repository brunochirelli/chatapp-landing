import React from 'react';
import { CssBaseline, ThemeProvider } from '@material-ui/core';
import { theme } from './src/styles/theme';
import Layout from './src/components/layout';

const RootWrapper = ({ children }) => (
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <Layout>{children}</Layout>
  </ThemeProvider>
);

export default RootWrapper;
