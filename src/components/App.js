import React from 'react';
import { ThemeProvider, theme, CSSReset } from '@chakra-ui/core';
import Image from './Image';

const customTheme = {
  ...theme,
  fonts: {
    body: "'Montserrat', sans-serif",
  },
};

const App = ({ children }) => {
  return (
    <ThemeProvider theme={customTheme}>
      <CSSReset />
      <Image />
      {children}
    </ThemeProvider>
  );
};

export default App;
