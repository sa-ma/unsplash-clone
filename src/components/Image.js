import React, { useState } from 'react';
import { keyframes } from '@emotion/core';
import {
  Box,
  Flex,
  PseudoBox,
  CloseButton,
  Text,
  Image as Img,
} from '@chakra-ui/core';

const zoom = keyframes`
  from {transform:scale(0)}
  to {transform:scale(1)}
`;

const Image = ({ imageUrl, caption, user }) => {
  const [display, setDisplay] = useState(false);

  const handleDisplay = () => setDisplay(!display);
  return (
    <>
      <PseudoBox
        as="section"
        onClick={handleDisplay}
        cursor="pointer"
        display="flex"
        alignItems="flex-end"
        w="250px"
        h="300px"
        m="5"
        p="3"
        bgImage={`url('${imageUrl}')`}
        bgSize="cover"
        bgRepeat="no-repeat"
        rounded={6}
        _hover={{ transform: 'scale(1.12)' }}
        transition="transform .4s"
      >
        <Box px="2">
          <Text fontSize="lg" color="white">
            {caption}
          </Text>
          <Text fontSize="sm" color="gray.500">
            {user}
          </Text>
        </Box>
      </PseudoBox>
      <Flex
        display={display ? 'flex' : 'none'}
        justifyContent="center"
        pos="fixed"
        zIndex="1"
        left="0"
        top="0"
        width="100%"
        height="100%"
        overflow="auto"
        bg="rgba(0,0,0,0.5)"
      >
        <CloseButton
          onClick={handleDisplay}
          size="lg"
          color="white"
          pos="absolute"
          top="15px"
          right={{ xs: 0, lg: '20px' }}
          _hover={{ transform: 'scale(0.7)' }}
          transition="transform .4s"
        />

        <Box
          w="3xl"
          h="auto"
          rounded="6px"
          my="5rem"
          bg="white"
          animation={`${zoom} 0.6s`}
        >
          <Img
            w="100%"
            height="450px"
            src={imageUrl}
            alt={caption}
            animation={`${zoom} 0.6s`}
            roundedTopLeft="6px"
            roundedTopRight="6px"
            objectFit="cover"
          />
          <Box
            p="3"
            bg="white"
            roundedBottomLeft="6px"
            roundedBottomRight="6px"
          >
            <Text fontSize="2xl" fontWeight="bold">
              {caption}
            </Text>
            <Text fontSize="lg" color="gray.500">
              {user}
            </Text>
          </Box>
        </Box>
      </Flex>
    </>
  );
};

export default Image;
