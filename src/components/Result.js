import React from 'react';
import {
  Flex,
  Text,
  Box,
  Spinner,
  useColorMode,
  useToast,
} from '@chakra-ui/core';
import { useLocation } from 'react-router-dom';
import queryString from 'query-string';
import useImage from '../hooks/useImage';
import MasonryGrid from './MasonryGrid';
import Toggle from './Toggle';

const Result = () => {
  const { search } = useLocation();
  const { query } = queryString.parse(search);
  const { loading, error } = useImage(query.toLowerCase());
  const { colorMode } = useColorMode();
  const toast = useToast();

  const bgColor = { light: '#fff', dark: '#262626' };
  const topColor = { light: '#cccccc', dark: '#121212' };

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
    <Box bg={bgColor[colorMode]}>
      <Toggle />
      <Flex pt="8rem" pb="12rem" px="3rem" bg={topColor[colorMode]}>
        <Text fontSize="4xl" fontWeight="900">
          Search Results for{' '}
          <Text as="span" color="grey">
            "{query[0].toUpperCase() + query.slice(1)}"
          </Text>
        </Text>
      </Flex>
      <MasonryGrid search={query.toLowerCase()} />
    </Box>
  );
};

export default Result;
