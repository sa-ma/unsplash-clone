import React from 'react';
import { ThemeProvider, theme, CSSReset } from '@chakra-ui/core';
import MasonryGrid from './MasonryGrid';
import Search from './Search';

const breakpoints = ['360px', '768px', '1024px', '1440px'];
breakpoints.sm = breakpoints[0];
breakpoints.md = breakpoints[1];
breakpoints.lg = breakpoints[2];
breakpoints.xl = breakpoints[3];

const customTheme = {
  ...theme,
  ...breakpoints,
  fonts: {
    body: "'Montserrat', sans-serif",
  },
};

const App = ({ children }) => {
  return (
    <ThemeProvider theme={customTheme}>
      <CSSReset />
      <Search />
      <MasonryGrid />
      {children}
    </ThemeProvider>
  );
};

export default App;
