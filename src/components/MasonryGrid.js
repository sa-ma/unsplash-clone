import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { SimpleGrid } from '@chakra-ui/core';
import Image from './Image';

const MasonryGrid = () => {
  const [loading, setLoading] = useState(false);
  const [imageData, setImageData] = useState();
  const [error, setError] = useState(null);

  const fetchImages = async () => {
    setLoading(true);
    try {
      const { data } = await axios.get('https://api.unsplash.com/photos', {
        params: {
          client_id: process.env.REACT_APP_ACCESS_KEY,
          query: 'black',
          per_page: '12',
          order_by: 'relevant',
        },
      });
      const strippedData = await data.map((item) => {
        const {
          id,
          urls: { full },
          alt_description,
          user: { name },
        } = item;
        return { id, full, alt_description, name };
      });
      setImageData(strippedData);
      setLoading(false);
    } catch (error) {
      setError(error);
      setLoading(false);
      console.error(error);
    }
  };
  useEffect(() => {
    fetchImages();
  }, []);
  return (
    <SimpleGrid minChildWidth="250px" spacing="1rem">
      {imageData &&
        imageData.map(({ id, full, alt_description, name }) => (
          <Image
            key={id}
            imageUrl={full}
            caption={alt_description}
            user={name}
          />
        ))}
    </SimpleGrid>
  );
};

export default MasonryGrid;
