import React from 'react';
import { ThemeProvider, CSSReset } from '@chakra-ui/core';

const App = () => {
  return (
    <ThemeProvider>
      <CSSReset />
      <h1>Hello World</h1>
    </ThemeProvider>
  );
};

export default App;
