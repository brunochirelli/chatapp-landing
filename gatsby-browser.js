import React from 'react';
import { CssBaseline } from '@material-ui/core';

export const wrapRootElement = ({ element }) => (
  <>
    <CssBaseline />
    {element}
  </>
);
