import React, { useState } from 'react';
import {
  Flex,
  Input,
  InputGroup,
  InputLeftElement,
  Icon,
} from '@chakra-ui/core';

import { useHistory } from 'react-router-dom';

const Search = () => {
  const [searchValue, setSearchValue] = useState('');
  const history = useHistory();

  const handleChange = (event) => setSearchValue(event.target.value);

  const handleSearch = (event) => {
    if (event.keyCode === 13) history.push(`/search?query=${searchValue}`);
  };

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
          px={5}
          py="30px"
          onChange={handleChange}
          onKeyDown={handleSearch}
        />
      </InputGroup>
    </Flex>
  );
};

export default Search;
