import React from 'react';
import { IconButton, useColorMode } from '@chakra-ui/core';

const Toggle = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <IconButton
      variant="none"
      pos="absolute"
      top="10px"
      right="15px"
      aria-label={colorMode ? 'light switch' : 'dark switch'}
      onClick={toggleColorMode}
      icon={colorMode ? 'sun' : 'moon'}
      isRound
    />
  );
};

export default Toggle;
