import React from 'react';
import {
  Flex,
  Input,
  InputGroup,
  InputLeftElement,
  Icon,
} from '@chakra-ui/core';

const Search = () => {
  return (
    <Flex pt="8rem" pb="12rem" bg="#cccccc" px="2rem" justify="center">
      <InputGroup w="100%" rounded={6} maxW="1200px">
        <InputLeftElement
          h="100%"
          justifyContent="center"
          alignItems="center"
          children={<Icon name="search-2" color="gray.300" />}
        />
        <Input
          size="lg"
          type="search"
          placeholder="Search for Photo"
          // w="80%"
          // rounded={6}
          px={5}
          py="30px"
        />
      </InputGroup>
    </Flex>
  );
};

export default Search;
