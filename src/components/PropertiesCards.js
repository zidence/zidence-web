import React from 'react'
import { Box, Heading } from '@chakra-ui/react'

import propertiesData from '../data/properties.json'

export default function PropertiesCards() {
  return (
    <Box id="properties-cards" py={5}>
      {propertiesData.map((property, index) => {
        const id = `property-card-${property.id}`
        return (
          <Box
            key={id}
            id={id}
            py={5}
            my={5}
            boxShadow="base"
            borderRadius="md"
            flexDirection="column"
            align="center"
            bg="white"
          >
            <Heading as="h2" size="lg">
              {property.name}
            </Heading>
          </Box>
        )
      })}
    </Box>
  )
}
