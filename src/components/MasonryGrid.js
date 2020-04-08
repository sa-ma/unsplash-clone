import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Box } from '@chakra-ui/core';
import Image from './Image';

const MasonryGrid = () => {
  const [loading, setLoading] = useState(false);
  const [imageData, setImageData] = useState();
  const [error, setError] = useState(null);

  const fetchImages = async () => {
    setLoading(true);
    try {
      const { data } = await axios.get(
        'https://api.unsplash.com/search/photos',
        {
          params: {
            client_id: process.env.REACT_APP_ACCESS_KEY,
            query: 'black artist',
            per_page: '9',
            color: 'black',
          },
        }
      );
      const strippedData = await data.results.map((item) => {
        const {
          id,
          urls: { regular },
          alt_description,
          user: { name, location },
        } = item;
        return { id, regular, alt_description, name, location };
      });
      setImageData(strippedData);
      setLoading(false);
    } catch (error) {
      setError(error);
      setLoading(false);
      console.error(error);
    }
  };

  const handleHeight = () =>
    `${Math.floor(Math.random() * (400 - 200) + 200)}px`;
  useEffect(() => {
    fetchImages();
  }, []);
  return (
    <Box
      maxW="900px"
      mx="auto"
      my="5rem"
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
