import React, { useState } from 'react';
import { keyframes } from '@emotion/core';
import {
  Box,
  Flex,
  PseudoBox,
  CloseButton,
  Text,
  Image as Img,
  Skeleton,
} from '@chakra-ui/core';

const zoom = keyframes`
  from {transform:scale(0)}
  to {transform:scale(1)}
`;

const Image = ({ imageUrl, caption, user, height, location, loading }) => {
  const [display, setDisplay] = useState(false);

  const handleDisplay = () => setDisplay(!display);

  return (
    <Box>
      <PseudoBox
        as="section"
        onClick={handleDisplay}
        cursor="pointer"
        display="inline-block"
        w="100%"
        h={`${height()}`}
        m="5"
        p="3"
        bgImage={`url('${imageUrl}')`}
        bgSize="cover"
        bgRepeat="no-repeat"
        rounded={6}
        _hover={{ transform: 'scale(1.05)' }}
        transition="transform .4s"
      >
        <Box
          px="2"
          display="flex"
          flexDirection="column"
          justifyContent="flex-end"
          h="100%"
        >
          <Skeleton isLoaded={!loading} my={2} w="80%" h="16px">
            <Text fontSize="lg" color="white" fontWeight="bold">
              {user}
            </Text>
          </Skeleton>

          <Skeleton isLoaded={!loading} w="60%" h="16px">
            <Text fontSize="sm" color="gray.500">
              {location ? location : ''}
            </Text>
          </Skeleton>
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
    </Box>
  );
};

export default Image;
