import React from 'react';
import MasonryGrid from './MasonryGrid';
import Search from './Search';
import useImage from '../hooks/useImage';
import { Box, Flex, Spinner, useToast, useColorMode } from '@chakra-ui/core';

const Home = () => {
  const { loading, error } = useImage();
  const { colorMode } = useColorMode();
  const toast = useToast();
  const bgColor = { light: '#fff', dark: '#262626' };

  if (loading || error) {
    return (
      <Flex justify="center" h="100vh" align="center" bg={bgColor[colorMode]}>
        <Spinner size="xl" />
        {error &&
          toast({
            title: 'An error occurred.',
            status: 'error',
            duration: 10000,
            position: 'bottom-left',
          })}
      </Flex>
    );
  }
  return (
    <Box bg={bgColor[colorMode]} pb="3rem">
      <Search />
      <MasonryGrid />
    </Box>
  );
};

export default Home;
