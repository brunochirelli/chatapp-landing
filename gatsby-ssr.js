import React from 'react';
import RootWrapper from './RootWrapper';

export const wrapPageElement = ({ element }) => (
  <RootWrapper>{element}</RootWrapper>
);
