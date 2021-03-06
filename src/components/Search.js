import React, { useState } from 'react';
import {
  Flex,
  Input,
  InputGroup,
  InputLeftElement,
  Icon,
  Spinner,
  useToast,
  useColorMode,
} from '@chakra-ui/core';
import { useHistory } from 'react-router-dom';
import useImage from '../hooks/useImage';
import Toggle from './Toggle';

const Search = () => {
  const [searchValue, setSearchValue] = useState('');
  const { loading, error } = useImage();
  const { colorMode } = useColorMode();
  const history = useHistory();
  const toast = useToast();

  const bgColor = { light: '#cccccc', dark: '#121212' };
  const color = { light: 'gray.800', dark: 'white' };

  const handleChange = (event) => setSearchValue(event.target.value);

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

  const handleSearch = (event) => {
    if (event.keyCode === 13) history.push(`/search?query=${searchValue}`);
  };

  return (
    <Flex
      pt="8rem"
      pb="12rem"
      bg={bgColor[colorMode]}
      px="1rem"
      justify="center"
    >
      <Toggle />

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
          color={color[colorMode]}
        />
      </InputGroup>
    </Flex>
  );
};

export default Search;
