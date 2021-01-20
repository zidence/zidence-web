import React from 'react'
import {
  Box,
  Center,
  Flex,
  Heading,
  InputGroup,
  InputRightElement,
  Input,
} from '@chakra-ui/react'
import { SearchIcon } from '@chakra-ui/icons'

export default function HomePage() {
  return (
    <Box>
      <Center
        h="500px"
        backgroundImage="url('/images/hero-home.jpg')"
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
        color="white"
      >
        <Flex direction="column" align="center">
          <Heading as="h1" size="4xl" mb={5}>
            The Ideal Residence
          </Heading>
          <Heading as="h2" size="xl" m={5}>
            Find your true comfort
          </Heading>
          <InputGroup color="black">
            <Input
              type="text"
              placeholder="Select a city"
              size="lg"
              bg="white"
            />
            <InputRightElement
              children={<SearchIcon color="blue.500" fontSize="1.5rem" />}
            />
          </InputGroup>
        </Flex>
      </Center>

      <Center m={10}>
        <Heading as="h3" size="md" maxW="30ch" textAlign="center">
          Whether you’re buying, selling or renting, we can help you move
          forward.
        </Heading>
      </Center>
    </Box>
  )
}
