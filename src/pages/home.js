import React from 'react'
import {
  Box,
  Center,
  Flex,
  Heading,
  InputGroup,
  InputRightElement,
  Input,
  Text,
  Spacer,
  Image,
  Button,
} from '@chakra-ui/react'
import { SearchIcon } from '@chakra-ui/icons'

export default function HomePage() {
  return (
    <Box>
      <Center
        id="hero"
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

      <Center id="home-content" p={10} display="flex" flexDirection="column">
        <Heading as="h3" size="md" maxW="30ch" textAlign="center">
          Whether you’re buying, selling or renting, we can help you move
          forward.
        </Heading>

        <Flex id="cards" m={10} width="3xl">
          <Flex
            id="card-buy"
            bg="white"
            p={6}
            boxShadow="base"
            borderRadius="md"
            flexDirection="column"
            align="center"
          >
            <Image boxSize="250px" src="/images/card-buy.svg" alt="Card Buy" />
            <Heading textAlign="center" as="h3">
              Buy a property
            </Heading>
            <Text textAlign="center" maxW="xs" mt={4} mb={4}>
              Find your place with an immersive photo experience and the most
              listings, including things you won’t find anywhere else.
            </Text>
            <Button colorScheme="yellow">Browse properties</Button>
          </Flex>

          <Spacer />

          <Flex
            id="card-sell"
            bg="white"
            p={6}
            boxShadow="base"
            borderRadius="md"
            flexDirection="column"
            align="center"
          >
            <Image boxSize="250px" src="/images/card-sell.svg" alt="Card Buy" />
            <Heading textAlign="center" as="h3">
              Sell a property
            </Heading>
            <Text textAlign="center" maxW="xs" mt={4} mb={4}>
              We’re creating a seamless online experience – from shopping on the
              largest rental network, to applying, to paying rent.
            </Text>
            <Button colorScheme="yellow">Create a listing</Button>
          </Flex>
        </Flex>
      </Center>
    </Box>
  )
}
