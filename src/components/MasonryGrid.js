import React from 'react';
import { Box } from '@chakra-ui/core';
import Image from './Image';
import useImage from '../hooks/useImage';

const MasonryGrid = ({ search }) => {
  const { loading, imageData } = useImage(search);

  const handleHeight = () =>
    `${Math.floor(Math.random() * (400 - 200) + 200)}px`;

  return (
    <Box
      maxW="900px"
      w="100%"
      px="2rem"
      mx="auto"
      mt="-9rem"
      mb="5rem"
      style={{ columns: '3 200px', columnGap: '2rem' }}
    >
      {imageData &&
        imageData.map(({ id, regular, alt_description, name, location }) => (
          <Image
            key={id}
            imageUrl={regular}
            caption={alt_description}
            user={name}
            height={handleHeight}
            location={location}
            loading={loading}
          />
        ))}
    </Box>
  );
};

export default MasonryGrid;
