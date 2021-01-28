import React from 'react'
import { Box, Flex, Container, Heading } from '@chakra-ui/react'

export default function PropertiesPage() {
  return (
    <Container>
      <Heading as="h1">All properties</Heading>
      <Flex id="properties-content">
        <Box id="properties-cards">
          <Box></Box>
        </Box>
        <Box id="properties-map"></Box>
      </Flex>
    </Container>
  )
}
