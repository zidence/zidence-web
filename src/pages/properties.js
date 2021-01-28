import React from 'react'
import { Box, Flex, Container, Heading } from '@chakra-ui/react'

import PropertiesCards from '../components/PropertiesCards'
import PropertiesMaps from '../components/PropertiesMaps'

export default function PropertiesPage() {
  return (
    <Container>
      <Box py="5" borderBottom="2px solid" borderBottomColor="orange.300">
        <Heading as="h1" size="xl">
          All properties
        </Heading>
      </Box>

      <Flex id="properties-content">
        <PropertiesCards />
        <PropertiesMaps />
      </Flex>
    </Container>
  )
}
