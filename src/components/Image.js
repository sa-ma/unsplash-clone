import React from 'react';
import { keyframes } from '@emotion/core';
import {
  Box,
  Flex,
  PseudoBox,
  Text,
  Image as Img,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
  useDisclosure,
} from '@chakra-ui/core';

const zoom = keyframes`
  from {transform:scale(0)}
  to {transform:scale(1)}
`;

const Image = ({ imageUrl, caption, user, height, location }) => {
  const { isOpen, onClose, onOpen } = useDisclosure();

  return (
    <Box>
      <PseudoBox
        as="section"
        onClick={onOpen}
        cursor="pointer"
        display="inline-block"
        w="100%"
        maxW={{ xs: '100%', lg: '250px' }}
        h={{ xs: '300px', lg: `${height()}` }}
        my="5"
        mx="auto"
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
          <Text fontSize="lg" color="white" fontWeight="bold">
            {user}
          </Text>

          <Text fontSize="sm" color="gray.500">
            {location ? location : ''}
          </Text>
        </Box>
      </PseudoBox>

      <Modal
        size="full"
        isOpen={isOpen}
        onClose={onClose}
        preserveScrollBarGap
        bg="transparent"
      >
        <ModalOverlay />

        <ModalContent w="100%" bg="transparent" my="0">
          <ModalCloseButton
            size="xl"
            color="white"
            p="10px"
            top="15px"
            right={{ xs: 0, lg: '20px' }}
            rounded="100px"
            backgroundColor="rgba(0,0,0)"
            _hover={{ transform: 'scale(0.7)' }}
            transition="transform .4s"
          />
          <Flex
            flexDirection="column"
            justify="center"
            mx="auto"
            bg="white"
            rounded="6px"
            my="4rem"
          >
            <Img
              display="block"
              w="100%"
              maxW="700px"
              h="450px"
              src={imageUrl}
              alt={caption}
              animation={`${zoom} 0.2s`}
              roundedTopLeft="6px"
              roundedTopRight="6px"
              objectFit="cover"
            />
            <Box
              my="2rem"
              mx="1rem"
              bg="white"
              justifySelf="flex-end"
              roundedBottomLeft="6px"
              roundedBottomRight="6px"
            >
              <Text fontSize="2xl" fontWeight="bold">
                {user}
              </Text>
            </Box>
          </Flex>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default Image;
