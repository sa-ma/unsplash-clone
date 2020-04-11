import React from 'react';
import { Flex, Text, Box } from '@chakra-ui/core';
import { useLocation } from 'react-router-dom';
import queryString from 'query-string';
import MasonryGrid from './MasonryGrid';

const Result = () => {
  const { search } = useLocation();
  const { query } = queryString.parse(search);

  return (
    <Box>
      <Flex pt="8rem" pb="12rem" bg="#cccccc" px="3rem">
        <Text fontSize="4xl" fontWeight="900">
          Search Results for "{query[0].toUpperCase() + query.slice(1)}"
        </Text>
      </Flex>
      <MasonryGrid search={query.toLowerCase()} />
    </Box>
  );
};

export default Result;
