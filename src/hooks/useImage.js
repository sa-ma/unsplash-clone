import { useState, useEffect } from 'react';
import axios from 'axios';

const useImage = (searchValue) => {
  const [loading, setLoading] = useState();
  const [imageData, setImageData] = useState();
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchImages = async (search) => {
      setLoading(true);
      try {
        const { data } = await axios.get(
          'https://api.unsplash.com/search/photos',
          {
            params: {
              client_id: process.env.REACT_APP_ACCESS_KEY,
              query: search ? search : 'black artist',
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
        console.error(error);
        setError(error);
        setLoading(false);
      }
    };
    fetchImages(searchValue);
  }, [searchValue]);

  return { loading, imageData, error };
};

export default useImage;
