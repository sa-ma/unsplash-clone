import React from 'react';
import MasonryGrid from './MasonryGrid';
import Search from './Search';
import useImage from '../hooks/useImage';
import { Flex, Spinner, useToast } from '@chakra-ui/core';

const Home = () => {
  const { loading, error } = useImage();

  const toast = useToast();

  if (loading || error) {
    return (
      <Flex justify="center" h="100vh" align="center">
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
    <>
      <Search />
      <MasonryGrid />
    </>
  );
};

export default Home;
